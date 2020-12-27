import React from 'react';

import TodoController from './portals/TodoController';
import './App.css';
import InfoFooter from './portals/InfoFooter';

function App() {
  return (
    <>
      <section className="todoapp">
        <TodoController
          todos={[
            { id: '1', title: 'Taste JavaScript', completed: true },
            { id: '2', title: 'Buy a unicorn', completed: false },
          ]}
        />
      </section>
      <InfoFooter />
    </>
  );
}

export default App;
