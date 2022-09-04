import styled from 'styled-components';

export const IntroContainer = styled.section`
  width: 100vw;
  background-image: url('./background.svg');
  background-repeat: no-repeat;
  background-size: cover;

  padding: 5.875rem 0 6.75rem 0;
`;

export const IntroContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.5rem;
  margin: 0 auto;
`;

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    color: ${(props) => props.theme.base.title};

    line-height: 130%;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base.subtitle};
  }
`;

export const ItemsContainer = styled.ul`
  display: grid;
  gap: 1.25rem 2.5rem;
  grid-template-columns: auto auto;
  list-style: none;

  margin-top: 4.125rem;

  li {
    display: flex;
    align-items: center;
  }

  div {
    width: 2rem;
    height: 2rem;
    padding: 8px;
    border-radius: 100%;

    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
