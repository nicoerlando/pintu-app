import styled from 'styled-components';

export const Button = styled.button`
  background-color: red;
  border-style: none;
  width: 200px;
  height: auto;
  transition: ease-out 0.1s;
  &:hover {
    filter: brightness(80%);
  }
`;
