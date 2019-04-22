import React from 'react';
import LazyImage from './LazyImage';
import placeHolder from '../img/preload2.svg';

const MenuSlide = props => {
  const { content, lang, i18n } = props;
  const srcUrls = content['srcUrls'];
  const additionalCss = content['detailCss'].join(' ');
  let dest = content['desc']['th'];
  if (lang === 'eng' && content['desc']['eng']) {
    dest = content['desc']['eng'];
  }

  const priceSmall = content['prices']['small'];
  const priceLarge = content['prices']['large'];
  const key = lang === 'th' ? content['name']['th'] : content['name']['eng'];
  const itemNumber = content['number'];
  const toppingList = content['topping'];

  const itemPrice = (i18nKey, price, ounz) => {
    const key = `${i18nKey}${price}${ounz}`;
    if (!price) {
      return <p key={key} />;
    }
    return (
      <p key={key}>
        {`${i18n(i18nKey)} ${price} ${i18n('bath')}`}
        <br />
        <span>
          ({ounz} {i18n('ounce')})
        </span>
      </p>
    );
  };

  return (
    <div className="section" key={key}>
      <Slide>
        <div className="slideHeader">
          {key} #{itemNumber}
        </div>
        <LazyImage
          className={'menuItem'}
          svgPlaceHolder={placeHolder}
          srcUrls={srcUrls}
        />
      </Slide>
      <Slide>
        <div className="slideHeader">
          {key} #{itemNumber}
        </div>
        <div className="item-price">
          <p>
            <b>{key}</b>
            <br />
            <span>
              ({i18n('menuth')} {itemNumber})
            </span>
          </p>
          {itemPrice('smallCup', priceSmall, 16)}
          {itemPrice('largeCup', priceLarge, 20)}
        </div>
      </Slide>
      {toppingList && (
        <Slide>
          <div className="slideHeader">
            {key} #{itemNumber}
          </div>
          <div className="toppingListContainer">
            <p>
              <b>Topping</b>
            </p>
            <br />
            {topping(content['topping'])}
          </div>
        </Slide>
      )}
      <Slide>
        <div className="slideHeader">
          {key} #{itemNumber}
        </div>
        <div className="item-detail">
          <p className={additionalCss}>{dest}</p>
        </div>
      </Slide>
    </div>
  );
};

const Slide = props => {
  const className = props.className ? props.className : '';

  return <div className={`slide ${className}`}>{props.children}</div>;
};

const topping = topping => {
  if (!topping) {
    return;
  }
  let trs = [];
  topping.forEach(element => {
    for (const key in element) {
      trs.push(
        <tr key={key}>
          <th>{key}</th>
          <th style={{ textAlign: 'right' }}>{element[key]}</th>
        </tr>
      );
    }
  });

  return (
    <table className="toppingListContainer__table">
      <tbody>{trs}</tbody>
    </table>
  );
};

export default MenuSlide;
