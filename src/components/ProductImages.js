import React from 'react';
import styled from 'styled-components';

const ProductImages = ({ image }) => {
  if (!image) {
    return <Wrapper>No Image Available</Wrapper>;
  }

  return (
    <Wrapper>
      <img src={image} alt='product' className='main' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .main {
    max-width: 500px;
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .main {
      max-width: 90%;
      height: auto;
    }
  }
`;

export default ProductImages;
