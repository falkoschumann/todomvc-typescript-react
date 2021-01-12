import { Todo } from '../domain/data';

export interface TodoRepository {
  load(): readonly Todo[];
  store(todos: readonly Todo[]): void;
}
