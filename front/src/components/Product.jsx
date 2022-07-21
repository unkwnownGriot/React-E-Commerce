import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components"



const InfoContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: hsla(28, 10%, 53%,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 200px ;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:hsl(186, 34%, 60%);
    position: relative;
    @media (max-width:587px){
        margin: 3px;
     }

    &:hover ${InfoContainer} {
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    background-color:#fff;
    margin-left:10px;
    transition:  all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Product = ({prod}) => {
    return (
        <Container>
            <Circle/>
            <Image src={prod.img}/>
            <InfoContainer>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                   <FavoriteBorderOutlined/>
                </Icon>
            </InfoContainer>
        </Container>
    );
};

export default Product;