import React from 'react';

const ReviewItem = (props) => {
    const { seller, quantity, price, name, img, key } = props.cart
    return (

        <div className='inside-container'>
            <div className='left-side'>
                <img src={img} alt="" />
            </div>
            <div className='half'>
                <h3>{name}</h3>
                <p><small>$ {price}</small></p>
                <p><small>By: {seller}</small></p>
                <p>Quantity: {quantity}</p>
                <button
                    onClick={() => props.removeProduct(key)}
                    className='btn'>Remove From Cart</button>
            </div>
        </div>

    );
};

export default ReviewItem;