import React from 'react';
import styled from "styled-components"
import { ProductPopular } from '../data';
import Product from './Product';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width:1021px){
        padding: 15px;
     }
    @media (max-width:1021px){
        padding: 10px;
     }
`
const Products = () => {
    return (
        <Container>
            {
                ProductPopular.map(prod=>(
                    <Product prod={prod} key={prod.id} />
                ))
            }
        </Container>
    );
};

export default Products;