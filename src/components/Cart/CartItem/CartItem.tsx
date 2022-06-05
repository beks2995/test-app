import React, {useEffect, useState} from 'react';

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
    "brand": number,
    "count": number
}

interface ICartItem {
    item: IProduct,
    sortedCartItems: IProduct[],
    setSortedCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setSubtotal: React.Dispatch<React.SetStateAction<number>>
}

const CartItem = ({item, sortedCartItems, setSortedCartItems, setSubtotal}: ICartItem) => {
    const [count, setCount] = useState('')
    useEffect(() => {
        setCount(`${item.count}`)
    }, [])
    useEffect(() => {
        setSubtotal(Array.from(document.querySelectorAll('.total-price')).map(el => +el.textContent).reduce((acc, rec) => acc + rec, 0))
    }, [count, setSubtotal])
    const deleteHandler = () => {
        setSortedCartItems(sortedCartItems.filter(el => el.id !== item.id))
    }
    const plus = () => {
        setCount(`${Math.min(+count + 1, 99)}`)
        // @ts-ignore
        setSortedCartItems(sortedCartItems.map(el => el.id === item.id ? {...el, count: +count} : el))
    }
    const minus = () => {
        setCount(`${Math.max(+count - 1, 0)}`)
    }
    return (
        <div className="row">
            <div className="col-5">
                <div className='d-flex align-items-center'>
                    <img src={`https://raw.githubusercontent.com/AzureBin/react-test/master/assets${item.image}`} alt=""
                         className='cart-item__img'/>
                    <div>Brand {item.brand} / <span>{item.title}</span></div>
                </div>
            </div>
            <div
                className="col-2 text-center">{item.regular_price.currency === 'USD' ? '$' : ''}{item.regular_price.value}</div>
            <div className="col-2 text-center">
                <div className="quantity-block">
                    <button className="quantity-arrow-minus" onClick={minus}> -
                    </button>
                    <input className="quantity-num" type="number" value={count}
                           onChange={(e) => setCount(e.target.value)} min='0' max='99'/>
                    <button className="quantity-arrow-plus" onClick={plus}>+
                    </button>
                </div>
            </div>
            <div
                className="col-2 text-center">{item.regular_price.currency === 'USD' ? '$' : ''}<span className='total-price'>{(item.regular_price.value * +count).toFixed(2)}</span></div>
            <div className="col-1">
                <button className='trash' onClick={deleteHandler}>
                    <img src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png" alt="trash"
                         className='trash__img'/>
                </button>
            </div>
        </div>
    );
};

export default CartItem;