import React from 'react';

export type TodoListProps = Readonly<{
  children?: React.ReactElement[] | React.ReactElement | null;
}>;

function TodoList({ children }: TodoListProps) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{children}</ul>
    </section>
  );
}

export default TodoList;
