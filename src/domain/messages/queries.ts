import { Todo } from '../data';

export type TodosQuery = Readonly<{
  type: 'TODOS_QUERY';
}>;

export type TodosQueryResult = Readonly<{
  todos: readonly Todo[];
}>;
