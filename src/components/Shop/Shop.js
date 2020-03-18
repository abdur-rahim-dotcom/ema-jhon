import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import Product from './../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const [product, setProduct] = useState(fakeData)
    const [cart, setCart] = useState([])
    const productAdd = (prod) => {
        const newCart = [...cart, prod];
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === prod.key)
        const productCount = sameProduct.length
        addToDatabaseCart(prod.key, productCount)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {product.map(pd => <Product
                    showButton={true}
                    key={pd.key}
                    productAdd={productAdd}
                    product={pd}></Product>)}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}

                ></Cart>

            </div>
        </div>
    );
};

export default Shop;