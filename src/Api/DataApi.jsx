import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ContextApi = createContext();

export const ContextProvider = ({children}) =>{
    const [data, setData] = useState();
    const [category,setCategory] = useState([]);
    useEffect(() => {
      axios.post("http://localhost:4000/api/data",{category:category})
        .then((response) => setData(response.data.data))
        .catch((err) => console.log(err));
    }, [category]);

    return(
        <ContextApi.Provider value={{data,setData,category,setCategory}}>
            {children}
        </ContextApi.Provider>
    )
}
