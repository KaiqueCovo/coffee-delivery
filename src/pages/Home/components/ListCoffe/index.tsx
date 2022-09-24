import { CoffeeCard } from '@/components';

import coffeeImg from '../../../../assets/coffee.png';
import { ListCoffeeContainer } from './styles';

export function ListCoffe() {
  return (
    <ListCoffeeContainer>
      <h3>Nossos Cafés</h3>

      <ul>
        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />
        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />
        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />
        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />
        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />
        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />

        <CoffeeCard
          src={coffeeImg}
          name='Expresso tradicional'
          description='O melhor café do mundo'
          labels={['TRADICIONAL', 'QUENTE']}
        />
      </ul>
    </ListCoffeeContainer>
  );
}
