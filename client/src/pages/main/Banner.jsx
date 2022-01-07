import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/main.css';

import MainBanner from '../../assets/images/banner-bizlink-web-main@3x.png';
import Left from '../../assets/images/left.svg';
import Right from '../../assets/images/right.svg';


function Banner() {
  return (
    <section className="main-banner">
      <img src={MainBanner} />
      {/* <div className="slide-control">
        <div className="left"><img src={Left} /></div>
        <div className="right"><img src={Right} /></div>
      </div> */}
    </section>
  );
}

export default Banner;