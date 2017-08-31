import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

import {
  EARTH_PORN, EXPOSURE_PORN, WALLPAPERS, LANDSCAPE_ASTRO,
  SUB, HALF_WIDTH, FULL_WIDTH, HALF_HEIGHT, FULL_HEIGHT
} from '../constants'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="BoxTop" style={{ width: FULL_WIDTH, height: HALF_HEIGHT}}>
          <Link to="/r/EarthPorn" className="BoxTopLeft" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }}>
            <img src="http://i.imgur.com/SIk9LkV.jpg" className="BgImage" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }} />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{EARTH_PORN}</p>
            </div>
          </Link>
          <Link to="/r/ExposurePorn" className="BoxTopRight" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }}>
            <img src="http://i.imgur.com/lYzMfJJ.jpg" className="BgImage" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }} />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{EXPOSURE_PORN}</p>
            </div>
          </Link>
        </div>
        <div className="BoxBottom" style={{ width: FULL_WIDTH, height: HALF_HEIGHT }}>
          <Link to="/r/Wallpapers" className="BoxBottomLeft" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }}>
            <img src="http://i.imgur.com/sXNLRVW.jpg" className="BgImage" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }} />
            <div className="BgTextContainer">
              <p className="Label">{SUB}{WALLPAPERS}</p>
            </div>
          </Link>
          <Link to="/r/LandscapeAstro" className="BoxBottomRight" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }}>
            <img src="https://i.imgur.com/1kJoNwG.jpg" className="BgImage" style={{ width: HALF_WIDTH, height: HALF_HEIGHT }} />
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
