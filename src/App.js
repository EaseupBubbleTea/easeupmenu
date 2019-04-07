import React, { Component } from 'react';
import './App.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import easeupLogo from './img/easeupLogo.png'
import menu from './menu'

class App extends Component {
  onLeave(origin, destination, direction) {
    // console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);
  }

  slide = (content) => {
    const menuCss = content["menuCss"].join(' ')
    const additionalCss = content["detailCss"].join(' ')
    const dest = content["desc"]
    const priceSmall = content["prices"]["small"]
    const priceLarge = content["prices"]["large"]
    const key = content["name"]
    const itemNumber = content["number"]
    return (
      <div className="section" key={key}>
        <div className="slide">
          <div className="slideHeader">{key} #{itemNumber}</div>
          <div className={menuCss}>
          </div>
        </div>
        <div className="slide">
          <div className="slideHeader">{key} #{itemNumber}</div>
          <div className="item-detail">
            <p className={additionalCss}>
              {dest}
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="slideHeader">{key} #{itemNumber}</div>
          <div className="item-price">
            <h1>ราคา</h1>
            <p>เล็ก {priceSmall} บาท</p>
            <p>ใหญ่ {priceLarge} บาท</p>
          </div>
        </div>
      </div>)
  }
  slides = () => {
    let menus = []
    menu.forEach((x) => {
      menus.push(this.slide(x));
    })
    return menus
  }

  notification = () => {
    return (
      [
        <div className="section" key="thankyouSlide">
          <div className="slide">
            <div className={"notification"}>
              <p>ขอบพระคุณทุกท่านที่มาอุดหนุนค่ะ</p>
            </div>
          </div>
        </div>,
        <div className="section" key="holiday">
          <div className="slide">
            <div className={"notification"}>
              <p>ร้านหยุดวัน <br /> อังคาร 9 - พุธ 10 <br />เมษายน <br />2019</p>
            </div>
          </div>
        </div>
      ]
    )
  }

  render() {
    return (
      <ReactFullpage
        anchors={["firstPage", "secondPage", "thirdPage"]}
        sectionsColor={["rgba(40, 44, 52, 0.3)", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"]}
        // scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1 welcome">
                <img src={easeupLogo} alt="EaseUp" ></img>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  เลื่อนลง
                </button>
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
