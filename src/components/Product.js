import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, title, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={title} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{title}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  overflow: hidden;
  text-align: center;
  padding: 1rem;

  .container {
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: var(--radius);
    transition: transform 0.3s ease;
  }

  .container:hover img {
    transform: scale(1.05);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 0.75rem;
    h5 {
      font-weight: 500;
      margin: 0.25rem 0;
      font-size: 1rem;
      color: var(--clr-grey-1);
    }
    p {
      margin: 0;
      color: var(--clr-primary-5);
      font-weight: bold;
      font-size: 0.95rem;
    }
  }
`;

export default Product;
