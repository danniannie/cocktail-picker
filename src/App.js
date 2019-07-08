import React from "react";
import Heading from "./components/Heading";
import CocktailPicker from "./components/CocktailPicker";
import FinalCocktail from "./components/FinalCocktail";
import cocktails from "./data/cocktails.json";
import "./App.css";

class App extends React.Component {
  state = {
    cocktails,
    name: "",
    imgURL:
      "https://st2.depositphotos.com/5595804/8399/v/950/depositphotos_83998266-stock-illustration-cocktail-background.jpg",
    srcURL: ""
  };
  render() {
    return (
      <div>
        <Heading />
        <main>
          <CocktailPicker getId={this.getId} cocktails={this.state.cocktails} />
          <FinalCocktail
            name={this.state.name}
            imgURL={this.state.imgURL}
            srcURL={this.state.srcURL}
          />
        </main>
      </div>
    );
  }

  getId = chosenDrink => {
    const { name, imgURL, srcURL } = chosenDrink;
    this.setState(state => ({ cocktails, name, imgURL, srcURL }));
  };
}

export default App;
