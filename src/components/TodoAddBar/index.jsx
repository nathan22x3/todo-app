import Button from 'components/Button';
import Input from 'components/Input';
import styles from 'components/TodoAddBar/TodoAddBar.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from 'todosSlice';

const TodoAddbar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => setValue(target.value);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const todo = {
      id: String(Math.trunc(Math.random() * 99999)),
      content: value,
      isCompleted: false,
    };

    dispatch(addTodoAsync(todo));
    setValue('');
  };

  return (
    <form className={styles.container}>
      <Input
        placeholder='Add details...'
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleAddTodo}>Add</Button>
    </form>
  );
};

export default TodoAddbar;
