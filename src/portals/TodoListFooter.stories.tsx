import React from "react";
import { Meta, Story } from "@storybook/react";

import TodoListFooter, { TodoListFooterProps } from "./TodoListFooter";
import { TodoFilter } from "../types";

export default {
  title: "Todo List Footer",
  component: TodoListFooter,
  argTypes: {
    filter: {
      control: {
        type: "select",
        options: [TodoFilter.All, TodoFilter.Active, TodoFilter.Completed],
      },
    },
  },
} as Meta;

const Template: Story<TodoListFooterProps> = (args) => <TodoListFooter {...args} />;

export const Default = Template.bind({});
Default.storyName = "Hidden by Default";
Default.args = {
  activeCount: undefined,
  completedCount: undefined,
  filter: undefined,
};

export const ZeroItemLeft = Template.bind({});
ZeroItemLeft.storyName = "0 Items left";
ZeroItemLeft.args = {
  ...Default.args,
  completedCount: 1,
};

export const OneItemLeft = Template.bind({});
OneItemLeft.storyName = "1 Item left";
OneItemLeft.args = {
  ...Default.args,
  activeCount: 1,
};

export const MultipleItemsLeft = Template.bind({});
MultipleItemsLeft.storyName = "Multiple Items left";
MultipleItemsLeft.args = {
  ...Default.args,
  activeCount: 3,
};

export const HasCompletedItem = Template.bind({});
HasCompletedItem.storyName = "Has completed Items";
HasCompletedItem.args = {
  ...Default.args,
  completedCount: 1,
};

export const ShowActiveItems = Template.bind({});
ShowActiveItems.storyName = "Show active Items";
ShowActiveItems.args = {
  ...Default.args,
  activeCount: 1,
  filter: TodoFilter.Active,
};

export const ShowCompletedItems = Template.bind({});
ShowCompletedItems.storyName = "Show completed Items";
ShowCompletedItems.args = {
  ...Default.args,
  activeCount: 1,
  filter: TodoFilter.Completed,
};