import CoffeeDelivery from '@/assets/coffee-delivery.png';
import {
  ShoppingCart as ShoppingCartIcon,
  Timer,
  Package,
  Coffee,
} from 'phosphor-react';
import { useTheme } from 'styled-components';

import {
  IntroContainer,
  IntroContent,
  Item,
  ItemsContainer,
  Title,
} from './styles';

export function Intro() {
  const theme = useTheme();

  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <Title>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </span>
          </Title>
          <ItemsContainer>
            <Item variant='yellow-dark'>
              <div>
                <ShoppingCartIcon color={theme.white} weight='fill' size={16} />
              </div>
              Compras simples e segura
            </Item>
            <Item variant='base-text'>
              <div>
                <Timer color={theme.white} weight='fill' size={16} />
              </div>
              Entrega rápida e rastreada
            </Item>
            <Item variant='yellow'>
              <div>
                <Package color={theme.white} weight='fill' size={16} />
              </div>
              Embalagem mantém o café intacto
            </Item>
            <Item variant='purple'>
              <div>
                <Coffee color={theme.white} weight='fill' size={16} />
              </div>
              Café chega fresquinho até você
            </Item>
          </ItemsContainer>
        </div>
        <img src={CoffeeDelivery} />
      </IntroContent>
    </IntroContainer>
  );
}
