import React from 'react';

// import { ReactComponent as WorldMap } from './world.svg';
import World from './World.jsx';

const Map = () => {
  return (
    <div className="container">
      <div className="map">
        <World />
      </div>
      <div className="list">list</div>
    </div>
  );
};

export default Map;
