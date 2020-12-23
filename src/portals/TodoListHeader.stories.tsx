import React from "react";
import { Meta, Story } from "@storybook/react";

import TodoListHeader, { TodoListHeaderProps } from "./TodoListHeader";

export default {
  title: "Todo List Header",
  component: TodoListHeader,
  decorators: [(story) => <div className="todoapp">{story()}</div>],
} as Meta;

const Template: Story<TodoListHeaderProps> = (args) => <TodoListHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
