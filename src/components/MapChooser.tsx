import React from 'react';

const MapChooser = (location: string) => {
  if (!location) {
    location = 'default';
  }
  return location + '.png';
};

export default MapChooser;
