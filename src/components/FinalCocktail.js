import React from "react";
import sentence from "../utils/utils.js";

const FinalCocktail = ({ name, imgURL, srcURL }) => {
  const writing = sentence(name);
  return (
    <section className="displayImg">
      <p>{name != "" ? `You are ${writing}` : ""}</p>
      <img src={imgURL} alt={name} />
      <a href={srcURL}>{name != "" ? "View Recipe" : ""}</a>
    </section>
  );
};

export default FinalCocktail;
