import React from 'react';
import ActorForm from './components/ActorForm';
import ActorList from './components/ActorList';

function App() {
  return (
    <div className="App">
      <h1>Actor Database</h1>
      <ActorForm />
      <ActorList/>
    </div>
  );
}

export default App;
