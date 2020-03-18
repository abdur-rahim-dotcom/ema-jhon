import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
    const singleItemPrice = cart.reduce((accumulator, product) => accumulator + product.price, 0)
    const itemPrice = singleItemPrice * cart.quantity
    debugger
    let shipping = 0;
    if (itemPrice > 200) {
        shipping = 3.99
    } else if (itemPrice > 100) {
        shipping = 7.99
    } else if (itemPrice > 50) {
        shipping = 12.99
    } else if (itemPrice > 0 && itemPrice < 50) {
        shipping = 14.99
    } else {
        shipping = 0
    }
    const costWithShipping = itemPrice + shipping
    const taxAndVat = costWithShipping / 100 * 4
    const totalPrice = costWithShipping + taxAndVat
    return (
        <div className="cart-area">
            <h1>Order Summury</h1>
            <h3>Items Ordered: {cart.length}</h3>
            <h4>Items Price: {itemPrice} </h4>
            <h4>Shipping Cost: {shipping}</h4>
            <h4>Cost With Shipping: {costWithShipping.toFixed(2)}</h4>
            <h4>Tax And Vat: {taxAndVat.toFixed(2)}</h4>
            <h4>Total Price: {totalPrice.toFixed(2)}</h4>
            <Link to='/review'><button className='btn'>Review Order</button></Link>
        </div>
    );
};

export default Cart;