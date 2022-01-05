import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/main.css';

import EnglishLesson from '../../assets/images/english-lesson.png';
import PersonalTraining from '../../assets/images/personal-training.png';
import VocalLesson from '../../assets/images/vocal-lesson.png';
import Left from '../../assets/images/slick-arrow-left.svg';
import Right from '../../assets/images/slick-arrow-right.svg';

function RecommendService(){
  return (
    <section className="recommend-service">
      <div className="title">
        <h2>숨고 인기 서비스</h2>
      </div>
      <ul className="list">
        <li className="item">
          <img src={EnglishLesson} />
          <h3>영어 과외</h3>
          <p>95,314명 고수 활동 중</p>
        </li>
        <li className="item">
          <img src={PersonalTraining} />
          <h3>퍼스널트레이닝(PT)</h3>
          <p>20,267명 고수 활동 중</p>
        </li>  
        <li className="item">
          <img src={VocalLesson} />
          <h3>보컬 레슨</h3>
          <p>18,706명 고수 활동 중</p>
        </li>
        <li className="item">
          <img src={EnglishLesson} />
          <h3>욕실/화장실 리모델링</h3>
          <p>17,536명 고수 활동 중</p>
        </li>
      </ul>
      {/* <div className="slide-control">
        <div className="left"><img src={Left} /></div>
        <div className="right"><img src={Right} /></div>
      </div> */}
    </section>
  )
}


export default RecommendService;