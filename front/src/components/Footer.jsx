import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    @media (max-width:732px){
        flex-direction: column;
     }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media (max-width:732px){
        padding: 10px;
     }
`
const Logo = styled.h1`
    @media (max-width:732px){
        text-align: center;
        font-size: 55px;
     }
`
const Desc = styled.p`
   margin: 20px 0px;
   @media (max-width:732px){
        font-size: 20px;
        text-align: center;
     }
`
const SocialContainer = styled.div`
    display: flex;
    @media (max-width:732px){
        align-items: center;
        justify-content: center;
     }
   
`
const SocialIcon = styled.div`
    display: flex;
    width: 40px;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.bg};
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    @media (max-width:819px){
       flex: 2;
     }
`
const Title = styled.h2`
    margin-bottom: 30px;
    @media (max-width:732px){
        text-align: center;
        font-size: 25px;
     }
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
    @media (max-width:732px){
        font-size: 17px;
     }
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    @media (max-width:732px){
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     }
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    @media (max-width:732px){
       font-size: 20px;
     }
`

const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shopi.</Logo>
                <Desc>There are many of varations of passage of articles availablem but
                    the majority of them have suffered alteration in some form, by injected
                    so;e productsm or randomised anothers words witch will bw sustainablean will
                    look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg={"3B5999"}>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg={"E4405F"}>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg={"55ACEE"}>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg={"E60023"}>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms&conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 345 Pixie bay , South Winchester 1492
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 342 5643
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{ marginRight: "10px" }} /> Contact@shopi.com
                </ContactItem>
                <Payment src='assets/payment.png' />
            </Right>
        </Container>
    );
};

export default Footer;