import React, { Component } from 'react';
import menu from '../menu';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount = () => {
    let menus = [];
    const { onMenuClick } = this.props;
    menu.forEach(x => {
      menus.push(<ListItem menu={x} onClick={() => onMenuClick(x.number)} key={x.number} />);
    });
    this.setState({ menus });
  };

  render() {
    return <div className="mainPage">
    {this.state.menus}</div>;
  }
}

Main.propTypes = {
  onMenuClick: PropTypes.func
};

export default Main;
