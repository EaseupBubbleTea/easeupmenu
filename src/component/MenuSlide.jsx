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

  const itemPrice = (i18nKey, price ,ounz) => {
    if (!price) {
      return <p />;
    }
    return (
      <p>
       {`${i18n(i18nKey)} ${price} ${i18n('bath')}`}
        <br />
        <span>({ounz} {i18n('ounce')})</span>
      </p>
    );
  };

  return (
    <div className="section" key={key}>
      <div className="slide">
        <div className="slideHeader">
          {key} #{itemNumber}
        </div>
        <LazyImage
          className={'menuItem'}
          svgPlaceHolder={placeHolder}
          srcUrls={srcUrls}
        />
      </div>
      <div className="slide">
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
            {itemPrice('smallCup', priceSmall , 16)}
            {itemPrice('largeCup', priceLarge ,20)}
          </p>
        </div>
      </div>
      <div className="slide">
        <div className="slideHeader">
          {key} #{itemNumber}
        </div>
        <div className="item-detail">
          <p className={additionalCss}>{dest}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
