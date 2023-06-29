import styled from 'styled-components';

export const TodoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
  gap: 18px;
`;

export const Text = styled.p`
  margin: 0;
  /* word-break: break-all; */
`;

export const TextWrap = styled.div`
  max-width: 370px;
  text-align: justify;
`;

export const Button = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  background-color: transparent;

  cursor: pointer;
`;
