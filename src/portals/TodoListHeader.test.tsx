import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoListHeader from './TodoListHeader';

it('fire new todo', () => {
  const handleNewTodo = jest.fn();
  render(<TodoListHeader onNewTodo={handleNewTodo} />);
  const inputElement = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;

  userEvent.type(inputElement, 'Taste JavaScript');
  fireEvent.keyDown(inputElement, { key: 'Enter' });

  expect(handleNewTodo).toBeCalledTimes(1);
  expect(handleNewTodo).toBeCalledWith('Taste JavaScript');
  expect(inputElement.value).toEqual('');
});
