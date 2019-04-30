import React from 'react';
// import LazyImage from './LazyImage';
// import svgPlaceHolder from '../img/preloader.svg';

const ListItem = props => {
  const { menu,onClick,lang } = props;
  return (
    <div className="listItem" onClick={onClick} >
      <div className="listItem__pic">
        <img src={menu.srcUrls.icon} alt=""/>
      </div>
      <div className="listItem__name"><p>{menu.name[lang]}</p></div>
    </div>
  );
};

export default ListItem;
