import styled from 'styled-components';

export const FormTodo = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Textinput = styled.input`
  width: 350px;
  height: 50px;
  padding-left: 16px;
  padding-right: 16px;
  outline: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  cursor: pointer;

  :hover {
    background-color: aquamarine;
  }
`;
