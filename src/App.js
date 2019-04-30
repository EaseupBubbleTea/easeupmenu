import React, { Component } from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';
// import easeupLogo from './img/easeupLogo.png';
import menu from './menu';
// import leftArrow from './img/four-dots-horizontally-aligned-as-a-line.png';
import './App.scss';
import languages from './langueages';
// import MenuSlide from './component/MenuSlide';
// import placeHolder from './img/preload2.svg';
// import LazyImage from './component/LazyImage';
import Main from './component/Main';
// import Menu from './component/AppMenu';
import { domID } from './constant';
import DrinkItem from './component/DrinkItem';
import Announcement from './component/Announcement';
import Location from './component/Location';
// import Commnet from './component/Comment';
import Commment from './component/Comment';
import About from './component/About';
import AppMenu from './component/AppMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.drinkMenusMap = {};
    this.state = {
      lang: 'th',
      currentView: null,
      _currentViewId: null,
      mainMenuSelected: domID.mainMeu.main,
      mainMenuChecked: false
    };
    this.pageCache = {
      main: <Main onMenuClick={this.onDrinkMenuClick} lang={this.state.lang} />,
      drinkMenus: {}
    };
  }

  onMainMenuItemClick = e => {
    const id = e;
    this.setState(
      () => ({ mainMenuSelected: id, mainMenuChecked: false }),
      () => {
        switch (this.state.mainMenuSelected) {
          case domID.mainMeu.main:
            this.setState({
              currentView: this.pageCache.main,
              _currentViewId: domID.mainMeu.main
            });
            break;
          case domID.mainMeu.announcement:
            if (!this.pageCache.announcement) {
              this.pageCache.announcement = <Announcement />;
            }
            this.setState({
              currentView: this.pageCache.announcement,
              _currentViewId: domID.mainMeu.announcement
            });
            break;
          case domID.mainMeu.location:
            if (!this.pageCache.location) {
              this.pageCache.location = <Location />;
            }
            this.setState({
              currentView: this.pageCache.location,
              _currentViewId: domID.mainMeu.location
            });
            break;
          case domID.mainMeu.comment:
            if (!this.pageCache.comment) {
              this.pageCache.comment = <Commment />;
            }
            this.setState({
              currentView: this.pageCache.comment,
              _currentViewId: domID.mainMeu.comment
            });
            break;
          case domID.mainMeu.about:
            if (!this.pageCache.about) {
              this.pageCache.about = <About />;
            }
            this.setState({
              currentView: this.pageCache.about,
              _currentViewId: domID.mainMeu.about
            });
            break;
          default:
        }
      }
    );
  };

  onLangSelect = lang => {
    this.setState(
      () => ({ lang: lang }),
      () => {
        switch (this.state._currentViewId) {
          case domID.mainMeu.main: {
            this.pageCache.main = (
              <Main
                onMenuClick={this.onDrinkMenuClick}
                lang={this.state.lang}
              />
            );
            this.setState({ currentView: this.pageCache.main });
            break;
          }

          default: {
            let x = this.pageCache.drinkMenus[this.state._currentViewId];
            if (x) {
              const menu = this.drinkMenusMap[this.state._currentViewId];
              this.pageCache.drinkMenus[this.state._currentViewId] = (
                <DrinkItem
                  item={menu}
                  lang={this.state.lang}
                  onPreviousClick={() => this.onPreviousClick(menu.number)}
                  onHomeClick={this.onHomeClick}
                  onNextClick={() => this.onNextClick(menu.number)}
                />
              );
              this.setState({ currentView: this.pageCache.drinkMenus[this.state._currentViewId] });
              break;
            }
          }
        }
      }
    );
  };
  onDrinkMenuClick = menuId => {
    const nextView = this.pageCache.drinkMenus[menuId];
    if (nextView) {
      this.setState({ currentView: nextView, _currentViewId: menuId });
      return;
    }

    const menu = this.drinkMenusMap[menuId];

    this.pageCache.drinkMenus[menuId] = (
      <DrinkItem
        item={menu}
        lang={this.state.lang}
        onPreviousClick={() => this.onPreviousClick(menu.number)}
        onHomeClick={this.onHomeClick}
        onNextClick={() => this.onNextClick(menu.number)}
      />
    );
    this.setState({
      currentView: this.pageCache.drinkMenus[menuId],
      _currentViewId: menuId
    });
    return;
  };

  onHomeClick = () => {
    this.onMainMenuItemClick(domID.mainMeu.main);
  };

  onPreviousClick = currentID => {
    this.onDrinkMenuClick(currentID - 1);
  };

  onNextClick = currentID => {
    this.onDrinkMenuClick(currentID + 1);
  };

  onAppMenuClick = e => {
    this.setState({ mainMenuChecked: !this.state.mainMenuChecked });
  };

  componentDidMount = () => {
    if (!this.state.currentView) {
      this.setState({
        currentView: this.pageCache.main,
        _currentViewId: domID.mainMeu.main
      });
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
        <AppMenu
          selected={this.state.mainMenuSelected}
          onMenuClick={this.onAppMenuClick}
          checked={this.state.mainMenuChecked}
          onItemClick={e => {
            this.onMainMenuItemClick(e.target.id);
          }}
          onLangSelect={this.onLangSelect}
          lang={this.state.lang}
        />
        {this.state.currentView}
        {/* <Main onMenuClick={this.onDrinkMenuClick} lang={this.state.lang} /> */}
      </div>
    );
  }
}

export default App;
