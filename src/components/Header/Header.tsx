import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <Link to="/" className="header__logo">
                <img src="https://raw.githubusercontent.com/AzureBin/react-test/master/assets/images/logo.png" alt="logo"/>
            </Link>
            <Link to="/cart" className='header__cart'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcyZukD22x2TLsDxYz6Z-KKF_C1Wb2heiO_nj9WaSP_Fu0vnS2K9S6fQy2yNJ27uP3v8&usqp=CAU" className='header__cart-img' alt=""/>
                <span className='header__cart-counter'>0</span>
            </Link>
        </header>
    );
};

export default Header;