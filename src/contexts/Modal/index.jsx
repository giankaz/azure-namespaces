import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

export function ModalProvider ({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    function openModal () {
        setIsOpen(true)
    }

    function closeModal () {
        setIsOpen(false)
        setModalData({})
    }

    return (
        <ModalContext.Provider value={{isOpen, openModal, closeModal, modalData, setModalData}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)