import React from 'react';

import World from './World.jsx';

const Map = () => {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fffdfd',
      }}
    >
      <div className="map">
        <World />
      </div>
      <div className="list"></div>
    </div>
  );
};

export default Map;
