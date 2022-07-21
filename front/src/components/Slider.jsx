import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import styled from "styled-components"
import {SliderItems} from "../data"
const Container = styled.div`
        height: 100vh;
        width: 100%;
        display: flex;
        position: relative;
        overflow: hidden;
        @media (max-width:520px){
            display:none;
        }
    `

    const Arrow = styled.div`
        width: 50px;
        height: 50px;
        background-color: #f3ecec;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left:${props=>props.direction === "left" && "10px" };
        right:${props=>props.direction === "right" && "10px" };
        margin: auto;
        cursor: pointer;
        opacity: 0.5;
        z-index: 4;
    `

    const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transform: translateX(${props=>props.index * -100}vw );
        transition: all 1.4s ease;
    `
    const Slide = styled.div`
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #${props=>props.bg};
    `
    const ImageContainer = styled.div`
        flex: 1;
        height: 100%;
        display: flex;
       justify-content: center;
       align-items: center;
    `
     const Image = styled.img`
     height: 90%;
     position: absolute;
 `
    const InfoContainer = styled.div`
        flex: 1.5;
        padding:50px;
        position: relative;
        @media (max-width:727px){
            padding: 45px;
        }
        @media (max-width:652px){
            padding: 35px;
        }

    `
    const Title = styled.h1`
        font-size: 50px;
        @media (max-width:727px){
            font-size: 45px;
        }
        @media (max-width:652px){
            font-size: 35px;
        }
    `
    const Desc = styled.p`
        margin: 50px 0px ;
        font-size: 20px;
        font-weight: 500;
       letter-spacing: 4px;
       @media (max-width:652px){
        margin: 35px 0px;
        font-size: 17px;
    }
    
        
    `
    const Button = styled.button`
        padding: 10px;
        font-size: 16px;
        border: 1px solid;
        cursor: pointer;
        background-color: transparent;
    `

   

const Slider = () => {
const [slideIndex,setSlideIndex] = useState(0)
const handleClick = (direction)=>{
    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
}

    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")} >
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper index = {slideIndex} >
                {
                    SliderItems.map(item=>{
                     return  ( 
                     <Slide bg={item.bg} key={item.id}>
                            <ImageContainer>
                                <Image src={item.img}/>
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                     </Slide>)
                    })
                }
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;