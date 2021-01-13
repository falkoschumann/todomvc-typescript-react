import { MessageHandling as IMessageHandling } from '../domain/MessageHandling';
import { TodoRepository } from './types';
import { ClearCompletedCommandHandler } from './messagehandlers/ClearCompletedCommandHandler';
import { DestroyCommandHandler } from './messagehandlers/DestroyCommandHandler';
import { EditCommandHandler } from './messagehandlers/EditCommandHandler';
import { NewTodoCommandHandler } from './messagehandlers/NewTodoCommandHandler';
import { TodosQueryHandler } from './messagehandlers/TodosQueryHandler';
import { ToggleAllCommandHandler } from './messagehandlers/ToggleAllCommandHandler';
import { ToggleCommandHandler } from './messagehandlers/ToggleCommandHandler';
import {
  ClearCompletedCommand,
  DestroyCommand,
  EditCommand,
  NewTodoCommand,
  ToggleAllCommand,
  ToggleCommand,
} from '../domain/messages/commands';

export class MessageHandling implements IMessageHandling {
  private clearCompletedCommandHandler: ClearCompletedCommandHandler;
  private destroyCommandHandler: DestroyCommandHandler;
  private editCommandHandler: EditCommandHandler;
  private newTodoCommandHandler: NewTodoCommandHandler;
  private toggleAllCommandHandler: ToggleAllCommandHandler;
  private toggleCommandHandler: ToggleCommandHandler;
  private todosQueryHandler: TodosQueryHandler;

  constructor(repository: TodoRepository) {
    this.clearCompletedCommandHandler = new ClearCompletedCommandHandler(repository);
    this.destroyCommandHandler = new DestroyCommandHandler(repository);
    this.editCommandHandler = new EditCommandHandler(repository);
    this.newTodoCommandHandler = new NewTodoCommandHandler(repository);
    this.toggleAllCommandHandler = new ToggleAllCommandHandler(repository);
    this.toggleCommandHandler = new ToggleCommandHandler(repository);
    this.todosQueryHandler = new TodosQueryHandler(repository);
  }

  handleClearCompletedCommand(command: ClearCompletedCommand) {
    return Promise.resolve(this.clearCompletedCommandHandler.handle(command));
  }
  handleDestroyCommand(command: DestroyCommand) {
    return Promise.resolve(this.destroyCommandHandler.handle(command));
  }
  handleEditCommand(command: EditCommand) {
    return Promise.resolve(this.editCommandHandler.handle(command));
  }
  handleNewTodoCommand(command: NewTodoCommand) {
    return Promise.resolve(this.newTodoCommandHandler.handle(command));
  }
  handleToggleAllCommand(command: ToggleAllCommand) {
    return Promise.resolve(this.toggleAllCommandHandler.handle(command));
  }
  handleToggleCommand(command: ToggleCommand) {
    return Promise.resolve(this.toggleCommandHandler.handle(command));
  }
  handleTodosQuery(query: TodosQueryHandler) {
    return Promise.resolve(this.todosQueryHandler.handle(query));
  }
}
