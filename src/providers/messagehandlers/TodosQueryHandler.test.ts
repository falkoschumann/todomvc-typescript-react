import { TodosQueryResult } from '../../domain/messages/queries';
import { LocalStorageTodoRepository } from '../adapters/LocalStorageTodoRepository';
import { TodosQueryHandler } from './TodosQueryHandler';

it('Todos', () => {
  const repository = new LocalStorageTodoRepository();
  repository.store([
    { id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7', title: 'Taste JavaScript', completed: true },
    { id: 'd2f7760d-8f03-4cb3-9176-06311cb89993', title: 'Buy a unicorn', completed: false },
  ]);
  const handler = new TodosQueryHandler(repository);

  const result: TodosQueryResult = handler.handle({});

  expect(result).toEqual({
    todos: [
      { id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7', title: 'Taste JavaScript', completed: true },
      { id: 'd2f7760d-8f03-4cb3-9176-06311cb89993', title: 'Buy a unicorn', completed: false },
    ],
  });
});
