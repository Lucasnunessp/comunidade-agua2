import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'
import * as THREE from 'three'

// ---------- shaders da água ----------
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseForce;
  varying vec3 vViewPos;
  varying float vElev;
  varying vec2 vUv;

  float waves(vec2 p) {
    float e = sin(p.x * 0.6 + uTime * 0.6) * 0.35;
    e += sin(p.y * 0.8 + uTime * 0.45) * 0.25;
    e += sin((p.x + p.y) * 1.3 + uTime * 0.9) * 0.12;
    e += sin(p.x * 2.1 - p.y * 1.7 - uTime * 1.1) * 0.06;
    return e;
  }

  void main() {
    vec3 pos = position;
    float e = waves(pos.xy);

    // o mouse cria uma ondulação que se espalha
    float d = distance(pos.xy, uMouse);
    e += exp(-d * d * 0.25) * sin(d * 4.0 - uTime * 3.0) * 0.35 * uMouseForce;

    pos.z += e;
    vElev = e;
    vUv = uv;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vViewPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uCoral;
  uniform vec3 uGold;
  varying vec3 vViewPos;
  varying float vElev;
  varying vec2 vUv;

  void main() {
    // normal calculada pelas derivadas da posição
    vec3 n = normalize(cross(dFdx(vViewPos), dFdy(vViewPos)));
    vec3 viewDir = normalize(-vViewPos);

    // cor base: fundo escuro nos vales, mais claro nas cristas
    float t = smoothstep(-0.6, 0.7, vElev);
    vec3 col = mix(uDeep, uMid, t);

    // luz dourada dramática (direcional) + luz coral do outro lado
    vec3 lightGold = normalize(vec3(0.5, 0.7, 0.6));
    vec3 lightCoral = normalize(vec3(-0.7, 0.2, 0.5));
    vec3 hGold = normalize(lightGold + viewDir);
    vec3 hCoral = normalize(lightCoral + viewDir);
    float specGold = pow(max(dot(n, hGold), 0.0), 60.0);
    float specCoral = pow(max(dot(n, hCoral), 0.0), 30.0);

    float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);

    col += uGold * specGold * 0.9;
    col += uCoral * specCoral * 0.5;
    col += uCoral * fresnel * 0.18;

    // some nas bordas para fundir com o fundo da página
    float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x)
               * smoothstep(0.0, 0.22, vUv.y) * smoothstep(1.0, 0.7, vUv.y);

    gl_FragColor = vec4(col, 0.92 * edge);
  }
`

// ---------- superfície de água ----------
function Water({ segments, mouse }) {
  const mesh = useRef()
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const { camera } = useThree()
  const size = { w: 22, h: 14 }

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(999, 999) },
      uMouseForce: { value: 0 },
      // versão clara, combinando com o fundo branco do site original
      uDeep: { value: new THREE.Color('#1c3447') },
      uMid: { value: new THREE.Color('#7da0b5') },
      uCoral: { value: new THREE.Color('#b08c7d') },
      uGold: { value: new THREE.Color('#fff1c9') },
    }),
    []
  )

  useFrame((state, delta) => {
    uniforms.uTime.value += delta

    // descobre onde o mouse "toca" o plano
    raycaster.setFromCamera(mouse.current.pos, camera)
    const hit = raycaster.intersectObject(mesh.current)[0]
    if (hit) {
      // uv -> coordenada local do plano
      const lx = (hit.uv.x - 0.5) * size.w
      const ly = (hit.uv.y - 0.5) * size.h
      uniforms.uMouse.value.lerp(new THREE.Vector2(lx, ly), 0.12)
    }
    // força diminui quando o mouse para
    mouse.current.energy *= 0.95
    uniforms.uMouseForce.value = THREE.MathUtils.lerp(
      uniforms.uMouseForce.value,
      Math.min(mouse.current.energy, 1),
      0.1
    )
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.6, 0, 0]} position={[0, -1.6, 0]}>
      <planeGeometry args={[size.w, size.h, segments, segments]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}

// ---------- partículas luminosas ----------
function Particles({ count, mouse }) {
  const points = useRef()

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = Math.random() * 6 - 1
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
      speeds[i] = 0.1 + Math.random() * 0.3
    }
    return { positions, speeds }
  }, [count])

  useFrame((state, delta) => {
    const arr = points.current.geometry.attributes.position.array
    const mx = mouse.current.pos.x * 9
    const my = mouse.current.pos.y * 4 + 1.5

    for (let i = 0; i < count; i++) {
      const ix = i * 3
      // sobe devagar e reinicia embaixo
      arr[ix + 1] += speeds[i] * delta
      if (arr[ix + 1] > 5) arr[ix + 1] = -1.5
      arr[ix] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002

      // afasta suavemente do cursor
      const dx = arr[ix] - mx
      const dy = arr[ix + 1] - my
      const dist2 = dx * dx + dy * dy
      if (dist2 < 4) {
        const f = (4 - dist2) * 0.004
        arr[ix] += dx * f
        arr[ix + 1] += dy * f
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#b08c7d"
        transparent
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

// ---------- câmera com leve parallax ----------
function Rig({ mouse }) {
  useFrame((state) => {
    const { pos } = mouse.current
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pos.x * 0.6, 0.04)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2 + pos.y * 0.3, 0.04)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function WaterScene({ lowPower = false, paused = false }) {
  // guarda posição do mouse (-1 a 1) sem causar re-render
  const mouse = useRef({ pos: new THREE.Vector2(0, 0), energy: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -(e.clientY / window.innerHeight) * 2 + 1
      mouse.current.energy = Math.min(mouse.current.energy + 0.15, 1)
      mouse.current.pos.set(nx, ny)
    }
    // no touch, também reage ao dedo
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <Canvas
      // frameloop "never" pausa tudo quando o hero sai da tela
      frameloop={paused ? 'never' : 'always'}
      dpr={lowPower ? 1 : [1, 1.75]}
      camera={{ position: [0, 2, 7], fov: 50 }}
      gl={{ antialias: !lowPower, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#ffffff']} />
      <fog attach="fog" args={['#ffffff', 9, 20]} />
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[4, 5, 3]} intensity={1.0} color="#fff1c9" />
      <directionalLight position={[-5, 2, 2]} intensity={0.6} color="#b08c7d" />
      <Water segments={lowPower ? 60 : 140} mouse={mouse} />
      <Particles count={lowPower ? 80 : 260} mouse={mouse} />
      <Rig mouse={mouse} />
      <AdaptiveDpr pixelated />
    </Canvas>
  )
}
