import { Header } from '@/components';

import { Intro } from './components/Intro';
import { ListCoffe } from './components/ListCoffe';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
      <ListCoffe />
    </HomeContainer>
  );
}
