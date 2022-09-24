import { useState } from 'react';

import { Minus, Plus } from 'phosphor-react';

import { NumberInputContainer } from './styles';

export function NumberInput() {
  const [value, setValue] = useState(1);

  function handleMinus() {
    setValue((state) => state - 1);
  }

  function handlePlus() {
    setValue((state) => state + 1);
  }

  return (
    <NumberInputContainer>
      <button disabled={value === 1} onClick={handleMinus}>
        <Minus size={14} weight='bold' />
      </button>

      <input disabled type='number' value={value} />

      <button disabled={value === 99} onClick={handlePlus}>
        <Plus size={14} weight='bold' />
      </button>
    </NumberInputContainer>
  );
}
