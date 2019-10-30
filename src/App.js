import React from 'react';
import './App.css';
import { Store } from './context/store'
import VerbCard from './components/Card/VerbCard'
import VerbList from './components/VerbList'
import VerbHeader from './components/VerbHeader'

function App() {
  return (
    <Store>
      <VerbHeader />
      <VerbCard />
      <VerbList />
    </Store>
  );
}

export default App;
