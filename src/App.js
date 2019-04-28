import React, { Component } from "react";
// import ReactFullpage from '@fullpage/react-fullpage';
// import easeupLogo from './img/easeupLogo.png';
import menu from "./menu";
// import handUpAndDown from './img/001-finger_upAndDown.png';
// import handLeftRight from './img/002-finger_leftAndRight.png';
// import leftArrow from './img/four-dots-horizontally-aligned-as-a-line.png';
import "./App.scss";
import languages from "./langueages";
import MenuSlide from "./component/MenuSlide";
// import placeHolder from './img/preload2.svg';
// import LazyImage from './component/LazyImage';
import Main from "./component/Main";
import Menu from "./component/Menu";
import { domID } from "./constant";
import DrinkItem from "./component/DrinkItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.pageCache = {
      main: <Main onMenuClick={this.onDrinkMenuClick} />,
      drinkMenus: {}
    };
    this.drinkMenusMap = {};
    this.state = {
      lang: "th",
      currentView: null,
      mainMenuSelected: domID.mainMeu.main,
      mainMenuChecked: false
    };
  }

  onMainMenuItemClick = e => {
    const id = e.target.id;
    this.setState(
      () => ({ mainMenuSelected: id, mainMenuChecked: false }),
      () => {
        switch (this.state.mainMenuSelected) {
          case domID.mainMeu.main:
            this.setState({ currentView: this.pageCache.main });
            break;
          default:
        }
      }
    );
    console.log("onMenuItem");
  };

  onDrinkMenuClick = menuId => {
    console.log("onMenuCLick ", menuId);
    const nextView = this.pageCache.drinkMenus[menuId];
    if (nextView) {
      this.setState({ currentView: nextView });
      return;
    }
    const item = this.drinkMenusMap[menuId];
    const name = item.name.eng;
    const imgSmallUrl = item.srcUrls.small;
    const imgBigUrl = item.srcUrls.large;

    this.pageCache.drinkMenus[menuId] = (
      <DrinkItem
        number={item.number}
        name={name}
        imgSmallUrl={imgSmallUrl}
        imgBigUrl={imgBigUrl}
      />
    );
    this.setState({ currentView: this.pageCache.drinkMenus[menuId] });
    return;
  };

  onAppMenuClick = e => {
    this.setState({ mainMenuChecked: !this.state.mainMenuChecked });
    console.log("onAppMenuClick ", e);
  };

  componentDidMount = () => {
    if (!this.state.currentView) {
      this.setState({ currentView: this.pageCache.main });
    }
    menu.forEach(x => {
      this.drinkMenusMap[x.number] = x;
    });
  };

  // componentDidUpdate = (prevProps, prevState, snapshot) => {
  //   // if (prevState.mainMenuSelected !== this.state.mainMenuSelected) {
  //     switch (this.state.mainMenuSelected) {
  //       case domID.mainMeu.main:
  //         this.setState({ currentView: this.pageCache.main });
  //         break;
  //       default:
  //     }
  //   // }
  // };

  text = key => {
    return languages[key][this.state.lang];
  };

  render() {
    return (
      <div className="appContainer">
        <Menu
          selected={this.state.mainMenuSelected}
          onMenuClick={this.onAppMenuClick}
          checked={this.state.mainMenuChecked}
          onItemClick={this.onMainMenuItemClick}
        />
        {this.state.currentView}
      </div>
    );
  }
}

export default App;
