import React, { Component } from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';
// import easeupLogo from './img/easeupLogo.png';
import menu from './menu';
// import handUpAndDown from './img/001-finger_upAndDown.png';
// import handLeftRight from './img/002-finger_leftAndRight.png';
// import leftArrow from './img/four-dots-horizontally-aligned-as-a-line.png';
import './App.scss';
import languages from './langueages';
// import MenuSlide from './component/MenuSlide';
// import placeHolder from './img/preload2.svg';
// import LazyImage from './component/LazyImage';
import Main from './component/Main';
import Menu from './component/Menu';
import { domID } from './constant';
import DrinkItem from './component/DrinkItem';
import Announcement from './component/Announcement';
import Location from './component/Location';
// import Commnet from './component/Comment';
import Commment from './component/Comment';
import About from './component/About';

class App extends Component {
  constructor(props) {
    super(props);

    this.pageCache = {
      main: <Main onMenuClick={this.onDrinkMenuClick} />,
      drinkMenus: {}
    };
    this.drinkMenusMap = {};
    this.state = {
      lang: 'th',
      currentView: null,
      mainMenuSelected: domID.mainMeu.main,
      mainMenuChecked: false
    };
  }

  onMainMenuItemClick = e => {
    const id = e;
    this.setState(
      () => ({ mainMenuSelected: id, mainMenuChecked: false }),
      () => {
        switch (this.state.mainMenuSelected) {
          case domID.mainMeu.main:
            this.setState({ currentView: this.pageCache.main });
            break;
          case domID.mainMeu.announcement:
            if (!this.pageCache.announcement) {
              this.pageCache.announcement = <Announcement />;
            }
            this.setState({ currentView: this.pageCache.announcement });
            break;
          case domID.mainMeu.location:
            if (!this.pageCache.location) {
              this.pageCache.location = <Location />;
            }
            this.setState({ currentView: this.pageCache.location });
            break;
          case domID.mainMeu.comment:
            if (!this.pageCache.comment) {
              this.pageCache.comment = <Commment />;
            }
            this.setState({ currentView: this.pageCache.comment });
            break;
          case domID.mainMeu.about:
            if (!this.pageCache.about) {
              this.pageCache.about = <About />;
            }
            this.setState({ currentView: this.pageCache.about });
            break;
          default:
        }
      }
    );
    console.log('onMenuItem');
  };

  onDrinkMenuClick = menuId => {
    console.log('onMenuCLick ', menuId);
    const nextView = this.pageCache.drinkMenus[menuId];
    if (nextView) {
      this.setState({ currentView: nextView });
      return;
    }

    const menu = this.drinkMenusMap[menuId]

    this.pageCache.drinkMenus[menuId] = (
      <DrinkItem
        item={menu}
        lang={this.state.lang}
        onPreviousClick={ ()=> this.onPreviousClick(menu.number)}
        onHomeClick={ this.onHomeClick}
        onNextClick={ () => this.onNextClick(menu.number)}
      />
    );
    this.setState({ currentView: this.pageCache.drinkMenus[menuId] });
    return;
  };

  onHomeClick = () => {
    this.onMainMenuItemClick(domID.mainMeu.main);
  };

  onPreviousClick =(currentID) =>{
    console.log("onPreviousClick : " , currentID)
    this.onDrinkMenuClick(currentID - 1)
  }

  onNextClick =(currentID)=>{
    console.log("onNextClick : " , currentID)
    this.onDrinkMenuClick(currentID + 1)
  }

  onAppMenuClick = e => {
    this.setState({ mainMenuChecked: !this.state.mainMenuChecked });
    console.log('onAppMenuClick ', e);
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
          onItemClick={e => {
            this.onMainMenuItemClick(e.target.id);
          }}
        />
        {this.state.currentView}
      </div>
    );
  }
}

export default App;
