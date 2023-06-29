import Todo from '../Todo/Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
