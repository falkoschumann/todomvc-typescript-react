import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TodosPage from './portals/TodosPage';
import InfoFooter from './portals/InfoFooter';
import MessageHandling from './providers/MessageHandling';
import './App.css';

const messageHandling = MessageHandling;

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
