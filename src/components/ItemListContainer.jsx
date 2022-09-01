import React , {useEffect, useState} from "react";
import { customFetch } from "./customFetch";
import ItemList from "./ItemList";
import productos from "./productos";


const ItemListContainer = (props) => {

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        customFetch(productos)
        .then(data => setListProducts(data))
    }, []);

    return(
        <>
            <h1 className="text-success text-center" >{props.saludo}</h1>  
            <ItemList listProducts = {listProducts}/>       
        </>
    );
};


export default ItemListContainer;
