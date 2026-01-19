'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'outline' | 'default';
  className?: string;
  children: ReactNode;
}

export function Badge({ variant = 'default', className = '', children }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  const variantClasses =
    variant === 'outline'
      ? 'border border-gray-300 bg-transparent'
      : 'bg-gray-900 text-white';

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>{children}</span>
  );
}

