import React from 'react';
import { domID, LANG } from '../constant';
const AppMenu = props => {
  const { selected, onItemClick, checked, onMenuClick, onLangSelect,lang } = props;

  const mainMenu = [
    'mainMenu__link',
    selected === domID.mainMeu.main ? 'mainMenu__link--selected' : ''
  ].join(' ');

  const langEng = [
    'mainMenu__link',
    lang === LANG.eng ? 'mainMenu__link--selected' : ''
  ].join(' ');

  const langTh = [
    'mainMenu__link',
    lang === LANG.th ? 'mainMenu__link--selected' : ''
  ].join(' ');

  // const announcement = [
  //   'mainMenu__link',
  //   selected === domID.mainMeu.announcement ? 'mainMenu__link--selected' : ''
  // ].join(' ');
  // const location = [
  //   'mainMenu__link',
  //   selected === domID.mainMeu.location ? 'mainMenu__link--selected' : ''
  // ].join(' ');
  // const comment = [
  //   'mainMenu__link',
  //   selected === domID.mainMeu.comment ? 'mainMenu__link--selected' : ''
  // ].join(' ');
  // const about = [
  //   'mainMenu__link',
  //   selected === domID.mainMeu.about ? 'mainMenu__link--selected' : ''
  // ].join(' ');

  return (
    <div className="mainMenu">
      <input
        type="checkbox"
        className="mainMenu__checkbox"
        id="mainMenu-toggle"
        checked={checked}
        onChange={onMenuClick}
      />
      <label htmlFor="mainMenu-toggle" className="mainMenu__button">
        <span className="mainMenu__icon">&nbsp;</span>
      </label>
      <div className="mainMenu__background">&nbsp;</div>

      <nav className="mainMenu__nav">
        <ul className="mainMenu__list">
          <li className="mainMenu__item mainMenu__item--languages">
            <button className={langEng} onClick={() => onLangSelect(LANG.eng)}>English</button>
            <button className={langTh} onClick={() => onLangSelect(LANG.th)}>ไทย</button>
          </li>
          <li className="mainMenu__item" onClick={onItemClick}>
            <button className={mainMenu} id={domID.mainMeu.main}>
              Menu
            </button>
          </li>
          {/* <li className="mainMenu__item">
            <button className={announcement} id={domID.mainMeu.announcement}  onClick={onItemClick}>
              announcement
            </button>
          </li>
          <li className="mainMenu__item">
            <button className={location} id={domID.mainMeu.location}  onClick={onItemClick}>
              Location
            </button>
          </li>
          <li className="mainMenu__item">
            <button className={comment} id={domID.mainMeu.comment}  onClick={onItemClick}>
              Comment
            </button>
          </li>
          <li className="mainMenu__item">
            <button className={about} id={domID.mainMeu.about}  onClick={onItemClick}>
              About
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default AppMenu;
