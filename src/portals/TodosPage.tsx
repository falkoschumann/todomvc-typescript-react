import React from 'react';
import { useLocation } from 'react-router-dom';

import { TodoFilter } from './types';
import TodosController from './TodosController';
import { useTodos } from './TodosProvider';

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

  const todos = useTodos();

  return (
    <TodosController
      filter={filter}
      todosQueryResult={todos.todosQueryResult}
      onToggleAllCommand={(command) => todos.handleToggleAllCommand(command)}
      onNewTodoCommand={(command) => todos.handleNewTodoCommand(command)}
      onToggleCommand={(command) => todos.handleToggleCommand(command)}
      onEditCommand={(command) => todos.handleEditCommand(command)}
      onDestroyCommand={(command) => todos.handleDestroyCommand(command)}
      onClearCompletedCommand={(command) => todos.handleClearCompletedCommand(command)}
    />
  );
}

export default TodosPage;
