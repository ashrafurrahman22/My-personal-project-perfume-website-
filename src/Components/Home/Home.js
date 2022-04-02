import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    return (
        <div className='home-container'>
            <div>
                <h2 className='title'>Products List</h2>
           <div className="products-container">
           {
                products.map( product => <Product
                    product = {product}
                    key={product.id}></Product> )
            }
           </div>
            </div>
            <div className="cart-container">
                <h3>Cart</h3>
            </div>
        </div>
    );
};

export default Home;