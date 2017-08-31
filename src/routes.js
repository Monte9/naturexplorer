import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import App from './components/App';
import Images from './components/Images';
import NotFound from './components/NotFound'

import {
  EARTH_PORN, EXPOSURE_PORN, WALLPAPERS, LANDSCAPE_ASTRO
} from './constants'

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/r/EarthPorn" render={() => <Images type={EARTH_PORN} />} />
        <Route path="/r/ExposurePorn" render={() => <Images type={EXPOSURE_PORN} />} />
        <Route path="/r/Wallpapers" render={() => <Images type={WALLPAPERS} />} />
        <Route path="/r/LandscapeAstro" render={() => <Images type={LANDSCAPE_ASTRO} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;
