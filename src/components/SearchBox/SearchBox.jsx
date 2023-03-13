import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
    return (
        <div className={styles.searchBox}>
            <input className={styles.searchTxt} type="text" name="" placeholder="Type to search"/>
            <a className={styles.searchBtn} href="google.com">
                <i className="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    );
};

export default SearchBox;
