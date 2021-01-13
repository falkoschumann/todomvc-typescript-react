import React from 'react';
import { useLocation } from 'react-router-dom';
import TodosController from './TodosController';
import { TodoFilter } from './types';

const todosQueryResult = {
  todos: [
    { id: '1', title: 'Taste JavaScript', completed: true },
    { id: '2', title: 'Buy a unicorn', completed: false },
  ],
};

export type TodosPageProps = Readonly<{
  filter?: TodoFilter;
}>;

function TodosPage({ filter }: TodosPageProps) {
  const location = useLocation();

  switch (location.pathname) {
    case '/active':
      filter = TodoFilter.Active;
      break;
    case '/completed':
      filter = TodoFilter.Completed;
      break;
    default:
      filter = TodoFilter.All;
      break;
  }

  return <TodosController filter={filter} todosQueryResult={todosQueryResult} />;
}

export default TodosPage;
