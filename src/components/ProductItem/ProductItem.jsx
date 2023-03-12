import React from 'react';
import ProductButton from "./ui/ProductButton";

const ProductItem = ({price,title,genderType,category,image,id}) => {

    return (
        <div>
            <div className="products__item">
                <img className="products-img" width={250} height={250} src={image} alt="img" />
                <div className="box">
                    <div className="price">{price}$</div>
                    <ProductButton id={id}/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;