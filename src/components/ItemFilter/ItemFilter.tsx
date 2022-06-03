import React from 'react';
import {useSelector} from "react-redux";
import {makeSelectBrands} from "../../store/products/selectors";
import Button from "../Button";

const ItemFilter = () => {
    // @ts-ignore
    const brandBtns = useSelector(makeSelectBrands)
    return (
        <div className='btn-panel'>
            <Button className='btn-panel__item' type='button' value={'all'}>All Brands</Button>
            {
                // @ts-ignore
                brandBtns && brandBtns.map((el) => (
                <Button key={el.id} className='btn-panel__item' type='button' value={el.code}>{el.title}</Button>
            ))}
        </div>
    );
};

export default ItemFilter;