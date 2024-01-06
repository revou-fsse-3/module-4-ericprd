import { PropsWithChildren } from "react"

export type ModalProps = {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  title?: string
  description?: string
} & PropsWithChildren
