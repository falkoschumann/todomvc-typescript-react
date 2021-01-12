import { TodosQuery, TodosQueryResult } from '../../domain/messages/queries';
import { TodoRepository } from '../types';

export class TodosQueryHandler {
  constructor(private repository: TodoRepository) {}

  handle(query: TodosQuery): TodosQueryResult {
    let todos = this.repository.load();
    return { todos };
  }
}
