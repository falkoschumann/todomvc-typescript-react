import { NewTodoCommand, CommandStatus } from '../../domain/messages/commands';
import { TodoRepository } from '../types';

export class NewTodoCommandHandler {
  constructor(private repository: TodoRepository) {}

  handle(command: NewTodoCommand): CommandStatus {
    let todos = this.repository.load();
    // TODO UUID generieren
    // TODO Fabrikmethode extrahieren
    todos = [...todos, { id: '', title: command.title, completed: false }];
    this.repository.store(todos);
    return { success: true };
  }
}
