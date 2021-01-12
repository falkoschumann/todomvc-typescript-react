import { ToggleAllCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';

export class ToggleAllCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: ToggleAllCommand): CommandStatus {
    let todos = this.repository.load();
    todos = todos.map((it) => ({ ...it, completed: command.completed }));
    this.repository.store(todos);
    return { success: true };
  }
}
