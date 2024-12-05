import "./default.css";
import React from "react";
import img from "./Assets/iced-coffee.jpg";
import Star from "./Assets/starSVG";

import Timer from "./Assets/timerSVG";
import Level from "./Assets/levelSVG";
import Wallet from "./Assets/walletSVG";

const infoIcons = [Timer, Level, Wallet];
const infoTitle = ["TIME", "Level", "Budget"];
const infoText = ["10 Minutes", "Easy", "$2.99"];

const ingredients = [
  "3 tablespoons Espresso coffee powder",
  "1 cup of boiled water",
  "1 cup Coconut milk",
];

const recipeSteps = [
  "Boil water and let it cool for 1-2 minutes.",
  "Add coffee grounds to a cafetière and pour in the water.",
  "Steep the coffee for 5 minutes, then slowly press the plunger down.",
  "Transfer the coffee to a jug, let it cool, and refrigerate for several hours.",
  "Mix in coconut milk and condensed milk, then serve over ice.",
  "Store in the fridge for up to 5 days. Shake or stir before serving.",
];

export default function App() {
  return (
    <div className="flex-row display-wrapper">
      <div className="img-wrapper">
        <img src={img} alt="Sweet iced Coffee with Coconut Milk" />
        <p>Sweet iced Coffee with Coconut Milk</p>
      </div>
      <div className="recipe-wrapper flex-col">
        <div className="title-wrapper">
          {Array.from({ length: 5 }, (_, i) => (
            <Star />
          ))}
          <p>Sweet iced Coffee with Coconut Milk</p>
        </div>
        <div className="recipe-info">
          <div className="flex-row">
            {infoIcons.map((Icon, i) => (
              <div className={`flex-row ${infoTitle[i].toLowerCase()}-wrapper`}>
                <Icon />
                <div className="flex-col">
                  <p>{infoTitle[i]}</p>
                  <p className="info-text">{infoText[i]}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Sweet Iced Coffee with coconut milk is easy to make and stores well
            in the fridge.
          </p>
          <p>
            Make a large batch and save yourself a few trips to the coffee shop
          </p>
          <div className="ing-wrapper flex-col">
            <h2>INGREDIENTS</h2>
            {ingredients.map((ingredient, i) => (
              <label>
                <input type="checkbox" />

                {ingredient}
              </label>
            ))}
          </div>
          <div className="inst-wrapper flex-col">
            <h2>INSTRUCTIONS</h2>
            {recipeSteps.map((step, i) => (
              <p>
                <span className="step-num">{i + 1 + "."}</span> {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
