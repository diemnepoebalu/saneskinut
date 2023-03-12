import React from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

export const Header = () => {
    return (
        <header className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.content} content`}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link to='/'>
                            <i className="fa-solid fa-wind"></i>
                            SK8SHOES
                        </Link>
                    </div>
                    <SearchBox />
                </div>
                <div className={styles.actions}>
                    <div className={styles.cart}>
                        <Link to='/card'>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                    <div className={styles.login}>
                        <Link to={'/'}>
                            <i className="fa-solid fa-door-open"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

