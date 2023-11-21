import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Mike Wazowski - Office Hours
      </h1>
      <div className='wait-class'>
      <button className='live-btn'>Live</button>
      <h5 className='wait-time'>Wait Time: </h5>
      <h5 className='wait-duration'> Under 20 mins</h5>
      </div>
    </header>
  );
};

export default Header;