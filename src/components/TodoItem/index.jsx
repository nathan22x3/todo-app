import styles from 'components/TodoItem/TodoItem.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodoAsync, toggleTodoStatus } from 'todosSlice';

const TodoItem = ({ id, content, isCompleted }) => {
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodoAsync(id));
  };

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={styles.hiddenCheckbox}
        type='checkbox'
        hidden={true}
        checked={isCompleted}
        onChange={() => handleChange(id)}
      />
      <div className={styles.checkbox} onClick={() => handleChange(id)}>
        <svg
          width='16'
          viewBox='0 0 24 24'
          fill='none'
          color='var(--clr-white)'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='20 6 9 17 4 12'></polyline>
        </svg>
      </div>
      <label htmlFor={id} className={styles.content}>
        {content}
      </label>
      <div
        className={styles.removeButton}
        style={{ visibility: !isCompleted && 'hidden' }}
        onClick={() => handleRemove(id)}
      >
        <svg
          width='18'
          viewBox='0 0 24 24'
          fill='none'
          color='var(--clr-gray-200)'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='3 6 5 6 21 6'></polyline>
          <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
        </svg>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  handleChange: PropTypes.func,
  handleRemove: PropTypes.func,
};

TodoItem.defaultProps = {
  isCompleted: false,
  handleChange: () => {},
  handleRemove: () => {},
};

export default TodoItem;
