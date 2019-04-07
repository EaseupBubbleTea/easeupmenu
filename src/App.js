import React, { Component } from 'react';
import './App.scss';
import ReactFullpage from '@fullpage/react-fullpage';

class App extends Component {
  onLeave(origin, destination, direction) {
    // console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);
  }

  contents = [
    {
      name: "signature",
      desc: `เพราะรสชาดและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา
    จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน
    นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp
    จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
      prices: { small: 40 , large: 50 },
      menuCss: ["menuItem", "menuItem__greentea"],
      detailCss: ["item-detail", "item-detail__signature"]
    },
    {
      name: "signature",
      desc: `เพราะรสชาดและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา\
    จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน\
    นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp\
    จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
      prices: { small: 40 , large: 50 },
      menuCss: ["menuItem", "menuItem__greentea"],
      detailCss: ["item-detail", "item-detail__signature"]
    },
    {
      name: "signature",
      desc: `เพราะรสชาดและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา\
    จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน\
    นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp\
    จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
      prices: { small: 40 , large: 50 },
      menuCss: ["menuItem", "menuItem__greentea"],
      detailCss: ["item-detail", "item-detail__signature"]
    },
    {
      name: "signature",
      desc: `เพราะรสชาดและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา\
    จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน\
    นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp\
    จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
      prices: { small: 40 , large: 50 },
      menuCss: ["menuItem", "menuItem__greentea"],
      detailCss: ["item-detail", "item-detail__signature"]
    },

  ];

  slide = (content) => {
    const menuCss = content["menuCss"].join(' ')
    const additionalCss = content["detailCss"].join(' ')
    const dest = content["desc"]
    const priceSmall = content["prices"]["small"]
    const priceLarge = content["prices"]["large"]
    return (
      <div className="section">
        <div className="slide">
          <div className={menuCss}>
          </div>
        </div>
        <div className="slide">
          <div className="item-detail">
            <p className={additionalCss}>
              {dest}
            </p>
          </div>
        </div>
        <div className="slide">
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
    this.contents.forEach((x) => {
      menus.push(this.slide(x));
    })
    return menus
  }



  render() {
    return (
      <ReactFullpage
        anchors={["firstPage", "secondPage", "thirdPage"]}
        sectionsColor={["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"]}
        // scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>Easeup</h3>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Move down
                </button>
              </div>
              {this.slides()}
            </div>
          );
        }}
      />
    );
  }
}

export default App;
