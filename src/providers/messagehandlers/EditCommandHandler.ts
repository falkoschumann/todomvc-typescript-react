import { EditCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';

export class EditCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: EditCommand): CommandStatus {
    let todos = this.repository.load();
    todos = todos.map((it) => (command.id === it.id ? { ...it, title: command.title } : it));
    this.repository.store(todos);
    return { success: true };
  }
}
