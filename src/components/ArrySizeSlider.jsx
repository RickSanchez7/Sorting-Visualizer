import React from 'react';

export const ArraySizeSlider = ({
  onInputSizeChanged,
  isVisualizing,
  value,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ color: '#0D1929', fontWeight: 'bold' }}>Array Size</div>
      <input
        disabled={isVisualizing}
        type='range'
        min={30}
        max={400}
        step={2}
        value={value}
        style={{ width: 150 }}
        onChange={e => onInputSizeChanged(e.target.value)}
      />
    </div>
  );
};
