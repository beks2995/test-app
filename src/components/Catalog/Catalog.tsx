import React from 'react';
import ItemFilter from "../ItemFilter";
import {useSelector} from "react-redux";
import {makeSelectProducts} from "../../store/products/selectors";
import Card from "../Card";

const Catalog = () => {
    // @ts-ignore
    const cards = useSelector(makeSelectProducts)
    return (
        <div className='catalog'>
            <ItemFilter/>
            <div className='catalog-items'>
                <h1 className='catalog__title'>Catalog</h1>
                {// @ts-ignore
                    cards.map((el) => (
                        <Card key={el.id} title={el.title} img={el.image} brand={el.brand} price={el.regular_price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Catalog;