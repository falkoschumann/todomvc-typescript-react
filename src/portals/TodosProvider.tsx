import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { TodosQuery, TodosQueryResult } from '../domain/messages/queries';
import {
  ClearCompletedCommand,
  DestroyCommand,
  EditCommand,
  NewTodoCommand,
  ToggleAllCommand,
  ToggleCommand,
} from '../domain/messages/commands';
import { TodoRepository } from '../providers/types';
import { LocalStorageTodoRepository } from '../providers/adapters/LocalStorageTodoRepository';
import { ClearCompletedCommandHandler } from '../providers/messagehandlers/ClearCompletedCommandHandler';
import { DestroyCommandHandler } from '../providers/messagehandlers/DestroyCommandHandler';
import { EditCommandHandler } from '../providers/messagehandlers/EditCommandHandler';
import { NewTodoCommandHandler } from '../providers/messagehandlers/NewTodoCommandHandler';
import { ToggleAllCommandHandler } from '../providers/messagehandlers/ToggleAllCommandHandler';
import { ToggleCommandHandler } from '../providers/messagehandlers/ToggleCommandHandler';
import { TodosQueryHandler } from '../providers/messagehandlers/TodosQueryHandler';

type TodosContextType = Readonly<{
  handleClearCompletedCommand: (command: ClearCompletedCommand) => void;
  handleDestroyCommand: (command: DestroyCommand) => void;
  handleEditCommand: (command: EditCommand) => void;
  handleNewTodoCommand: (command: NewTodoCommand) => void;
  handleToggleAllCommand: (command: ToggleAllCommand) => void;
  handleToggleCommand: (command: ToggleCommand) => void;
  handleTodosQuery: (query: TodosQuery) => void;
  todosQueryResult: TodosQueryResult;
}>;

const TodosContext = React.createContext<TodosContextType>({
  handleClearCompletedCommand: () => {},
  handleDestroyCommand: () => {},
  handleEditCommand: () => {},
  handleNewTodoCommand: () => {},
  handleToggleAllCommand: () => {},
  handleToggleCommand: () => {},
  handleTodosQuery: () => {},
  todosQueryResult: { todos: [] },
});

type TodosProviderProps = {
  children: React.ReactElement | null;
};

export default function TodosProvider({ children }: TodosProviderProps) {
  //
  // Build
  //

  const repository: TodoRepository = useMemo(() => new LocalStorageTodoRepository(), []);
  const clearCompletedCommandHandler = useMemo(() => new ClearCompletedCommandHandler(repository), [repository]);
  const destroyCommandHandler = useMemo(() => new DestroyCommandHandler(repository), [repository]);
  const editCommandHandler = useMemo(() => new EditCommandHandler(repository), [repository]);
  const newTodoCommandHandler = useMemo(() => new NewTodoCommandHandler(repository), [repository]);
  const toggleAllCommandHandler = useMemo(() => new ToggleAllCommandHandler(repository), [repository]);
  const toggleCommandHandler = useMemo(() => new ToggleCommandHandler(repository), [repository]);
  const todosQueryHandler = useMemo(() => new TodosQueryHandler(repository), [repository]);
  const [todosQueryResult, setTodosQueryResult] = useState<TodosQueryResult>({ todos: [] });

  //
  // Bind
  //

  const handleClearCompletedCommand = useCallback(
    (command: ClearCompletedCommand) => {
      clearCompletedCommandHandler.handle(command);
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [clearCompletedCommandHandler, todosQueryHandler]
  );
  const handleDestroyCommand = useCallback(
    (command: DestroyCommand) => {
      destroyCommandHandler.handle(command);
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [destroyCommandHandler, todosQueryHandler]
  );
  const handleEditCommand = useCallback(
    (command: EditCommand) => {
      editCommandHandler.handle(command);
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [editCommandHandler, todosQueryHandler]
  );
  const handleNewTodoCommand = useCallback(
    (command: NewTodoCommand) => {
      newTodoCommandHandler.handle(command);
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [newTodoCommandHandler, todosQueryHandler]
  );
  const handleToggleAllCommand = useCallback(
    (command: ToggleAllCommand) => {
      toggleAllCommandHandler.handle(command);
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [todosQueryHandler, toggleAllCommandHandler]
  );
  const handleToggleCommand = useCallback(
    (command: ToggleCommand) => {
      toggleCommandHandler.handle(command);
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [todosQueryHandler, toggleCommandHandler]
  );
  const handleTodosQuery = useCallback(
    (query: TodosQuery) => {
      const result = todosQueryHandler.handle({});
      setTodosQueryResult(result);
    },
    [todosQueryHandler]
  );

  //
  // Run
  //

  useEffect(() => {
    handleTodosQuery({});
  }, [handleTodosQuery]);

  return (
    <TodosContext.Provider
      value={{
        handleClearCompletedCommand,
        handleDestroyCommand,
        handleEditCommand,
        handleNewTodoCommand,
        handleToggleAllCommand,
        handleToggleCommand,
        handleTodosQuery,
        todosQueryResult,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
