import React, { Component } from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';
// import easeupLogo from './img/easeupLogo.png';
import menu from './menu';
// import handUpAndDown from './img/001-finger_upAndDown.png';
// import handLeftRight from './img/002-finger_leftAndRight.png';
// import leftArrow from './img/four-dots-horizontally-aligned-as-a-line.png';
import './App.scss';
import languages from './langueages';
import MenuSlide from './component/MenuSlide';
// import placeHolder from './img/preload2.svg';
// import LazyImage from './component/LazyImage';
import Main from './component/Main'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lang: 'th',
      currentView: null,
      loadedPage: {"main": <Main onMenuClick={this.onMenuClick} />}
    };
  }

  onMenuClick = (menuId) =>{
    console.log(menuId)
  }

  componentDidMount = () =>{
    if (!this.state.currentView){
      this.setState({currentView: this.state.loadedPage["main"]})
    }
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

  text = key => {
    return languages[key][this.state.lang];
  };

  render() {
    return <div className="appContainer">{this.state.currentView}</div>;
  }
}

export default App;
