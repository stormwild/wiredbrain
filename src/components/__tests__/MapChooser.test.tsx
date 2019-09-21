import React from 'react';
import ReactDOM from 'react-dom';

import MapChooser from '../MapChooser';

describe('MapChooser', () => {
  it('should return an image file name based on input', () => {
    let expected = 'portland.png';
    let actual = MapChooser('portland');
    expect(actual).toEqual(expected);
  });

  it('should return an default image file name based on input', () => {
    let expected = 'default.png';
    let actual = MapChooser();
    expect(actual).toEqual(expected);
  });
});
