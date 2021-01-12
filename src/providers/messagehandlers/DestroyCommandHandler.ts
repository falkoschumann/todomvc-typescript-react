import { DestroyCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';

export class DestroyCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: DestroyCommand): CommandStatus {
    let todos = this.repository.load();
    todos = todos.filter((it) => command.id !== it.id);
    this.repository.store(todos);
    return { success: true };
  }
}
