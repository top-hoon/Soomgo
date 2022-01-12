import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/css/common.css';
import '../assets/css/main.css';

import MainBanner from '../assets/images/banner-bizlink-web-main@3x.png';
import Lesson from '../assets/images/lesson.svg';
import HomeLiving from '../assets/images/home-living.svg';
import Event from '../assets/images/event.svg';
import Business from '../assets/images/business.svg';
import DesignDevelopment from '../assets/images/design-development.svg';
import HealthBeauty from '../assets/images/health-beauty.svg';
import PartTimeJob from '../assets/images/part-time-job.svg';
import Etc from '../assets/images/etc.svg';
import Knowhow1 from '../assets/images/pro-knowhow-1.jpg';
import Knowhow2 from '../assets/images/pro-knowhow-2.jpg';
import Knowhow3 from '../assets/images/pro-knowhow-3.png';
import Knowhow4 from '../assets/images/pro-knowhow-4.png';
import RecommendPro1 from '../assets/images/recommend-pro-1.jpg';
import RecommendPro2 from '../assets/images/recommend-pro-2.jpg';
import RecommendPro3 from '../assets/images/recommend-pro-3.jpg';
import Star from '../assets/images/star.svg';
import EnglishLesson from '../assets/images/english-lesson.png';
import PersonalTraining from '../assets/images/personal-training.png';
import VocalLesson from '../assets/images/vocal-lesson.png';
import ReceiveRequest from '../assets/images/receive-request.png';


function Main() {
  // const [recoItems, setRecoItems] = useState([
  //   {idx:0, image:'', title:'영어 과외', desc:'95,314명 고수 활동중'},
  //   {idx:1, title:'퍼스널트레이닝(PT)', desc:'20,267명 고수 활동중'},
  //   {idx:2, title:'보컬 레슨', desc:'18.706명 고수 활동 중'}
  // ])

  // useEffect(()=> {
  //   recommendService()
  // },[]);

  // const recommendService = () => {
  //   axios.get('api주소')
  //   .then(res => setRecoItems(res.data))
  //   .catch(err => console.log(err))
  // }

  return (
    <>
      <section className="main-banner">
        <img src={MainBanner} />
        {/* <div className="slide-control">
          <div className="left"><img src={Left} /></div>
          <div className="right"><img src={Right} /></div>
        </div> */}
      </section>
      <section className="main-service">
        <ul className="service-list">
          <li className="service-item">
            <a className="inner-service-item" href="/Categories">
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
      <section className="pro-knowhow">
        <div className="title">
          <h2>고수의 노하우</h2>
          <p>전체보기</p>
        </div>
        <ul className="list">
          <li className="item">
            <img src={Knowhow1} />
            <h3>코로나19 백신맞기 전에 보험 대비하자</h3>
            <p>FM에셋 사과나무 팀장 조단기</p>
          </li>
          <li className="item">
            <img src={Knowhow2} />
            <h3>청소업체 선정 방법에 대한 팁</h3>
            <p>하우앤업</p>
          </li>  
          <li className="item">
            <img src={Knowhow3} />
            <h3>이제는 필수가 되어버린 입주방역</h3>
            <p>바로방역(바로 달려가는)</p>
          </li>
          <li className="item">
            <img src={Knowhow4} />
            <h3>세탁기 에어컨 분해 청소 꼭 해야할까?</h3>
            <p>플래그닥터</p>
          </li>
        </ul>
      </section>

      {/* <div>
        {recoItems.map(item => 
          <li className="item" idx={item.idx}>
            <img src={item.image}/>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        )}
      </div> */}

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


      
      <section className="recommend-pro">
        <div className="title">
          <h2>우리 지역의 숨은 고수</h2>
          <p>전체보기</p>
        </div>
        <ul className="list">
          <li className="item">
            <img className="banner" src={RecommendPro1} />
            <img className="profile" src={RecommendPro1} />
            <div className="info">
              <p className="intro">강병수 고수의 전기 배선 설치 및 수리</p>
              <p className="location">경기 화성시</p>
              <p className="review-hire">
                <span className="review">
                  <img className="star" src={Star} />5.0
                  <span className="count">(12개)</span>
                </span>
                <span className="hire">12회 고용</span>
              </p>
            </div>
          </li>
          <li className="item">
            <img className="banner" src={RecommendPro2} />
            <img className="profile" src={RecommendPro2} />
            <div className="info">
              <p className="intro">최병철 고수의 샷시 설치 및 수리! 외풍차단 어쩌구 저쩌구</p>
              <p className="location">대전 서구</p>
              <p className="review-hire">
                <span className="review">
                  <img className="star" src={Star} />5.0
                  <span className="count">(4개)</span>
                </span>
                <span className="hire">10회 고용</span>
              </p>
            </div>
          </li>
          <li className="item">
            <img className="banner" src={RecommendPro3} />
            <img className="profile" src={RecommendPro3} />
            <div className="info">
              <p className="intro">깨끗하게 청소 해드리겠습니다. 연락주세요. 어쩌고 저쩌고</p>
              <p className="location">경기도 부천시</p>
              <p className="review-hire">
                <span className="review">
                  <img className="star" src={Star} />5.0
                  <span className="count">(5개)</span>
                </span>
                <span className="hire">15회 고용</span>
              </p>
            </div>
          </li>
          <li className="item">
            <img className="banner" src={RecommendPro3} />
            <img className="profile" src={RecommendPro3} />
            <div className="info">
              <p className="intro">깨끗하게 청소 해드리겠습니다. 연락주세요. 어쩌고 저쩌고</p>
              <p className="location">경기도 부천시</p>
              <p className="review-hire">
                <span className="review">
                  <img className="star" src={Star} />5.0
                  <span className="count">(5개)</span>
                </span>
                <span className="hire">15회 고용</span>
              </p>
            </div>
          </li>
        </ul>
        {/* <div className="slide-control">
          <div className="left"><img src={Left} /></div>
          <div className="right"><img src={Right} /></div>
        </div> */}
      </section>
      <section className="provider-introduce">
        <div className="title">
          <h3>
            <strong>더 많은 고객을 만날 기회!</strong>
            <br />가입 직후 <strong>내 조건에 맞는 요청서</strong>를
            <br />무료로 받아보고 만나고 싶은
            <br />고객과 연락해보세요.
          </h3>
          <a className="button" href="/proSignup">고수로 가입하기</a>
        </div>
        <div className="slick">
          <div className="slick-arrows">
            <button className="prev"><img src="" /></button>
            <button className="next"><img src="" /></button>
          </div>
          <ul className="slick-list">
            <li>
              <img src={ReceiveRequest} />
              <h4>고객의 요청서가 도착해요</h4>
              <p>
                전문 활동 분야를 등록하면
                <br />고객이 도움이 필요한 서비스에 대해
                <br />작성한 요청서가 도착해요.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Main;