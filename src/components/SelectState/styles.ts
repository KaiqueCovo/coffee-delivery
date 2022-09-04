import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  padding: 0.5rem;

  border-radius: 6px;

  cursor: pointer;
`;
