import { ToggleCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';

export class ToggleCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: ToggleCommand): CommandStatus {
    let todos = this.repository.load();
    todos = todos.map((it) => (command.id === it.id ? { ...it, completed: !it.completed } : it));
    this.repository.store(todos);
    return { success: true };
  }
}
