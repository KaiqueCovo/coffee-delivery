import styled from 'styled-components';

export const ShoppingCartContainer = styled.button`
  display: flex;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;
`;
