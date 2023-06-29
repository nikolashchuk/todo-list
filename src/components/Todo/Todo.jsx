import { SlClose } from 'react-icons/sl';
import { TodoWrap, Text, TextWrap, Button } from './TodoStyled';

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <TodoWrap>
      <input
        type="checkbox"
        checked={completed || false}
        onChange={onToggleCompleted}
      />
      <TextWrap>
        <Text>{text}</Text>
      </TextWrap>
      <Button onClick={onDeleteTodo}>
        <SlClose style={{ width: '25px', height: '25px' }} />
      </Button>
    </TodoWrap>
  );
};

export default Todo;
