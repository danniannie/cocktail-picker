const sentence = function(drinkName) {
  let starter = "";
  const regex = /[AEIOU]/;
  if (drinkName.slice(0, 3) === "The" || drinkName.slice(0, 2) === "A ") {
    starter = `${drinkName}`;
  } else if (regex.test(drinkName[0])) {
    starter = `an ${drinkName}`;
  } else starter = starter = `a ${drinkName}`;

  return starter;
};

export default sentence;
