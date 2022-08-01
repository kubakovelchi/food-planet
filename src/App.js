import React from "react";
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content/Content";
import NewMenu from "./components/NewMenu/NewMenu";


function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     <NewMenu/>
    </div>
  );
}
export default App;
