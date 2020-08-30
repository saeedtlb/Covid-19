import React, { useRef, useState } from 'react';

import { validate } from '../utils/misc';

const Contact = () => {
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
    <div className="contact">
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
    </div>
  );
};

export default Contact;
