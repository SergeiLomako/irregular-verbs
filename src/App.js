import React from "react";
import './App.css';
import VerbCard from "./components/Card/VerbCard"
import VerbList from "./components/VerbList"
import VerbHeader from "./components/VerbHeader"

function App() {
  return (
    <>
      <VerbHeader />
      <VerbCard />
      <VerbList />
    </>
  );
}

export default App;
