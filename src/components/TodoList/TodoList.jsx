const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed || false}
            onChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
