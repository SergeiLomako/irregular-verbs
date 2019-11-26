import React from 'react';
import './App.css';
import { Store } from './context/store';
import Learning from './components/Learning';
import Exam from './components/Exam';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Learning} />
          <Route exact path="/exam" component={Exam} />
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default App;
