import styled from 'styled-components';

export const NumberInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.theme['base-button']};

  width: 4.5rem;
  height: 2.375rem;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  input {
    width: 100%;

    border: none;
    text-align: center;

    color: ${(props) => props.theme['base-title']};
    background-color: ${(props) => props.theme['base-button']};
    -moz-appearance: textfield;

    &:focus {
      border: none;
      outline: 0;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    display: flex;
    align-items: center;

    border: none;
    background: none;
    user-select: none;
    transition: all 250ms ease;

    color: ${(props) => props.theme.purple};

    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
