import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/main.css';

import RecommendPro1 from '../../assets/images/recommend-pro-1.jpg';
import RecommendPro2 from '../../assets/images/recommend-pro-2.jpg';
import RecommendPro3 from '../../assets/images/recommend-pro-3.jpg';
import Star from '../../assets/images/star.svg';

function RecommendPro() {
  return (
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
  );
}

export default RecommendPro;