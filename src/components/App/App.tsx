import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getBrands, getProducts} from "../../store/products/actions";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "../../pages/HomePage";


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getBrands())
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;