import React from 'react';

import Brand from '../../utils/Brand.jsx';

const Footer = () => {
  return (
    <footer>
      <Brand />
      <ul>
        <li>overview</li>
        <li>symptoms</li>
        <li>prevention</li>
        <li>treatment</li>
      </ul>
      <ul>
        <li>
          <img src="/images/social/facebook.png" alt="facebook" />
        </li>
        <li>
          <img src="/images/social/youtube.png" alt="you tube" />
        </li>
        <li>
          <img src="/images/social/V.png" alt="V" />
        </li>
        <li>
          <img src="/images/social/twitter.png" alt="twitter" />
        </li>
      </ul>
      <p>2020 @ All rights reserved.</p>
    </footer>
  );
};

export default Footer;
