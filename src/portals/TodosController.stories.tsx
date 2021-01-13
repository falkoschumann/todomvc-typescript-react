import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Meta, Story } from '@storybook/react';

import TodosController, { TodosControllerProps } from './TodosController';
import { TodoFilter } from './types';

const history = createMemoryHistory();

export default {
  title: 'Todos Controller',
  component: TodosController,
  decorators: [
    (story) => (
      <section className="todoapp">
        <Router history={history}>{story()}</Router>
      </section>
    ),
  ],
} as Meta;

const Template: Story<TodosControllerProps> = (args) => <TodosController {...args} />;

export const Default = Template.bind({});
Default.args = {
  todosQueryResult: {
    todos: [
      { id: '1', title: 'Taste JavaScript', completed: true },
      { id: '2', title: 'Buy a unicorn', completed: false },
    ],
  },
  filter: TodoFilter.All,
};

export const ActiveFilter = Template.bind({});
ActiveFilter.args = {
  ...Default.args,
  filter: TodoFilter.Active,
};

export const CompletedFilter = Template.bind({});
CompletedFilter.args = {
  ...Default.args,
  filter: TodoFilter.Completed,
};
