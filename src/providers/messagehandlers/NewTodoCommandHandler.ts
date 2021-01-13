import { NewTodoCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';
import UUID from '../UUID';

export class NewTodoCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: NewTodoCommand): CommandStatus {
    let todos = this.repository.load();
    todos = [...todos, { id: UUID.randomUUID(), title: command.title, completed: false }];
    this.repository.store(todos);
    return { success: true };
  }
}
