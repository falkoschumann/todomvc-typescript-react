import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import { Todo } from '../types';
import { usePrevious } from './hooks';

export type TodoItemProps = Readonly<{
  todo: Todo;
  editing?: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
  onSave?: (title: string) => void;
  onCancel?: () => void;
  onDestroy?: () => void;
}>;

function TodoItem({ todo, editing = false, onToggle, onEdit, onSave, onCancel, onDestroy }: TodoItemProps) {
  const editRef = useRef<HTMLInputElement>(null);
  const [editText, setEditText] = useState(todo.title);
  const previousEditing = usePrevious(editing);

  useEffect(() => {
    const edit = editRef.current;
    if (!previousEditing && editing && edit != null) {
      edit.focus();
      edit.setSelectionRange(edit.value.length, edit.value.length);
    }
  });

  function handleEdit() {
    onEdit?.();
    setEditText(todo.title);
  }

  function handleSubmit() {
    var val = editText.trim();
    if (val) {
      onSave?.(val);
      setEditText(val);
    } else {
      onDestroy?.();
    }
  }

  function handleChange() {
    if (editRef.current == null) {
      return;
    }
    setEditText(editRef.current.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      setEditText(todo.title);
      onCancel?.();
    } else if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <li className={classnames({ completed: todo.completed, editing })}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={onToggle} />
        <label onDoubleClick={handleEdit}>{todo.title}</label>
        <button className="destroy" onClick={onDestroy}></button>
      </div>
      <input
        ref={editRef}
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}

export default TodoItem;
