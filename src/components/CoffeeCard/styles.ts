import styled from 'styled-components';

export const CoffeeCardContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 16rem;
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    position: relative;
    top: -1.25rem;

    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  margin-top: 1rem;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  small {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const CoffeeBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 1.438rem;

  margin-top: 1rem;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: capitalize;

    &::before {
      content: 'R$ ';
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;
