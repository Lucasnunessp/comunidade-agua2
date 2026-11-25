import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function Button({ asChild = false, className, ...props }: ComponentProps<'button'> & { asChild?: boolean }) {
  const Component = asChild ? Slot : 'button';
  return <Component className={cn('inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-barro-500 px-5 py-3 text-base font-semibold text-tinta transition-colors hover:bg-barro-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tinta motion-reduce:transition-none', className)} {...props} />;
}