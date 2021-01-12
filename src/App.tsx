import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TodoController from './portals/TodoController';
import './App.css';
import InfoFooter from './portals/InfoFooter';
import { TodoFilter } from './portals/types';

const todos = [
  { id: '1', title: 'Taste JavaScript', completed: true },
  { id: '2', title: 'Buy a unicorn', completed: false },
];

function App() {
  return (
    <React.StrictMode>
      <section className="todoapp">
        <Switch>
          <Route exact path="/">
            <TodoController todos={todos} />
          </Route>
          <Route exact path="/active">
            <TodoController todos={todos} filter={TodoFilter.Active} />
          </Route>
          <Route exact path="/completed">
            <TodoController todos={todos} filter={TodoFilter.Completed} />
          </Route>
        </Switch>
      </section>
      <InfoFooter />
    </React.StrictMode>
  );
}

export default App;
