import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, title: name, price, description } = product;
        return (
          <article key={id}>
            <div className='img-container'>
              <img src={image} alt={name} />
            </div>
            <div className='details'>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn details-btn'>
                View Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--clr-white);
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }

  .img-container {
    width: 100%;
    max-width: 300px;
    height: 200px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--clr-grey-9);
    border-radius: var(--radius);
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: transparent;
    display: block;
  }

  .details {
    max-width: 600px;
  }

  h4 {
    margin-bottom: 0.5rem;
    color: var(--clr-grey-1);
  }

  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  p {
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--clr-grey-3);
  }

  .details-btn {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    border-radius: var(--radius);
    text-transform: capitalize;
    transition: var(--transition);
  }

  .details-btn:hover {
    background: var(--clr-primary-7);
  }

  @media (min-width: 992px) {
    article {
      flex-direction: row;
      align-items: center;
    }
    .img-container {
      width: 200px;
      height: 150px;
    }
  }
`;

export default ListView;
