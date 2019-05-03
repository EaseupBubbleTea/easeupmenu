import React, { Component } from 'react';
import LazyImage from './LazyImage';
import imgePlaceHolder from '../img/preloader.svg';
import languages from '../langueages';
import homeIcon from '../img/home.png';

class DrinkItem extends Component {
  text = key => {
    return languages[key][this.props.lang];
  };

  render() {
    const {
      item,
      lang,
      // onPreviousClick,
      onHomeClick
      // onNextClick
    } = this.props;

    let desc = item['desc']['th'];
    if (lang === 'eng' && item['desc']['eng']) {
      desc = item['desc']['eng'];
    }

    return (
      <div className="drinkItem">
        <div className="drinkItem__body">
          <div className="drinkItem__body__banner">
            <div>{item.number}</div>
            <div>
              <b>{item.name[lang]}</b>
            </div>
          </div>
          <div className="drinkItem__body__content">
            <div className="drinkItem__body__content__image">
              <LazyImage
                srcUrls={item.srcUrls}
                svgPlaceHolder={imgePlaceHolder}
              />
              {/* <img src={item.srcUrls.large} alt=""/> */}
            </div>
            <div className="drinkItem__body__content__price">
              {item.prices.small && (
                <div>
                  <div>{this.text('smallCup')}</div>
                  <div>{item.prices.small}</div>
                  <div>{this.text('bath')}</div>
                </div>
              )}

              {item.prices.standard && (
                <div>
                  <div>{this.text('standardCup')}</div>
                  <div>{item.prices.standard}</div>
                  <div>{this.text('bath')}</div>
                </div>
              )}
              {item.prices.large && (
              <div>
                <div>{this.text('largeCup')}</div>
                <div>{item.prices.large}</div>
                <div>{this.text('bath')}</div>
              </div>
              )}
            </div>
            <div className="drinkItem__body__content__topping">
              <div>
                {item.topping && (
                  <p>
                    <b>Topping</b>
                  </p>
                )}
              </div>
              <div>{item.topping && topping(item.topping)}</div>
            </div>

            <div className="drinkItem__body__content__detail">{desc}</div>
            <div />
          </div>
        </div>
        <div className="drinkItem__footer">
          {/* <button className="drinkItem__footer--back" onClick={onPreviousClick}>
            Previous
          </button> */}
          <button className="drinkItem__footer--home" onClick={onHomeClick}>
            <img src={homeIcon} alt=""/>
          </button>
          {/* <button className="drinkItem__footer--forward" onClick={onNextClick}>
            Next
          </button> */}
        </div>
      </div>
    );
  }
}

const topping = topping => {
  if (!topping) {
    return;
  }
  let trs = [];
  topping.forEach(element => {
    for (const key in element) {
      trs.push(
        <tr key={key}>
          <td style={{ textAlign: 'left' }}>{key}</td>
          <td style={{ textAlign: 'right' }}>{element[key]}</td>
        </tr>
      );
    }
  });

  return (
    <table>
      <tbody>{trs}</tbody>
    </table>
  );
};

export default DrinkItem;
