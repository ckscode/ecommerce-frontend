import React from "react"
import Products from "./Pages/Products/Products"
import { ContextProvider } from "./Api/DataApi"



function App() {
  

  return (
    <>
    <ContextProvider>
     <Products/>
     </ContextProvider>
    </>
  )
}

export default App
