import type { ReactNode } from 'react'

interface CardProps {
  image?: string
  imageAlt?: string
  children: ReactNode
  className?: string
  imageClassName?: string
}

export function Card({
  image,
  imageAlt = '',
  children,
  className = '',
  imageClassName = '',
}: CardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      {image && (
        <div className="card-image-wrap">
          <img
            src={image}
            alt={imageAlt}
            className={`card-image ${imageClassName}`.trim()}
          />
        </div>
      )}
      <div className="card-content">{children}</div>
    </article>
  )
}
