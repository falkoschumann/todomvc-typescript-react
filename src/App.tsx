import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TodosPage from './portals/TodosPage';
import './App.css';
import InfoFooter from './portals/InfoFooter';

function App() {
  return (
    <React.StrictMode>
      <section className="todoapp">
        <Switch>
          <Route path="/" component={TodosPage} />
        </Switch>
      </section>
      <InfoFooter />
    </React.StrictMode>
  );
}

export default App;
