import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {makeSelectProducts} from "../../../store/cart/selectors";
import CartItem from "../CartItem";

const CartTable = () => {
    const [sortedCartItems, setSortedCartItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const cartItems = useSelector(makeSelectProducts)
    useEffect(() => {
        const itemIdObj: Record<string, number> = {}
        for(let i = 0; i < cartItems.length; i++){
            if(itemIdObj[cartItems[i].id] === undefined){
                itemIdObj[`${cartItems[i].id}`] = 1
            } else {
                itemIdObj[`${cartItems[i].id}`] += 1
            }
        }
        const keyIdValueArr = Object.values(itemIdObj)
        // @ts-ignore
        const arrayUniqueByKey = [...new Map(cartItems.map(item =>
            [item['id'], item])).values()].map((el, idx) => {return {...el, count: keyIdValueArr[idx]}})
        setSortedCartItems(arrayUniqueByKey)
    }, [cartItems])
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(sortedCartItems))
    }, [sortedCartItems])

    return (
        <div>
            <div className="row">
                <div className="col-5"><h4 className='text-center'>Item</h4></div>
                <div className="col-2"><h4 className='text-center'>Price</h4></div>
                <div className="col-2"><h4 className='text-center'>Qty</h4></div>
                <div className="col-2"><h4 className='text-center'>Total</h4></div>
                <div className="col-1"></div>
            </div>
            {
                sortedCartItems.map((el, idx) => (
                   <CartItem item={el} key={idx} sortedCartItems={sortedCartItems} setSortedCartItems={setSortedCartItems} setSubtotal={setSubtotal}/>
                ))
            }
            <div className="d-flex justify-content-end mt-2 pe-5">
                <h5>
                    Subtotal: $ {subtotal.toFixed(2)}
                </h5>

            </div>
        </div>
    );
};

export default CartTable;