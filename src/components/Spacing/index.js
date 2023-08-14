import React from 'react';
import {View} from 'react-native';
import {computeColor, computeSize} from '../helpers/helper';

const Spacing = ({
  style,
  size = 'sm',
  direction = 'row',
  color,
  ...otherProps
}) => {
  const defaultStyle = {};
  const computedSize = computeSize(size, 'spacing');
  const backgroundColor = computeColor(color);

  if (direction === 'X' || direction === 'row') {
    defaultStyle.height = computedSize;
  } else {
    defaultStyle.width = computedSize;
  }

  return (
    <View style={[{...defaultStyle, backgroundColor}, style]} {...otherProps} />
  );
};

export default Spacing;
