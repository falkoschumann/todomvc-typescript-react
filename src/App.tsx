import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TodosPage from './portals/TodosPage';
import './App.css';
import InfoFooter from './portals/InfoFooter';
import TodosProvider from './portals/TodosProvider';

function App() {
  return (
    <React.StrictMode>
      <section className="todoapp">
        <TodosProvider>
          <Switch>
            <Route path="/" component={TodosPage} />
          </Switch>
        </TodosProvider>
      </section>
      <InfoFooter />
    </React.StrictMode>
  );
}

export default App;
