import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    const {name, price, img, shipping} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;