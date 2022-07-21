import React from 'react';
import styled from "styled-components"
import { Search,ShoppingCartOutlined} from "@mui/icons-material"
import { Badge } from '@mui/material';
const Navbar = () => {
        const Container = styled.div ` 
            height: 60px;
`
        const Wrapper = styled.div `
         padding: 10px 20px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         @media (max-width:651px){
                padding: 5px 10px;
            }

`
        const Left = styled.div `
            flex: 1;
            display: flex;
            align-items:center;
            @media (max-width:651px){
                display: none;
            }
        `
        const Language = styled.span`
            font-size: 14px;
            cursor:pointer;
        `
        const SearchContainer = styled.div`
            border: 1px solid lightgray;
            display:flex;
            align-items: center;
            margin-left: 25px;
            padding: 5px;
           
        `
        const Input = styled.input`
            border:none;
            outline: none;
        `
        const Center = styled.div `
           flex: 1;
           text-align: center;
           @media (max-width:651px){
                text-align:left;
            }
          
        `
        const Logo = styled.h1`
            font-weight: bold;
            cursor:pointer;
            @media (max-width:651px){
               font-size: 44px;
            }
        `
        
        const Right = styled.div `
           flex: 1;
           display: flex;
           align-items: center;
           justify-content: flex-end;
           @media (max-width:430px){
                justify-content: space-between;
            }
        `
        const MenuItem = styled.div`
            font-size: 14px;
            cursor: pointer;
            margin-left: 25px;
            @media (max-width:402px){
                white-space: nowrap;
            }
        `
        return(
            <Container>
                <Wrapper>
                    <Left>
                       <Language>EN</Language>
                       <SearchContainer>
                            <Input/>
                            <Search style={{color:"gray",fontSize:"16px"}} />
                       </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>
                            Shopi.
                        </Logo>
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </Right>
                </Wrapper>
            </Container>
        )
}

        export default Navbar