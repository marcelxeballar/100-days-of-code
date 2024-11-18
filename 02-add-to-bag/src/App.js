import { useState } from "react";
import backIMG from "./assets/back.jpg";
import frontIMG from "./assets/front.jpg";
import sideIMG from "./assets/side.jpg";

const size = ["S", "M", "L", "XL", "XXL"];
const imgSRC = [frontIMG, sideIMG, backIMG];
export default function App() {
  const [isDisplayed, setIsDisplayed] = useState(backIMG);
  const [sizeActive, setSizeActive] = useState(null);
  return (
    <>
      <div className="item-img-wrapper flex-row">
        <div className="item-view-wrapper flex-col">
          {imgSRC.map((src, i) => (
            <img
              className={`${isDisplayed === src ? "active" : ""}`}
              src={src}
              key={i}
              onClick={() => setIsDisplayed(src)}
              alt={`img-${i}`}
            />
          ))}
        </div>
        <div className="current-view">
          <img src={isDisplayed} alt="Item Back" />
        </div>
      </div>
      <div className="item-info-wrapper">
        <p className="brand">POLO RAPLH</p>
        <h2 className="item-name">Custom Fit Polo Bear Oxford Shirt</h2>
        <p className="item-info">
          Blue polo with a classic cut. Made of smooth and soft cotton.
        </p>
        <div className="price-wrapper flex-col">
          <div className="new-price flex-row">
            <h2>$99.00</h2>
            <p>-25%</p>
          </div>
          <p>$132.00</p>
        </div>
        <div className="size-wrapper">
          <p>CHOOSE SIZE</p>
          <div className="choose-size flex-row">
            {size.map((item, i) => (
              <p
                className={`flex-row ${sizeActive === i ? "size-active" : ""}`}
                key={i}
                onClick={() => setSizeActive(i)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <button className="atc-btn">ADD TO CART</button>
      </div>
    </>
  );
}
