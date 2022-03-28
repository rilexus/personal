import { createContext, useContext } from "react"

export interface Elem {
  name: string
  open: boolean
}
interface DropdownListContextI {
  toggle: (elemName: string) => void
  register: (elem: Elem) => void
  elements: { [name: string]: boolean }
}

const DropdownListContext = createContext<DropdownListContextI>({
  toggle: (elemName: string) => {}, // noop
  register: (elem: Elem) => {}, // noop
  elements: {},
})
export const DropdownListContextProvider = DropdownListContext.Provider
const DropdownListContextConsumer = DropdownListContext.Consumer

export const useDropdownListContext = () => {
  return useContext(DropdownListContext)
}
