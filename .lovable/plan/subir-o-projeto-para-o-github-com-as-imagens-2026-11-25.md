# Subir o projeto para o GitHub com as imagens

## Por que as imagens não foram junto
As imagens do site (logo, letras do nome, logotipos dos coletivos e fotos de Projetos) ficam guardadas na hospedagem do Lovable. No código fica só um "atalho" para cada uma, por isso ao baixar ou subir o projeto as imagens não aparecem.

## O que eu faço
1. Baixar as 12 imagens que o site usa e colocá-las dentro do projeto, numa pasta `imagens/` (logo, letras, 4 coletivos, 3 fotos de Projetos e favicon).
2. Fazer o site carregar as imagens dessa pasta, para que o projeto fique completo e funcione em qualquer lugar, inclusive fora do Lovable.
3. Conferir que todas as páginas continuam mostrando as imagens iguais a hoje.

## O que você faz (eu não consigo criar o repositório pelo chat)
1. Em Configurações do projeto → Git, clique em Conectar e entre com sua conta GitHub.
2. Quando pedir o nome do repositório, escreva `comunidade-agua2`.
3. O Lovable cria o repositório (privado) e envia todo o projeto, já com as imagens. Cada mudança futura também vai automaticamente.

## Detalhes técnicos
- Baixar cada `url` dos `src/assets/*.asset.json` para `src/assets/*.png|jpg` e trocar os imports para imports de arquivo do Vite; remover os ponteiros `.asset.json` (sem apagar os arquivos da CDN).
- Atualizar a regra do AGENTS.md sobre ponteiros de imagem para dizer que as imagens ficam no repositório, para o repositório ser autossuficiente.
