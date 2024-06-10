import React, { createContext, useState } from "react";
export const ProductContext = createContext();

function Context(props) {
    const [products, setProducts] = useState(null); 

    return (
        <ProductContext.Provider value={[products , setProducts]}> 
            {props.children}
        </ProductContext.Provider>
    );
}

export default Context;
