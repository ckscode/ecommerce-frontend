import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ContextApi = createContext();

export const ContextProvider = ({children}) =>{
    const [data, setData] = useState();
    const [category,setCategory] = useState([]);
    const [product,setProduct] = useState();
    useEffect(() => {
      axios.post(`${process.env.REACT_APP_API_URL}/api/data`,{category:category})
        .then((response) => setData(response.data.data))
        .catch((err) => console.log(err));
    }, [category]);

    const getProduct = async(id) =>{
        try{
            setProduct([])
           await axios.get(`${process.env.REACT_APP_API_URL}/api/productdata/${id}`)
           .then((res)=>setProduct(res.data.data)).catch(err=>console.log(err))
        }catch(error){
            console.log(error)
        }
    }

    return(
        <ContextApi.Provider value={{data,setData,category,setCategory,getProduct,product,setProduct}}>
            {children}
        </ContextApi.Provider>
    )
}
