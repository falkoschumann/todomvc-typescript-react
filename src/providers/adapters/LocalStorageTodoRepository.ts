import { Todo } from '../../domain/data';
import { TodoRepository } from '../types';

export class LocalStorageTodoRepository implements TodoRepository {
  constructor(private key: string = 'react-todos') {}

  load(): readonly Todo[] {
    const json = window.localStorage.getItem(this.key);
    if (json == null) {
      return [];
    }

    return JSON.parse(json);
  }

  store(todos: readonly Todo[]): void {
    const json = JSON.stringify(todos);
    window.localStorage.setItem(this.key, json);
  }
}
