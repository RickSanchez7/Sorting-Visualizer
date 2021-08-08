import React from 'react';
// import {Button} from 'antd';
// import {PlayCircleOutlined} from '@ant-design/icons';

export const StartButton = ({ onClick }) => {
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
        // icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </button>
    </div>
  );
};
