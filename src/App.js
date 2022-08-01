import React from "react";
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content/Content";
import NewMenu from "./components/NewMenu/NewMenu";
import MenuContent from "./components/MenuContent/MenuContent";
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     <NewMenu/>
     <MenuContent/>
     <About/>
    </div>
  );
}
export default App;
