import React, {useState} from 'react';
import ItemFilter from "../ItemFilter";
import {useSelector} from "react-redux";
import {makeSelectProducts} from "../../store/products/selectors";
import Card from "../Card";

const Catalog = (): JSX.Element => {
    const [brandValue, setBrandValue] = useState('all');
    // @ts-ignore
    const cards = useSelector(makeSelectProducts)
    const cardsArr = () => {
        if(brandValue === 'all'){
            return cards
        } else {
            // @ts-ignore
            return cards.filter((el) => brandValue.includes(el.brand))

        }
    }

    return (
        <div className='catalog'>
            <ItemFilter brandValue={brandValue} setBrandValue={setBrandValue}/>
            <div className='catalog-items'>
                <h1 className='catalog__title'>Catalog</h1>
                {// @ts-ignore
                    cardsArr().map((el) => (
                        <Card key={el.id} title={el.title} img={el.image} brand={el.brand} price={el.regular_price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Catalog;