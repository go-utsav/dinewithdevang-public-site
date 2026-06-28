import { useOutletContext } from 'react-router-dom'
import type { MenuPdfContext } from '../types'

export function useMenuPdf(): MenuPdfContext {
  return useOutletContext<MenuPdfContext>()
}
