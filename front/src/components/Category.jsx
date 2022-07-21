import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
   
    `

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width:500px){
        height: 59vh;
     }
`
const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1`
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width:715px){
        font-size: 20px;
    }
    @media (max-width:500px){
        font-size: 45px;
     }
`
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: #fff;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    `
const Category = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Container>
    );
};

export default Category;