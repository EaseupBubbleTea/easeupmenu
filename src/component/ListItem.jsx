import React from 'react';
import LazyImage from './LazyImage';
import svgPlaceHolder from '../img/preloader.svg';

const ListItem = props => {
  const { menu,onClick } = props;
  return (
    <div className="listItem" onClick={onClick} >
      <div className="listItem__pic">
        <img src={menu.srcUrls.icon}/>
      </div>
      <div className="listItem__name">{menu.name.eng}</div>
    </div>
  );
};

export default ListItem;
