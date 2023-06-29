const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed || false}
        onChange={onToggleCompleted}
      />
      <p>{text}</p>
      <button onClick={onDeleteTodo}>delete</button>
    </div>
  );
};

export default Todo;
