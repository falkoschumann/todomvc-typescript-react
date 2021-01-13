import {
  ClearCompletedCommand,
  CommandStatus,
  DestroyCommand,
  EditCommand,
  NewTodoCommand,
  ToggleAllCommand,
  ToggleCommand,
} from './messages/commands';
import { TodosQuery, TodosQueryResult } from './messages/queries';

export interface MessageHandling {
  handleClearCompletedCommand(command: ClearCompletedCommand): CommandStatus;
  handleDestroyCommand(command: DestroyCommand): CommandStatus;
  handleEditCommand(command: EditCommand): CommandStatus;
  handleNewTodoCommand(command: NewTodoCommand): CommandStatus;
  handleToggleAllCommand(command: ToggleAllCommand): CommandStatus;
  handleToggleCommand(command: ToggleCommand): CommandStatus;
  handleTodosQuery(query: TodosQuery): TodosQueryResult;
}
