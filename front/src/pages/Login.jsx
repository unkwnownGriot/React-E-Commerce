import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("assets/img2.jpg")  ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: #fff;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:  10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    margin-bottom: 10px;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username'/>
                    <Input placeholder='password'/>
                    <Button>SIGN IN </Button>
                    <Link>Forgot password ?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;