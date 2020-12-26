export type Todo = Readonly<{
  id: string;
  title: string;
  completed: boolean;
}>;

export enum TodoFilter {
  All = 'ALL',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
}
