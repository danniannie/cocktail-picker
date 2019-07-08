import React from "react";

class CocktailPicker extends React.Component {
  state = { alcohol: "vodka", describe: "highball", language: "ordinary" };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="alcohol">What's your favourite alcohol?</label>
        <select onChange={this.handleChange} id="alcohol">
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="whiskey">Whiskey</option>
          <option value="gin">Gin</option>
          <option value="rum">Rum</option>
        </select>
        <br />
        <label htmlFor="describe">How would you describe yourself?</label>
        <select onChange={this.handleChange} id="describe">
          <option value="highball">Shy</option>
          <option value="cocktail">Sophisticated</option>
          <option value="shot">Outgoing</option>
          <option value="punchbowl">Selfish</option>
        </select>
        <br />
        <label htmlFor="language">What is your prefered coding language?</label>
        <select onChange={this.handleChange} id="language">
          <option value="ordinary">Javascript</option>
          <option value="cocktail">Python</option>
          <option value="party">C#</option>
        </select>
        <button className="gold-text" type="submit">
          Tell me what I am!
        </button>
      </form>
    );
  }
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { getId, cocktails } = this.props;
    const { alcohol, describe, language } = this.state;
    console.log(getId);
    const chosenDrink = cocktails.filter(ele => {
      return (
        ele.strGlass === describe &&
        ele.alcohol === alcohol &&
        ele.strCategory === language
      );
    });

    getId(chosenDrink[0]);
  };
}

export default CocktailPicker;
