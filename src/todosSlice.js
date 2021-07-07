const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require('@reduxjs/toolkit');

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  if (!localStorage.getItem('todos')) localStorage.setItem('todos', '[]');
  return JSON.parse(localStorage.getItem('todos')) || [];
});

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (payload) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(payload);

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
);

export const toggleTodoStatus = createAsyncThunk(
  'todos/toggleTodoStatus',
  async (payload) => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    const index = todos.findIndex((todo) => todo.id === payload);
    todos[index].isCompleted = !todos[index].isCompleted;

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
);

export const removeTodoAsync = createAsyncThunk(
  'todos/removeTodoAsync',
  async (payload) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(
      todos.findIndex((todo) => todo.id === payload),
      1
    );

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
);

export const removeAllCompleteTodosAsync = createAsyncThunk(
  'todos/removeAllCompleteTodosAsync',
  async () => {
    let todos = JSON.parse(localStorage.getItem('todos'));

    todos = todos.filter((todo) => todo.isCompleted === false);

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [removeTodoAsync.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [toggleTodoStatus.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [removeAllCompleteTodosAsync.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { reducer } = todosSlice;

export const getTodos = (state) => state.todos.data;

export const getActiveTodos = createSelector(getTodos, (todos) =>
  todos.filter(({ isCompleted }) => isCompleted === false)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter(({ isCompleted }) => isCompleted === true)
);

export default reducer;
