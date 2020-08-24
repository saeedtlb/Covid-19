import React from 'react';

const Title = ({ header, description, style }) => {
  return (
    <div className="title" style={style}>
      <h3>covid-19</h3>
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Title;
