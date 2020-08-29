import React from 'React';

import { random } from './misc';

const Loader = () => {
  const renderStars = () => {
    const tags = [];

    for (let i = 0; i < 32; i++) {
      tags.push(
        <span
          className="star"
          style={{ top: `${random(this)}px`, left: `${random(this)}px` }}
        />
      );
    }
    return tags;
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div className="stars">{renderStars()}</div>
        <div className="timeline">
          <div className="sun"></div>
          <div className="moon"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
