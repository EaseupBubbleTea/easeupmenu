import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import easeupLogo from './img/easeupLogo.png';
import menu from './menu';
import handUpAndDown from './img/001-finger_upAndDown.png';
import handLeftRight from './img/002-finger_leftAndRight.png';
import leftArrow from './img/four-dots-horizontally-aligned-as-a-line.png';
import LazyImage from './LazyImage';
import placeHolder from './img/preload2.svg';
import './App.scss';
import languages from './langueages';

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

  slide = content => {
    // const menuCss = content["menuCss"].join(' ')
    const srcUrls = content['srcUrls'];
    const additionalCss = content['detailCss'].join(' ');
    const dest =
      this.state.lang === 'th' ? content['desc']['th'] : content['desc']['eng'];
    const priceSmall = content['prices']['small'];
    const priceLarge = content['prices']['large'];
    const key =
      this.state.lang === 'th' ? content['name']['th'] : content['name']['eng'];
    const itemNumber = content['number'];
    return (
      <div className="section" key={key}>
        <div className="slide">
          <div className="slideHeader">
            {key} #{itemNumber}
          </div>
          {/*<div className={menuCss}></div>*/}
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
          <div className="item-detail">
            <p className={additionalCss}>{dest}</p>
          </div>
        </div>
        <div className="slide">
          <div className="slideHeader">
            {key} #{itemNumber}
          </div>
          <div className="item-price">
            <p>
              <b>{key}</b>
              <br />
              (เมนูที่ {itemNumber})
            </p>

            <p>
              แก้วเล็ก {priceSmall} บาท
              <br />
              <span>(16 ออนซ์)</span>
            </p>
            <p>
              แก้วใหญ่ {priceLarge} บาท
              <br />
              <span>(20 ออนซ์)</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  slides = () => {
    let menus = [];
    menu.forEach(x => {
      menus.push(this.slide(x));
    });
    return menus;
  };

  notification = () => {
    return [
      // <div className="section" key="holiday">
      //   <div className="slide">
      //     <div className={"notification"}>
      //       <p>ร้านหยุดวัน <br /> อังคาร 9 - พุธ 10 <br />เมษายน <br />2019</p>
      //     </div>
      //   </div>
      // </div>,
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
              {this.text("commentUs")}
            </a>
          </div>
        </div>
      </div>
    ];
  };

  onLangChanged = (e) =>{
    this.setState({
      lang: e.currentTarget.value
      });
  }

  text = (key) =>{
    return languages[key][this.state.lang]
  }

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
                  {this.text("slideDown")}
                </button>

                <div>
                  <div>
                    <input type="radio" name="lang" value="eng" onChange={this.onLangChanged} checked={this.state.lang === 'eng'}/>
                    <span>English</span>
                  </div>
                  <div>
                    <input type="radio" name="lang" value="th"  onChange={this.onLangChanged} checked={this.state.lang === 'th'}/>
                    <span>ไทย</span>
                  </div>
                </div>
              </div>
              <div className="section" key="appusage">
                {/* <div className="slide"> */}
                <div className={'usage'}>
                  <div>
                    <img src={handUpAndDown} alt={this.text("slideUpAndDown")} />
                  </div>
                  <div className="usage__leftArrow">
                    <img src={leftArrow} alt="<-" />
                  </div>
                  <div>{this.text("showMenu")}</div>
                  <div>
                    <img src={handLeftRight} alt="เลื่อนซ้ายขวา" />
                  </div>
                  <div className="usage__leftArrow">
                    <img src={leftArrow} alt="<-" />
                  </div>
                  <div>{this.text("showPrice")}</div>
                  <button
                    style={{
                      gridArea: '3 / 1 / span 1 / span 3'
                    }}
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    {this.text("scrollDownForMenu")}
                  </button>
                </div>

                {/* </div> */}
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
