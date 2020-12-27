import React, { useState } from 'react';

import { Todo, TodoId, TodoFilter } from '../types';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoListFooter from './TodoListFooter';

export type TodoControllerProps = Readonly<{
  todos?: readonly Todo[];
  filter?: TodoFilter;
  onNewTodo?: (text: string) => void;
  onToggle?: (id: TodoId) => void;
  onSave?: (id: TodoId, title: string) => void;
  onDestroy?: (id: TodoId) => void;
  onClearCompleted?: () => void;
}>;

function TodoController({
  todos = [],
  filter = TodoFilter.All,
  onNewTodo,
  onToggle,
  onSave,
  onDestroy,
  onClearCompleted,
}: TodoControllerProps) {
  const [editing, setEditing] = useState<TodoId>();

  const activeCount = todos.filter((it) => !it.completed).length;
  const completedCount = todos.filter((it) => it.completed).length;

  function handleToggle(todo: Todo) {
    onToggle?.(todo.id);
  }

  function handleEdit(todo: Todo) {
    setEditing(todo.id);
  }

  function handleSave(todo: Todo, title: string) {
    onSave?.(todo.id, title);
    setEditing(undefined);
  }

  function handleCancel() {
    setEditing(undefined);
  }

  function handleDestroy(todo: Todo) {
    onDestroy?.(todo.id);
  }

  const todoItems = todos
    .filter(
      (it) =>
        filter === TodoFilter.All ||
        (filter === TodoFilter.Active && !it.completed) ||
        (filter === TodoFilter.Completed && it.completed)
    )
    .map((it) => (
      <TodoItem
        key={it.id}
        todo={it}
        editing={editing === it.id}
        onToggle={() => handleToggle(it)}
        onEdit={() => handleEdit(it)}
        onSave={(title) => handleSave(it, title)}
        onCancel={handleCancel}
        onDestroy={() => handleDestroy(it)}
      />
    ));

  return (
    <>
      <TodoListHeader onNewTodo={onNewTodo} />
      {todoItems.length === 0 ? null : (
        <>
          <TodoList>{todoItems}</TodoList>
          <TodoListFooter
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onClearCompleted={onClearCompleted}
          />
        </>
      )}
    </>
  );
}

export default TodoController;
