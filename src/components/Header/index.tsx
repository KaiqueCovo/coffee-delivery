import { ReactSVG } from 'react-svg';

import logo from '@/assets/logo.svg';

import { SelectState } from '../SelectState';
import { ShoppingCart } from '../ShoppingCart';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <ReactSVG src={logo} />
      <div>
        <SelectState />
        <ShoppingCart />
      </div>
    </HeaderContainer>
  );
}
