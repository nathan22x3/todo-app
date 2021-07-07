import todosReducer from 'todosSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  todos: todosReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
