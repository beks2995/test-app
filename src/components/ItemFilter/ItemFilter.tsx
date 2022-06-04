import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {makeSelectBrands} from "../../store/brands/selectors";
import Button from "../Button";

interface IItemFilter{
    brandValue: string,
    setBrandValue: React.Dispatch<React.SetStateAction<string>>
}
const ItemFilter = ({brandValue, setBrandValue}: IItemFilter) => {
    const setBrandHandler = (e: React.FormEvent<HTMLButtonElement>): void => {
        setBrandValue((e.target as HTMLButtonElement).value)
    }
    useEffect(() => {
        const setActiveBrand = () => {
            const brandBtnsArr = document.querySelectorAll('.btn-panel__item')
            brandBtnsArr.forEach(el => (el as HTMLButtonElement).value === brandValue ? el.classList.add('btn-panel__item_active') : el.classList.remove('btn-panel__item_active'))
        }
        setActiveBrand()
    }, [brandValue])
    // @ts-ignore
    const brandBtns = useSelector(makeSelectBrands)
    return (
        <div className='btn-panel'>
            <Button className='btn-panel__item' type='button' value={'all'} onClick={setBrandHandler}>All Brands</Button>
            {
                // @ts-ignore
                brandBtns && brandBtns.map((el) => (
                <Button key={el.id} className='btn-panel__item' type='button' value={el.code} onClick={setBrandHandler}>{el.title}</Button>
            ))}
        </div>
    );
};

export default ItemFilter;