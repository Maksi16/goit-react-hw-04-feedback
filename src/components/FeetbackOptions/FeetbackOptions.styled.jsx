import styled from 'styled-components';

export const Button = styled.button`
  width: 96px;
  height: 32px;
  margin-right: 8px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  outline: none;

  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
`;
