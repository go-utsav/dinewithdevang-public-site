import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  children: ReactNode
  asChild?: boolean
  href?: string
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  asChild,
  href,
  ...props
}: ButtonProps) {
  const baseClass = 'btn'
  const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary'
  const classes = `${baseClass} ${variantClass} ${className}`.trim()

  if (asChild && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
