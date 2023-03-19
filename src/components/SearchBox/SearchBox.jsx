import React, {useContext, useState} from 'react';
import styles from './SearchBox.module.scss';
import {ProductContext} from "../../provider/context/ProductContext";
import initStore from '../../store/products.json'

const SearchBox = () => {
    const [value, setValue] = useState('')
    const [products, setProducts] = useContext(ProductContext)

    const filterProducts = (string) => {

        if (!string) {
            return JSON.parse(JSON.stringify(initStore))
        }
        return initStore.filter((item) => item.title.toLowerCase().includes(string.toLowerCase()))
    }

    const inputHandler = (e) => {
        setValue(e.target.value)
        const items = filterProducts(e.target.value)
        setProducts(items)
    }

    return (
        <div className={styles.searchBox}>
            <input
                className={styles.searchTxt}
                onChange={inputHandler}
                value={value}
                type="text"
                name=""
                placeholder="Type to search"
            />
            <a className={styles.searchBtn}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    );
};

export default SearchBox;
