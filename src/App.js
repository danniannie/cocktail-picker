import React from "react";
import Heading from "./components/Heading";
import CocktailPicker from "./components/CocktailPicker";
import FinalCocktail from "./components/FinalCocktail";
import cocktails from "./data/cocktails.json";

class App extends React.Component {
  state = { cocktails, chosenId: 0 };
  render() {
    return (
      <div>
        <Heading />
        <CocktailPicker getId={this.getId} cocktails={this.state.cocktails} />
        <FinalCocktail />
      </div>
    );
  }

  getId = cocktailID => {
    this.setState(state => ({ cocktails, chosenId: cocktailID }));
  };
}

export default App;
