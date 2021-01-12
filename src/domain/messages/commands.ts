import { TodoId } from "../data";

export type ClearCompletedCommand = Readonly<{
  type: 'CLEAR_COMPLETED_COMMAND';
}>;

export type DestroyCommand = Readonly<{
  type: 'DESTROY_COMMAND';
  id: TodoId;
}>;

export type EditCommand = Readonly<{
  type: 'EDIT_COMMAND';
  id: TodoId;
  title: string;
}>;

export type NewTodoCommand = Readonly<{
  type: 'NEW_TODO_COMMAND';
  title: string;
}>;

export type ToggleAllCommand = Readonly<{
  type: 'TOGGLE_ALL_COMMAND';
  completed: boolean;
}>;

export type ToggleCommand = Readonly<{
  type: 'TOGGLE_COMMAND';
  id: TodoId;
}>;
