import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/products/actions";
import {getBrands} from "../../store/brands/actions";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "../../pages/HomePage";
import {makeSelectProducts} from "../../store/cart/selectors";
import {setProducts} from "../../store/cart/actions";


const App = () => {
    const dispatch = useDispatch()
    const product = useSelector(makeSelectProducts)
    useEffect(() => {
        dispatch(setProducts(JSON.parse(localStorage.getItem('products'))))
        dispatch(getProducts())
        dispatch(getBrands())
    }, [dispatch])
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(product))
    }, [product])
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;