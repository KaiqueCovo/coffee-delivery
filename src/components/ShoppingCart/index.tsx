import { ShoppingCart as ShoppingCartIcon } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { ShoppingCartContainer } from './styles';

interface ShoppingCartProps {
  color?: 'yellow-light' | 'purple-dark';
}

export function ShoppingCart({ color = 'yellow-light' }: ShoppingCartProps) {
  const theme = useTheme();

  const iconColor = color === 'yellow-light' ? 'yellow-dark' : 'white';

  return (
    <ShoppingCartContainer variant={color}>
      <ShoppingCartIcon color={theme[iconColor]} weight='fill' size={22} />
    </ShoppingCartContainer>
  );
}
