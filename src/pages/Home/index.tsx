import { Header } from '@/components';

import { Intro } from './components/Intro';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
    </HomeContainer>
  );
}
