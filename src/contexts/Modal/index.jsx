import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

export function ModalProvider ({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    return (
        <ModalContext.Provider value={{isOpen, setIsOpen, modalData, setModalData}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)