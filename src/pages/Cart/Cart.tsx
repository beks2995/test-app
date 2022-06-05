import React from 'react';
import Header from "../../components/Header";
import {Container} from "react-bootstrap";
import CartTable from "../../components/Cart/CartTable";
import {useSelector} from "react-redux";
import {makeSelectProducts} from "../../store/cart/selectors";
import EmptyCart from "../../components/Cart/EmptyCart";

const Cart = () => {
    const cartProducts = useSelector(makeSelectProducts)
    return (
        <>
            <Container>
                <Header cart/>
                {cartProducts.length === 0 ? <EmptyCart/> : (
                    <>
                        <h2>Shopping Cart</h2>
                        <CartTable/>
                    </>
                )}
            </Container>
        </>
    );
};

export default Cart;