import React from 'react'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="shapka">
            <div className="logo">
                <Link to='/'>
                <i className="fa-solid fa-wind"></i>
                SK8SHOES
                </Link>
            </div>
            <div className="search-box">
                <input className="search-txt" type="text" name="" placeholder="Type to search"/>
                <a className="search-btn" href="google.com">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
            <div className="textvshapke">
                <div className="text2 korzinka">
                    <Link to='/card'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                </div>
                <div className="text1">
                    <i className="fa-solid fa-door-open"></i>
                </div>
            </div>
        </div>
    );
};

