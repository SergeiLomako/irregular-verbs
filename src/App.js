import React from 'react';
import './App.css';
import { Store } from './context/store';
import Learning from './components/Learning';
import Exam from './components/Exam';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Store>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Learning} />
          <Route path="/exam" component={Exam} />
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default App;
