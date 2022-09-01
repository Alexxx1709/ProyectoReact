import React from "react";
import ItemCount from "./ItemCount";




const Item = ({product}) => {
    return(
        <div className="cards" style={{marginTop: "60px"}}>
            <h1>{product.nombre}</h1>
            <h4>Precio {product.precio}</h4>
            <p>Descripcion {product.detalle}</p>
            <img src={product.img} alt="imagen " className="img-fluid" width="50%" />
            <ItemCount/>
        </div>
    )
}

export default Item;