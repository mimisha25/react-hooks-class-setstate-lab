import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import { render } from "react-dom";


class App extends React.Component{
  state={
    items:itemData,
    isDarkMode: false
  };


// function App() {
//   const [items, setItems] = useState(itemData);
//   const [isDarkMode, setIsDarkMode] = useState(false);

  // function handleDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
  handleDarkModeClick =() => {
    this.setState((newState)=>({
      isDarkMode: !newState.isDarkMode
    })
);
  };

// const first=items
// .filter((items) => items.status === filter)
// .map((items) => <li key={items.id}> {items.text}</li>);
render (){
  return (
    <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={this.handleDarkModeClick}>
          {this.state.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={this.state.items} />
    
    </div>
  );
  }}
export default App;
