import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

import {
  EARTH_PORN, EXPOSURE_PORN, WALLPAPERS, LANDSCAPE_ASTRO,
  SUB, HOMEPAGE_BG_IMAGES
} from '../constants'

export default class App extends Component {
  renderContainer(category) {

    console.log('====================================');
    console.log(SUB + category);
    console.log('====================================');
    return (
      <Link to={SUB + category} className="ImageContainer">
        <img src={HOMEPAGE_BG_IMAGES[category]} className="BgImage" />
        <div className="BgTextContainer">
          <p className="Label">{SUB}{category}</p>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="ImagesRow">
          {this.renderContainer(EARTH_PORN)}
          {this.renderContainer(EXPOSURE_PORN)}
        </div>
        <div className="ImagesRow">
          {this.renderContainer(WALLPAPERS)}
          {this.renderContainer(LANDSCAPE_ASTRO)}
        </div>
      </div>
    );
  }
}
