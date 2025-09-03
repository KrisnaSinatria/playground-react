import { createContext, useState, useEffect } from "react";


const Context = createContext([]);

const Provider = ({ children }: any) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            
            const result = await response.json();
            setData(result.categories);
        };
        fetchData();
    }, []);

    console.log(data);
    

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider };