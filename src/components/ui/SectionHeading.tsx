import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({
  children,
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  return <Tag className={`section-heading ${className}`.trim()}>{children}</Tag>
}
