import CoffeeDelivery from '@/assets/coffee-delivery.png';
import {
  ShoppingCart as ShoppingCartIcon,
  Timer,
  Package,
  Coffee,
} from 'phosphor-react';
import { useTheme } from 'styled-components';

import { IntroContainer, IntroContent, ItemsContainer, Title } from './styles';

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
            <li>
              <div>
                <ShoppingCartIcon color={theme.white} weight='fill' size={16} />
              </div>
              Compras Simples e segura
            </li>
            <li>
              <div>
                <Timer color={theme.white} weight='fill' size={16} />
              </div>
              Entrega rápida e rastreada
            </li>
            <li>
              <div>
                <Package color={theme.white} weight='fill' size={16} />
              </div>
              Embalagem mantém o café intacto
            </li>
            <li>
              <div>
                <Coffee color={theme.white} weight='fill' size={16} />
              </div>
              café chega fresquinho até você
            </li>
          </ItemsContainer>
        </div>
        <img src={CoffeeDelivery} />
      </IntroContent>
    </IntroContainer>
  );
}
