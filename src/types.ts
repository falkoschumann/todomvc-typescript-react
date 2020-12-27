export type TodoId = string;

export type Todo = Readonly<{
  id: TodoId;
  title: string;
  completed: boolean;
}>;

export enum TodoFilter {
  All = 'ALL',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
}
