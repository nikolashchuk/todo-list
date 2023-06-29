import { FilterInput } from './TodoFilterStyled';

export const TodoFilter = ({ value, onChange }) => {
  return (
    <FilterInput
      type="text"
      placeholder="Find your task"
      value={value}
      onChange={onChange}
    />
  );
};
