import { ClearCompletedCommand, CommandStatus, DestroyCommand, EditCommand, NewTodoCommand, ToggleAllCommand, ToggleCommand } from "../domain/messages/commands";
import { TodosQuery, TodosQueryResult } from "../domain/messages/queries";

const BACKEND_URL = 'http://localhost:8080/api';

async function sendCommand(path: string, command: any): Promise<CommandStatus> {
  const response = await fetch(`${BACKEND_URL}/${path}`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(command)
  });
  return response.json();
}

const TodosAPI = {
  sendClearCompletedCommand: (command: ClearCompletedCommand) => {
    return sendCommand('clear-completed-command', command);
  },
  sendDestroyCommand: (command: DestroyCommand) => {
    return sendCommand('destroy-command', command);
  },
  sendEditCommand: (command: EditCommand) => {
    return sendCommand('edit-command', command);
  },
  sendNewTodoCommand: (command: NewTodoCommand) => {
    return sendCommand('new-todo-command', command);
  },
  sendToggleAllCommand: (command: ToggleAllCommand) => {
    return sendCommand('toggle-all-command', command);
  },
  sendToggleCommand: (command: ToggleCommand) => {
    return sendCommand('toggle-command', command);
  },
  sendTodosQuery: async (query: TodosQuery): Promise<TodosQueryResult> => {
    const response = await fetch(`${BACKEND_URL}/todos-query`);
    return response.json();
  }
};

export default TodosAPI;
