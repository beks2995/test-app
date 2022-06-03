import React from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import Catalog from "../../components/Catalog";

const HomePage = () => {
    return (
        <>
            <Container>
                <Header/>
                <Catalog/>
            </Container>
        </>
    );
};

export default HomePage;