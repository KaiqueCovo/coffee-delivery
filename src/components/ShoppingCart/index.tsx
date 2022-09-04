import { ShoppingCart as ShoppingCartIcon } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { ShoppingCartContainer } from './styles';

export function ShoppingCart() {
  const theme = useTheme();

  return (
    <ShoppingCartContainer>
      <ShoppingCartIcon color={theme['yellow-dark']} weight='fill' size={22} />
    </ShoppingCartContainer>
  );
}
