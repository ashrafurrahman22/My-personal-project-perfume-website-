import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const {name, price, img, shipping} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
            <h4>{name}</h4>
            <h3>Price: ${price}</h3>
            <p>Shipping Charge: ${shipping}</p>
            <button onClick={handleAddToCart(product)} className='cartbtn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;