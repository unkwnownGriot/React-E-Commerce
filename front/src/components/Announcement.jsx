import React from 'react';
import styled from "styled-components"
const Announcement = () => {
    const Container = styled.div`
        height: 30px;
        background-color: teal;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 400;
    `
    return (
        <Container>
            Super Deal ! Free Shipping on orders over $50
        </Container>
    );
};

export default Announcement;