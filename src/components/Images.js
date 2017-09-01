import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import {
  EARTH_PORN, EXPOSURE_PORN, WALLPAPERS, LANDSCAPE_ASTRO,
  FULL_HEIGHT, PARALLAX_SCROLL_STRENTH
} from '../constants'

import {
  EARTH_PORN_IMAGES, EXPOSURE_PORN_IMAGES,
  WALLPAPERS_IMAGES, LANDSCAPE_ASTRO_IMAGES, IMAGES
} from '../source.js'

export default class Images extends Component {
  getImages(type) {
    switch(type) {
      case EARTH_PORN:
        return EARTH_PORN_IMAGES;
      case EXPOSURE_PORN:
        return EXPOSURE_PORN_IMAGES;
      case WALLPAPERS:
        return WALLPAPERS_IMAGES;
      case LANDSCAPE_ASTRO:
        return LANDSCAPE_ASTRO_IMAGES;
      default:
      return IMAGES;
    }
  }

  renderImages(data) {
    return data.map(image => {
      return (
        <Parallax bgImage={image} strength={PARALLAX_SCROLL_STRENTH}>
          <div style={{ height: window.innerHeight }} />
        </Parallax>
      )
    })
  }

  render() {
    const data = this.getImages(this.props.type)

    return (
      <div className="App">
        {this.renderImages(data)}
      </div>
    );
  }
}
