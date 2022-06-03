import React from 'react';

interface IPrice {
    "currency": string,
    "value": number
}
interface ICard {
    title: string,
    img: string,
    brand: number,
    price:IPrice
}

const Card = ({title, img, brand, price}: ICard) => {
    return (
        <div className='card'>
            <img src={`https://raw.githubusercontent.com/AzureBin/react-test/master/assets${img}`} alt="" className='card__img'/>
            <h2 className='card__title'>{title}</h2>
            <p className='card__brand'>Brand {brand}</p>
            <p className='card__price'>{price.currency === 'USD' ? '$' : ''} {price.value}</p>
        </div>
    );
};

export default Card;