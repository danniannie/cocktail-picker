import React from "react";
import Heading from "./components/Heading";
import CocktailPicker from "./components/CocktailPicker";
import FinalCocktail from "./components/FinalCocktail";
import cocktails from "./data/cocktails.json";

class App extends React.Component {
  state = { cocktails, strDrink: "", strDrinkThumb: "" };
  render() {
    console.log(this.state);
    return (
      <div>
        <Heading />
        <CocktailPicker getId={this.getId} cocktails={this.state.cocktails} />
        <FinalCocktail
          strDrink={this.state.strDrink}
          strDrinkThumb={this.state.strDrinkThumb}
        />
      </div>
    );
  }

  getId = chosenDrink => {
    const { strDrink, strDrinkThumb } = chosenDrink;
    this.setState(state => ({ cocktails, strDrink, strDrinkThumb }));
  };
}

export default App;
