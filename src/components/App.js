import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

import {
  EARTH_PORN, EXPOSURE_PORN, WALLPAPERS, LANDSCAPE_ASTRO, SUB
} from '../constants'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="BoxTop">
          <Link to="/r/EarthPorn" className="BoxTopLeft">
            <img src="http://i.imgur.com/SIk9LkV.jpg" className="BgImage" />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{EARTH_PORN}</p>
            </div>
          </Link>
          <Link to="/r/ExposurePorn" className="BoxTopRight">
            <img src="http://i.imgur.com/lYzMfJJ.jpg" className="BgImage" />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{EXPOSURE_PORN}</p>
            </div>
          </Link>
        </div>
        <div className="BoxBottom">
          <Link to="/r/Wallpapers" className="BoxBottomLeft">
            <img src="http://i.imgur.com/sXNLRVW.jpg" className="BgImage" />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{WALLPAPERS}</p>
            </div>
          </Link>
          <Link to="/r/LandscapeAstro" className="BoxBottomRight">
            <img src="https://i.imgur.com/1kJoNwG.jpg" className="BgImage" />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{LANDSCAPE_ASTRO}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
