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
              <div className="section">
                <div className="slide">
                  <div className="menuItem menuItem__greentea">
                  </div>
                </div>
                <div className="slide">
                  <div className="item-detail">
                    <p className="item-detail item-detail__signature">
                      เพราะรสชาดและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา
                      จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน
                      นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp
                      จนได้ชานมคุณภาพอย่างที่เราภูมิใจ
                    </p>
                  </div>
                </div>
                <div className="slide">
                  <div className="item-price">
                    <h1>ราคา</h1>
                    <p>เล็ก 40 บาท</p>
                    <p>ใหญ่ 50 บาท</p>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>ชาเผือก</h3>
                </div>
                <div className="slide">
                  <h3>ราคา</h3>
                  <h2>เล็ก 40</h2>
                  <h2>กลาง 50</h2>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
