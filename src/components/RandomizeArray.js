import React from 'react';
// import {RedoOutlined} from '@ant-design/icons';

const RandomizeButton = ({ onClick }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <button
        type='primary'
        style={{
          width: 130,
          background: '#0D1929',
          borderColor: '#0D1929',
          fontWeight: 'bold',
          color: '#fff',
        }}
        // icon={<RedoOutlined />}
        onClick={onClick}
      >
        Randomize
      </button>
    </div>
  );
};

export default RandomizeButton;
