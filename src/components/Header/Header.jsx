import React from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

export const Header = () => {
    return (
        <header className="wrapper">
            <div className={`${styles.shapka} container`}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <i className="fa-solid fa-wind"></i>
                        SK8SHOES
                    </Link>
                </div>
                <SearchBox />
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
        </header>
    );
};

