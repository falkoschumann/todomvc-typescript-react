import { MessageHandling } from '../domain/MessageHandling';
import { TodoRepository } from './types';
import { LocalStorageTodoRepository } from './adapters/LocalStorageTodoRepository';
import { ClearCompletedCommandHandler } from './messagehandlers/ClearCompletedCommandHandler';
import { DestroyCommandHandler } from './messagehandlers/DestroyCommandHandler';
import { EditCommandHandler } from './messagehandlers/EditCommandHandler';
import { NewTodoCommandHandler } from './messagehandlers/NewTodoCommandHandler';
import { TodosQueryHandler } from './messagehandlers/TodosQueryHandler';
import { ToggleAllCommandHandler } from './messagehandlers/ToggleAllCommandHandler';
import { ToggleCommandHandler } from './messagehandlers/ToggleCommandHandler';

const repository: TodoRepository = new LocalStorageTodoRepository();
const clearCompletedCommandHandler = new ClearCompletedCommandHandler(repository);
const destroyCommandHandler = new DestroyCommandHandler(repository);
const editCommandHandler = new EditCommandHandler(repository);
const newTodoCommandHandler = new NewTodoCommandHandler(repository);
const toggleAllCommandHandler = new ToggleAllCommandHandler(repository);
const toggleCommandHandler = new ToggleCommandHandler(repository);
const todosQueryHandler = new TodosQueryHandler(repository);

const messageHandling: MessageHandling = {
  handleClearCompletedCommand: (command) => clearCompletedCommandHandler.handle(command),
  handleDestroyCommand: (command) => destroyCommandHandler.handle(command),
  handleEditCommand: (command) => editCommandHandler.handle(command),
  handleNewTodoCommand: (command) => newTodoCommandHandler.handle(command),
  handleToggleAllCommand: (command) => toggleAllCommandHandler.handle(command),
  handleToggleCommand: (command) => toggleCommandHandler.handle(command),
  handleTodosQuery: (query) => todosQueryHandler.handle(query),
};

export default messageHandling;
