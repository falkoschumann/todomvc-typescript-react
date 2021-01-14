import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TodosPage from './portals/TodosPage';
import InfoFooter from './portals/InfoFooter';
//import { BackendProxy } from './providers/BackendProxy';
import { TodoRepository } from './providers/types';
import { MessageHandling } from './providers/MessageHandling';
import { LocalStorageTodoRepository } from './providers/adapters/LocalStorageTodoRepository';
import './App.css';

const repository: TodoRepository = new LocalStorageTodoRepository();
const messageHandling = new MessageHandling(repository);
//const messageHandling = new BackendProxy();

function App() {
  return (
    <React.StrictMode>
      <section className="todoapp">
        <Switch>
          <Route path="/">
            <TodosPage messageHandling={messageHandling} />
          </Route>
        </Switch>
      </section>
      <InfoFooter />
    </React.StrictMode>
  );
}

export default App;
