import React from "react";
import LazyImage from "./LazyImage";
import imgePlaceHolder from "../img/preloader.svg";
const DrinkItem = props => {
  const { number, name, imgSmallUrl, imgBigUrl } = props;
  return (
    <div className="drinkItem">
      <div className="drinkItem__body">
        <div className="drinkItem__body--name">
          <div>{number}</div>
          <div>{name}</div>
        </div>
        <div>
          <div className="drinkItem__body__image">
            {/* <LazyImage
              srcUrls={{ small: imgSmallUrl, large: imgBigUrl }}
              className={"drinkItem__body__image--lazy"}
              svgPlaceHolder={imgePlaceHolder}
            /> */}
            <img src={imgBigUrl} />
          </div>
        </div>
      </div>
      <div className="drinkItem__footer">
        <button className="drinkItem__footer--back">{"<-"}</button>
        <button className="drinkItem__footer--home">Home</button>
        <button className="drinkItem__footer--forward">{"->"}</button>
      </div>
    </div>
  );
};

export default DrinkItem;
