import React from 'react';
import styled from 'styled-components';
import { CategoryItems } from '../data';
import Category from './Category';


const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        @media (max-width:665px){
            padding: 10px;
        }
        @media (max-width:500px){
           flex-direction: column;
        }
        `
const Categories = () => {
    return (
        <Container>
          {
              CategoryItems.map(item=>(
                  <Category item={item} key={item.id}/>
              ))
          }
        </Container>
    );
};

export default Categories;