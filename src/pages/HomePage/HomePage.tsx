import React from 'react';
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";
import {Container} from "react-bootstrap";

const HomePage = () => {
    return (
        <>
            <Container>
                <Header linkToCart/>
                <Catalog/>
            </Container>
        </>
    );
};

export default HomePage;