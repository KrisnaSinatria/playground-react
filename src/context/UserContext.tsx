import { createContext } from "react";


const Context = createContext("");

type Props = {
    children: string
}


const Provider = ({children}: any) => {
    return(
        <Context.Provider value={'krisna'}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider};