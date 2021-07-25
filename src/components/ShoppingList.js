import React from "react";
import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryChange(event) {
//     // event.target.value will be the value selected by the user
//     setSelectedCategory(event.target.value);
//   }
class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All",
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };
  // we want to filter the items to only display the ones based on the selected category
  getItemsToDisplay() {
    return this.props.items
      .filter(
        (item) =>
          this.state.selectedCategory === "All" ||
          item.category === this.state.selectedCategory
      )
      .map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ));
  }

  //   return item.category === selectedCategory;
  // });
render(){
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={this.handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div> <ul className="Items">{this.getItemsToDisplay()}</ul>
      {/* <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul> */}
    </div>
  );
}}

export default ShoppingList;
