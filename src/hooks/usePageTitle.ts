import { useEffect } from 'react'

const DEFAULT_TITLE = 'Dine With Devang | Luxury Private Chef London'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])
}
