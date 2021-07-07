import TodoItem from 'components/TodoItem';
import styles from 'components/TodoList/TodoList.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveTodos, getCompletedTodos, getTodos } from 'todosSlice';

const TodoList = ({ filter }) => {
  const todos = useSelector(getTodos);
  const activeTodos = useSelector(getActiveTodos);
  const completedTodos = useSelector(getCompletedTodos);

  return (
    <div className={styles.container}>
      {filter === 'all' &&
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      {filter === 'active' &&
        activeTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      {filter === 'completed' &&
        completedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </div>
  );
};

TodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
};

TodoList.defaultProps = {
  filter: 'all',
};

export default TodoList;
