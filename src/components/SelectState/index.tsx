import { MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { SelectContainer } from './styles';

export function SelectState() {
  const theme = useTheme();

  return (
    <SelectContainer>
      <MapPin color={theme['purple']} weight='fill' size={22} />
      Porto Alegre, RS
    </SelectContainer>
  );
}
