import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => {

  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          console.log(product);
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    background: transparent;   /* corrected typo */
    border-radius: var(--radius);
    display: block;
    margin: 0 auto;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
