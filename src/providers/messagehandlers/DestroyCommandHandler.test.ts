import { CommandStatus } from '../../domain/messages/commands';
import { LocalStorageTodoRepository } from '../adapters/LocalStorageTodoRepository';
import { DestroyCommandHandler } from './DestroyCommandHandler';

it('Destroy', () => {
  const repository = new LocalStorageTodoRepository();
  repository.store([
    { id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7', title: 'Taste JavaScript', completed: true },
    { id: 'd2f7760d-8f03-4cb3-9176-06311cb89993', title: 'Buy a unicorn', completed: false },
  ]);
  const handler = new DestroyCommandHandler(repository);

  const status: CommandStatus = handler.handle({ id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7' });

  expect(status).toEqual({ success: true });
  expect(repository.load()).toEqual([
    { id: 'd2f7760d-8f03-4cb3-9176-06311cb89993', title: 'Buy a unicorn', completed: false },
  ]);
});
