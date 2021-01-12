import { ClearCompletedCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';

export class ClearCompletedCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: ClearCompletedCommand): CommandStatus {
    let todos = this.repository.load();
    todos = todos.filter((it) => !it.completed);
    this.repository.store(todos);
    return { success: true };
  }
}
