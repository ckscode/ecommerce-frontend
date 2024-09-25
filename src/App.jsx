import React from "react";
import Products from "./Pages/Products/Products";
import { ContextProvider } from "./Api/DataApi";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <ContextProvider>
        <Layout>
          <Products />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default App;
