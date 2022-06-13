import { createContext, useContext, useState } from "react"

export const FilterContext = createContext()

export function FilterProvider ({children}) {
    const [searchValue, setSearchValue] = useState('')

    return (
        <FilterContext.Provider value={{searchValue, setSearchValue}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)