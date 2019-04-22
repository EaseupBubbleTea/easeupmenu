import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import easeupLogo from './img/easeupLogo.png';
import menu from './menu';
import handUpAndDown from './img/001-finger_upAndDown.png';
import handLeftRight from './img/002-finger_leftAndRight.png';
import leftArrow from './img/four-dots-horizontally-aligned-as-a-line.png';
import './App.scss';
import languages from './langueages';
import MenuSlide from './component/MenuSlide';
import placeHolder from './img/preload2.svg';
import LazyImage from './component/LazyImage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'th'
    };
  }
  onLeave(origin, destination, direction) {
    // console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);
  }

  slides = () => {
    let menus = [];
    menu.forEach(x => {
      const key = this.state.lang === 'th' ? x['name']['th'] : x['name']['eng'];
      menus.push(
        <MenuSlide
          key={key}
          content={x}
          lang={this.state.lang}
          i18n={this.text}
        />
      );
    });
    return menus;
  };

  notification = () => {
    return [
      <div className="section" key="thankyouSlide">
        <div className="slide">
          <div className={'notification'}>
            <p>
              ขอบพระคุณทุกท่านที่มาอุดหนุนค่ะ
              <br />
              <br />
              0970931666
            </p>
            <p>แนะนำติชมทางร้านแบบไม่เปิดเผยตัวตน</p>
            <br />
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhrP3_LibZvuPd-Q_t12lISio4kzllkPgzBd_vGkf7FwBURA/viewform?usp=sf_link">
              {this.text('commentUs')}
            </a>
          </div>
        </div>
      </div>
    ];
  };

  onLangChanged = e => {
    this.setState({
      lang: e.currentTarget.value
    });
  };

  text = key => {
    return languages[key][this.state.lang];
  };

  render() {
    let sectionColor = [
      'rgba(40, 44, 52, 0.3)', // Landing Page
      'rgba(40, 44, 52, 0.3)' // Usage Page
    ];
    menu.forEach(x => {
      sectionColor.push('#282c34'); // Menu Pages
    });
    sectionColor.push('#282c34'); // Thank you Page

    return (
      <ReactFullpage
        // anchors={['firstPage', 'secondPage', 'thirdPage']}
        navigation={true}
        navigationPosition={'left'}
        controlArrows={false}
        slidesNavigation={true}
        sectionsColor={sectionColor}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1 welcome">
                <img src={easeupLogo} alt="EaseUp" />
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  {this.text('slideDown')}
                </button>

                <div className="options">
                  <input
                    name="option"
                    type="radio"
                    id="click"
                    className="hide"
                    value="th"
                    checked={this.state.lang === 'th'}
                    onChange={this.onLangChanged}
                  />
                  <label htmlFor="click">ไทย</label>

                  <input
                    name="option"
                    type="radio"
                    id="touch"
                    className="hide"
                    value="eng"
                    checked={this.state.lang === 'eng'}
                    onChange={this.onLangChanged}
                  />
                  <label htmlFor="touch">English</label>
                </div>
              </div>

              <div className="section" key="appusage">
                <div className="slide">
                  <div className={'usage'}>
                    <div>
                      <img
                        src={handUpAndDown}
                        alt={this.text('slideUpAndDown')}
                      />
                    </div>
                    <div className="usage__leftArrow">
                      <img src={leftArrow} alt="<-" />
                    </div>
                    <div>{this.text('showMenu')}</div>
                    <div>
                      <img src={handLeftRight} alt="เลื่อนซ้ายขวา" />
                    </div>
                    <div className="usage__leftArrow">
                      <img src={leftArrow} alt="<-" />
                    </div>
                    <div>{this.text('showPrice')}</div>
                    <button
                      style={{
                        gridArea: '3 / 1 / span 1 / span 3',
                        fontSize: '1.2rem'
                      }}
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      {this.text('scrollDownForMenu')}
                    </button>
                  </div>
                </div>
                <div className="slide">
                  <div className="slideHeader">menu number</div>
                  <div className="item-price" style={{ color: '#222' }}>
                    <p>
                      <b>{this.text('menuName')}</b>
                      <br />
                      <span>({this.text('menuthDesc')})</span>
                    </p>
                    <p>
                      {this.text('smallCup')} # {this.text('bath')}
                      <br />
                      <span>(16 {this.text('ounce')})</span>
                    </p>
                    <p>
                      {this.text('largeCup')} # {this.text('bath')}
                      <br />
                      <span>(20 {this.text('smallCup')})</span>
                    </p>
                  </div>
                </div>
                <div className="slide">
                  <div className="slideHeader">menu number</div>
                  <div className="item-detail" style={{ color: '#222' }}>
                    <p>{this.text('detailOfTheMenu')}</p>
                  </div>
                </div>
              </div>
              <div className="section" key="toppingBackground">
                <div className="slide">
                  <LazyImage
                    className={'toppingBackground'}
                    svgPlaceHolder={placeHolder}
                    srcUrls={{
                      large: 'https://i.imgur.com/YAUBg9X.jpg',
                      small: 'https://i.imgur.com/xpo8wrS.jpg'
                    }}
                  />
                  <div className="toppingDesc">
                    <div>
                      <div>บุก <br/>+<br/> 10 บาท</div>
                      <div>อโล <br/>+<br/> 10 บาท</div>
                      <div>มุก <br/>+<br/> 5 บาท</div>
                    </div>
                  </div>
                </div>
              </div>
              {this.slides()}
              {this.notification()}
            </div>
          );
        }}
      />
    );
  }
}

export default App;
