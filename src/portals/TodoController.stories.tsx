import React from 'react';
import { Meta, Story } from '@storybook/react';

import TodoController, { TodoControllerProps } from './TodoController';
import { TodoFilter } from '../types';

export default {
  title: 'Todo Controller',
  component: TodoController,
  decorators: [(story) => <section className="todoapp">{story()}</section>],
} as Meta;

const Template: Story<TodoControllerProps> = (args) => <TodoController {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: [
    { id: '1', title: 'Taste JavaScript', completed: true },
    { id: '2', title: 'Buy a unicorn', completed: false },
  ],
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
