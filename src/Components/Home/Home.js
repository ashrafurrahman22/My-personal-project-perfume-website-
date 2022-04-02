import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    

    const handleAddToCart = (product) => {
        console.log(product)
        const added = [...cart + product]
        setCart(added);
    }

    return (
        <div className='home-container'>
            <div>
                <h2 className='title'>Products List</h2>
           <div className="products-container">
           {
                products.map( product => <Product
                    product = {product}
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    ></Product> )
            }
           </div>
            </div>
            <div className="cart-container">
                <h3>Cart</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Home;