interface PlayIconProps {
  className?: string
}

export function PlayIcon({ className = '' }: PlayIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
