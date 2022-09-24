import { priceFormatter } from '@/utils';

import { NumberInput } from '../Inputs';
import { ShoppingCart } from '../ShoppingCart';
import {
  CoffeeCardContainer,
  CoffeeInfo,
  CoffeeTags,
  CoffeeBuy,
} from './styles';

interface CoffeeCardProps {
  name: string;
  description: string;
  src: string;
  tags: string[];
}

export function CoffeeCard({ name, description, src, tags }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={src} alt='Imagem do café' />

      <CoffeeTags>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </CoffeeTags>

      <CoffeeInfo>
        <span>{name}</span>
        <small>{description}</small>
      </CoffeeInfo>

      <CoffeeBuy>
        <span>{priceFormatter.format(9.9)}</span>
        <div>
          <NumberInput />
          <ShoppingCart color={'purple-dark'} />
        </div>
      </CoffeeBuy>
    </CoffeeCardContainer>
  );
}
