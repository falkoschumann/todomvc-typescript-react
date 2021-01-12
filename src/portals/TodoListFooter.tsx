import React from 'react';

import { TodoFilter } from '../types';

export type TodoListFooterProps = Readonly<{
  activeCount?: number;
  completedCount?: number;
  filter?: TodoFilter;
  onClearCompleted?: () => void; // TODO Test clear completed
}>;

function TodoListFooter({
  activeCount = 0,
  completedCount = 0,
  filter = TodoFilter.All,
  onClearCompleted,
}: TodoListFooterProps) {
  if (activeCount + completedCount <= 0) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> item{activeCount !== 1 ? 's' : null} left
      </span>
      <ul className="filters">
        <li>
          <a className={filter === TodoFilter.All ? 'selected' : undefined} href="#/">
            All
          </a>
        </li>
        <li>
          <a className={filter === TodoFilter.Active ? 'selected' : undefined} href="#/active">
            Active
          </a>
        </li>
        <li>
          <a className={filter === TodoFilter.Completed ? 'selected' : undefined} href="#/completed">
            Completed
          </a>
        </li>
      </ul>
      {completedCount <= 0 ? null : (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default TodoListFooter;
