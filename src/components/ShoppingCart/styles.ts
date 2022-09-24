import styled from 'styled-components';

interface ShoppingCartContainerProps {
  variant: 'yellow-light' | 'purple-dark';
}

export const ShoppingCartContainer = styled.button<ShoppingCartContainerProps>`
  display: flex;

  background-color: ${(props) => props.theme[props.variant]};

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;
`;
