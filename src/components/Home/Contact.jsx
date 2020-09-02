import React, { useRef, useState } from 'react';

import Scroll from 'react-scroll';

import { validate } from '../utils/misc';

const Contact = () => {
  const Element = Scroll.Element;
  const ref = useRef(null);
  const [show, setShow] = useState([false, '', '']);

  const handleClick = () => {
    const [valid, error, style] = validate(ref.current.value);

    setShow([true, error, style]);

    if (valid) {
      ref.current.value = '';
    }

    setTimeout(() => setShow([false, '', '']), 6100);
  };

  return (
    <Element className="contact" name="contact">
      <div className="wrapper">
        <h1>
          have question in mind?
          <br />
          let us help you
        </h1>
        <form onSubmit={handleClick}>
          <input type="email" placeholder="example@gmail.com" ref={ref} />
          <input type="submit" value="Send" />
        </form>
        {show[0] ? (
          <div className="msg" style={show[2]}>
            {show[1]}
          </div>
        ) : null}
      </div>
    </Element>
  );
};

export default Contact;
