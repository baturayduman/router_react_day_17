import React from "react";
import { useNavigate } from "react-router-dom";


function Product({ product }) {


    const { id, name, price } = product;


    const navigate = useNavigate();



    return (
        <div>

            <div>ürün detayı:</div>
            <h3> fiyatı:{price}</h3>
            <h3>isim:{name}</h3>
            <button onClick={() => navigate("/product-details/" + id)} > detayina git </button>

        </div>
    )
}


export default Product




