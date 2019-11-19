import React from 'react';
import './App.css';
import { Store } from './context/store';
import VerbCard from './components/Card/Card';
import VerbList from './components/List';
import VerbHeader from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <Store>
      <VerbHeader />
      <Search />
      <VerbCard />
      <VerbList />
    </Store>
  );
}

export default App;
