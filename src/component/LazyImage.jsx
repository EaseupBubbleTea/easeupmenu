import React, { Component } from 'react';
import easeUpLogo from '../img/easeupLogo.png';
import PropTypes from 'prop-types';

const SMALL = 'small';
const LARGE = 'large';
class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedSmall: false,
      loadedLarge: false,
      smallError: false,
      largeError: false,
      smallImage: null,
      largeImage: null
    };
    this.smallImg = new Image();
    this.largeImg = new Image();
  }

  componentDidMount() {
    const { srcUrls } = this.props;

    this.smallImg.onerror = () => {
      this.setState({ smallError: true });
    };
    this.largeImg.onerror = () => {
      this.setState({ largeError: true });
    };

    this.smallImg.onload = () => {
      this.setState(
        () => {
          return { smallImage: this.smallImg, loadedSmall: true };
        },
        () => {
          this.largeImg.src = srcUrls[LARGE];
        }
      );
    };

    this.largeImg.onload = () => {
      this.setState(() => {
        return { largeImage: this.largeImg, loadedLarge: true };
      });
    };

    this.smallImg.src = srcUrls[SMALL];
  }
  
  //   'menuItem', 'menuItem__signature'
  render() {
    const { className, svgPlaceHolder } = this.props;

    if (this.state.loadedLarge) {
      return (
        <img
        src={this.state.largeImage.src}
          className={className}
          style={{ ...this.props.style }}
          alt=""
        />
      );
    }
    if (this.state.loadedSmall) {
      return (
        <img
        src={this.state.smallImage.src}
          className={className}
          style={{ ...this.props.style }}
          alt=""
        />
      );
    }
    if (this.state.smallError || this.state.largeError) {
      return (
        <img
        src={window.location.origin + easeUpLogo}
          className={className}
          style={{ ...this.props.style }}
          alt=""
        />
      );
    }

    return (
      <img
        src={`url(${window.location.origin + svgPlaceHolder})`}
        className={className}
        style={{ ...this.props.style }}
        alt=""
      />
    );
  }
}

LazyImage.propTypes = {
  srcUrls: PropTypes.object,
  className: PropTypes.string,
  svgPlaceHolder: PropTypes.any
};

export default LazyImage;
