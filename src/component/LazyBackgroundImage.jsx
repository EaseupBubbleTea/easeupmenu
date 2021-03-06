import React, { Component } from 'react';
import easeUpLogo from '../img/easeupLogo.png';
import PropTypes from 'prop-types';

const SMALL = 'small';
const LARGE = 'large';
class LazyBackgroundImage extends Component {
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
          return { smallImage: this.smallImg , loadedSmall: true };
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

    if(this.state.loadedLarge){
        return (
            <div
              className={className}
              style={{
                backgroundImage: `url(${this.state.largeImage.src})`,
              }}
            />
          );
    }
    if(this.state.loadedSmall){
        return (
            <div
              className={className}
              style={{
                backgroundImage: `url(${this.state.smallImage.src})`,
              }}
            />
          );
    }
    if (this.state.smallError || this.state.largeError) {
        return (
          <div
            className={className}
            style={{
              backgroundImage: `url(${window.location.origin + easeUpLogo})`,
              backgroundSize: 'contain'
            }}
          />
        );
      }

    return (
      <div
        className={className}
        style={{...{
          backgroundImage: `url(${window.location.origin + svgPlaceHolder})`,
          backgroundSize: 'initial'
        },...this.props.style}}
      />
    );
  }
}

LazyBackgroundImage.propTypes = {
  srcUrls: PropTypes.object,
  className: PropTypes.string,
  svgPlaceHolder: PropTypes.any,
};

export default LazyBackgroundImage;
