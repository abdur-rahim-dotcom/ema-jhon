import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { name, img, price, seller, stock, key } = props.product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div>
                <Link to={'/product/' + key}> <h4>{name}</h4></Link>
                <p><small>By: {seller}</small></p>
                <h2>$ {price}</h2>
                <p>Only {stock} left in stock - order soon</p>
                <br />
                {
                    props.showButton && <button

                        onClick={() => props.productAdd(props.product)}
                        className='btn'><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;