import React from 'react';

export const SortingBar = props => {
  let color = '#efefef';

  switch (props.colorCode) {
    case 1:
      color = '#02E095';
      break;
    case 2:
      color = 'red';
      break;
    case 3:
      color = 'yellow';
      break;
    default:
      break;
  }
  let len = props.filled.length;
  for (let i = 0; i < len; i++) {
    if (props.randomizedArray.length - i === props.index) {
      color = 'yellow';
    }
  }

  return (
    <div
      style={{
        ...props.style,
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};
