import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/main.css';

import Lesson from '../../assets/images/lesson.svg';
import HomeLiving from '../../assets/images/home-living.svg';
import Event from '../../assets/images/event.svg';
import Business from '../../assets/images/business.svg';
import DesignDevelopment from '../../assets/images/design-development.svg';
import HealthBeauty from '../../assets/images/health-beauty.svg';
import PartTimeJob from '../../assets/images/part-time-job.svg';
import Etc from '../../assets/images/etc.svg';

function Service() {
  return (
    <section className="main-service">
      <ul className="service-list">
        <li className="service-item">
          <a className="inner-service-item" to="/categories">
            <img className="service-icon" src={Lesson} />
            <p className="service-name">레슨</p>
          </a>
        </li>
        <li>        
          <img className="service-icon" src={HomeLiving} />
          <p className="service-name">홈/리빙</p>
        </li>
        <li>
          <img className="service-icon" src={Event} />
          <p className="service-name">이벤트</p>
        </li>
        <li>
          <img className="service-icon" src={Business} />
          <p className="service-name">비즈니스</p>
        </li>
        <li>
          <img className="service-icon" src={DesignDevelopment} />
          <p className="service-name">디자인/개발</p>
        </li>
        <li>
          <img className="service-icon" src={HealthBeauty} />
          <p className="service-name">건강/미용</p>
        </li>
        <li>
          <img className="service-icon" src={PartTimeJob} />
          <p className="service-name">알바</p>
        </li>
        <li>
          <img className="service-icon" src={Etc} />
          <p className="service-name">기타</p>
        </li>
      </ul>
    </section>
  )
}

export default Service;