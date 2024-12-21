import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';

export default function ProductDetails() {



    const { id } = useParams();



    return (
        <div>
            <h1>ÜRÜN DETAYLARI </h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product product={product} />
                    }
                })
            }
        </div>
    )


}




