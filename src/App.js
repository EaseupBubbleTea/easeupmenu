import React, { Component } from 'react';
import './App.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import easeupLogo from './img/easeupLogo.png'

class App extends Component {
  onLeave(origin, destination, direction) {
    // console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);
  }

  contents = [
    {
      name: "Signature ชานมไข่มุกต้นตำหรับ",
      number : 1,
      desc: `เพราะรสชาติและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา
    จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน
    นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp
    จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
      prices: { small: 40, large: 50 },
      menuCss: ["menuItem", "menuItem__signature"],
      detailCss: ["item-detail", "item-detail__signature"]
    },
    {
      name: "FreshYuZu เฟรชยูสุ",
      number : 2,
      desc: `
      เพื่อจะได้เครื่องดื่มที่มอบความสดชื่นทันทีในดื่มแรก ของเดือนเมษายน
      ทางร้านจึงเลือก ผลไม้ที่ตอบโจทย์ จนไปพบกับความเป็นเอกลักษณ์ของส้มยูสุ 
      ด้วยความหอมอโรม่าของส้ม บวกกับบับเบิ้ลสอดไส้น้ำลิ้นจี่ 
      จึงเป็นอีกแก้วที่พร้อมรับมือกับสงกรานต์ได้เป็นอย่างดี`,
      prices: { small: 60, large: 75 },
      menuCss: ["menuItem", "menuItem__freshYuZu"],
      detailCss: ["item-detail", "item-detail__freshYuZu"]
    },
    {
      name: "Oolong iced tea ชาอู่หลงเย็น",
      number : 3,
      desc: `ชาอู่หลง หรือ ชามังกรดำในภาษาจีน เป็นชากึ่งหมัก 
      ผ่านกระบวนการนวดเล็กน้อย ใช้เวลาไม่มากนัก มีกลิ่นหอม รสชาดชุ่มคอ 
      น้ำชามีสาร tannin ช่วยสลายไขมันในลำไส้ใหญ่ ช่วยทำให้สดชื่น 
      กระตุ้นการทำงานของระบบประสาทและหมุนเวียนโลหิต. 
      EaseUp คัดสรรใบชาคุณภาพจากไต้หวัน เพื่อสัมผัสแห่งอู่หลงที่แท้จริง`,
      prices: { small: 45, large: 55 },
      menuCss: ["menuItem", "menuItem__oolongIcedTea"],
      detailCss: ["item-detail", "item-detail__oolong"]
    },
    {
      name: "Iced Matcha Latte มัจฉะลาเต้",
      number : 4,
      desc: `มัจฉะที่ดี จะมีความขมฝาดน้อย แต่จะคงความเข้มข้นและหอมสดชื่น ของชาเขียวแท้สไตล์ญี่ปุ่น.`,
      prices: { small: 50, large: 60 },
      menuCss: ["menuItem", "menuItem__matchaLatte"],
      detailCss: ["item-detail", "item-detail__matchaLatte"]
    },
    {
      name: "Kuromitsu Milk Tea คุโรมิสึ",
      number : 5,
      desc: ``,
      prices: { small: 55, large: 65 },
      menuCss: ["menuItem", "menuItem__kuromitsu"],
      detailCss: ["item-detail", "item-detail__kuromitsu"]
    },
    {
      name: "Elegance Matcha เอลลิแกรนซ์มัจฉะ",
      number : 6,
      desc: `ตีมัจฉะสดๆด้วยมือแก้วต่อแก้ว`,
      prices: { small: 60, large: 70 },
      menuCss: ["menuItem", "menuItem__elegantMatcha"],
      detailCss: ["item-detail", "item-detail__elegantMatcha"]
    },
    {
      name: "Dark Choco Milk Tea ดาร์กช็อคโก้",
      number : 7,
      desc: `สัมผัสกับความเข้มข้นเต็มรูปแบบกับ ชานม+ดาร์กช็อคโก้`,
      prices: { small: 50, large: 60 },
      menuCss: ["menuItem", "menuItem__darkChoco"],
      detailCss: ["item-detail", "item-detail__darkChoco"]
    },

  ];

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
    this.contents.forEach((x) => {
      menus.push(this.slide(x));
    })
    return menus
  }

  notification = () => {
    return (
      <div className="section">
        <div className="slide">
          <div className={"notification"}>
            <p>ร้านหยุดวัน <br /> อังคาร 2 - พุธ 10 <br />เมษายน <br/>2019</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <ReactFullpage
        anchors={["firstPage", "secondPage", "thirdPage"]}
        sectionsColor={["rgba(40, 44, 52, 0.3)", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"]}
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
