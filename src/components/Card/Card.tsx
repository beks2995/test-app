import React from 'react';
import {setCartProduct} from "../../store/cart/actions";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectProducts} from "../../store/cart/selectors";

export interface IRegularPrice {
    "currency": string,
    "value": number
}

export interface IProduct {
    "type": string,
    "id": number,
    "sku": string,
    "title": string,
    "regular_price": IRegularPrice,
    "image": string,
    "brand": number
}

interface IPrice {
    "currency": string,
    "value": number
}

interface ICard {
    title: string,
    img: string,
    brand: number,
    price: IPrice,
    item: IProduct
}

const Card = ({title, img, brand, price, item}: ICard) => {
    const dispatch = useDispatch()
    const product = useSelector(makeSelectProducts)
    return (
        <div className='card'>
            <img src={`https://raw.githubusercontent.com/AzureBin/react-test/master/assets${img}`} alt=""
                 className='card__img'/>
            <h2 className='card__title'>{title}</h2>
            <p className='card__brand'>Brand {brand}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='card__price'>{price.currency === 'USD' ? '$' : ''} {price.value}</div>
                <button type='button' onClick={() => dispatch(setCartProduct([...product, item].sort((a, b) => a.id - b.id)))}>Add to cart</button>
            </div>
        </div>
    );
};

export default Card;