import React from 'react';

export const SpeedSlider = ({ onSpeedChange, isVisualizing, value }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ color: '#0D1929', fontWeight: 'bold' }}>
        Visualization Speed
      </div>
      <input
        type='range'
        disabled={isVisualizing}
        min={1}
        max={100}
        value={value}
        style={{ width: 150 }}
        onChange={e => onSpeedChange(e.target.value)}
      />
    </div>
  );
};
