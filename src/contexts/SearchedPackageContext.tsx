import React, {createContext, FC, useState} from "react";

export const SearchedPackageContext = createContext<any>("");

const SearchedPackageProvider:FC = ({children}) => {

    const [npmName, setNpmName] = useState('')

    const handleSearch = (packageName:string):void => {
        setNpmName(packageName)
    }

    return(
        <SearchedPackageContext.Provider value = {{handleSearch, npmName}}>
            {children}
        </SearchedPackageContext.Provider>
    )
}

export default SearchedPackageProvider;