import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import TodoListFooter from './TodoListFooter';

it('Clear completed', () => {
  const handleClearCompleted = jest.fn();
  render(<TodoListFooter completedCount={1} onClearCompleted={handleClearCompleted} />);
  const button = screen.getByText('Clear completed') as HTMLButtonElement;

  fireEvent.click(button);

  expect(handleClearCompleted).toBeCalledTimes(1);
});
