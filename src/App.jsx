import Button from 'components/Button';
import Tab from 'components/Tab';
import tabStyles from 'components/Tab/Tab.module.scss';
import TodoAddbar from 'components/TodoAddBar';
import TodoList from 'components/TodoList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos, removeAllCompleteTodosAsync } from 'todosSlice';
import styles from './App.module.scss';

const RemoveIcon = () => (
  <svg
    width='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='3 6 5 6 21 6'></polyline>
    <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
  </svg>
);

const App = () => {
  const dispatch = useDispatch();

  const handleRemoveAllCompleted = () => {
    dispatch(removeAllCompleteTodosAsync());
  };

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <h1>#todo</h1>
      <Tab>
        <div label='All' className={tabStyles.content}>
          <TodoAddbar />
          <TodoList />
        </div>
        <div label='Active' className={tabStyles.content}>
          <TodoAddbar />
          <TodoList filter='active' />
        </div>
        <div label='Completed' className={tabStyles.content}>
          <TodoList filter='completed' />
          <Button
            style={{ alignSelf: 'flex-end' }}
            variant='danger'
            onClick={handleRemoveAllCompleted}
          >
            <RemoveIcon />
            <span>Delete all</span>
          </Button>
        </div>
      </Tab>
    </div>
  );
};

export default App;
