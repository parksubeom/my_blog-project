import React from 'react';
import './App.css';
import { Siderbar } from './components/Sidebar';
import { Contents } from './components/Contents';
export const App = () => {
  return (
    <div className="App" >
      <section className="Main">
        <Siderbar/>
        <Contents/>
      </section>
    </div>
  );
}

export default App;
