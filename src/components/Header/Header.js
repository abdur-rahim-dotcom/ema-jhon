import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png'


function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    )
}
export default Header;