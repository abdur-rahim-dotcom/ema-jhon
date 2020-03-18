import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([])
    const removeProduct = (productKey) => {

        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)

        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const getData = productKeys.map(key => {
            const data = fakeData.find(pd => pd.key === key);
            data.quantity = savedCart[key]
            return data
        })
        setCart(getData)
    }, [])


    return (

        <div className="outer-container">
            <div className='top'>
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct={removeProduct}
                        cart={pd}></ReviewItem>)
                }
            </div>
            <div className='bottom'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;