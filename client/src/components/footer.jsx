import React from 'react';
import '../assets/css/common.css';
import '../assets/css/footer.css';

import AppStore from '../assets/images/icon-download-appstore.svg';
import PlayStore from '../assets/images/icon-download-palystore.svg';
import Facebook from '../assets/images/icon-footer-sns-facebook.svg';
import Instagram from '../assets/images/icon-footer-sns-instagram.svg';
import NaverBlog from '../assets/images/icon-footer-sns-naverblog.svg';
import NaverPost from '../assets/images/icon-footer-sns-naverpost.svg';
import Tistory from '../assets/images/icon-footer-sns-tistory.svg';

function Footer() {
  return (
    <nav className="footer">
      <div className="footer-container">
        <div>
          <p className="contect">1599-5319</p>
          <p className="middle">
            평일 10:00 - 18:00<br />
            (점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)
          </p>
          <span className="app-download">
            <button>
              <img src={AppStore} />APP STORE
            </button>
          </span>
          <span className="app-download">
            <button>
              <img src={PlayStore} />PLAY STORE
            </button>
          </span>
        </div>
        <div>
          <ul>
            <li>
              <h4>숨고소개</h4>
              <p>회사소개</p>
              <p>채용안내</p>
            </li>
            <li>
              <h4>고객안내</h4>
              <p>이용안내</p>
              <p>안전정책</p>
              <p>예상금액</p>
              <p>고수찾기</p>
              <p>숨고보증</p>
              <p>고수에게묻다</p>
              <p>비즈링크</p>
            </li>
            <li>
              <h4>고수안내</h4>
              <p>이용안내</p>
              <p>고수가이드</p>
              <p>고수가입</p>
              <p>고수센터</p>
            </li>
            <li>
              <h4>고객센터</h4>
              <p>공지사항</p>
              <p>자주묻는질문</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-outtro">
        <div>
          <p>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>사업자 정보확인</span>
          </p>
          <p>
            주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
          </p>
          <p>
            상호명:(주)브레이브모바일 · 대표이사:KIM ROBIN H · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층<br />
            사업자등록번호:120-88-22325 · 통신판매업신고증:제 2015-서울강남-00567 호 · 직업정보제공사업 신고번호:서울청 제 2019-21호
            <br />고객센터:1599-5319 · 이메일:support@soomgo.com
            <br />Copyright ©Brave Mobile Inc. All Rights Reserved.
          </p>
        </div>
        <div className="link">
          <a href=""><img src={Facebook} /></a>
          <a href=""><img src={Instagram} /></a>
          <a href=""><img src={NaverBlog} /></a>
          <a href=""><img src={NaverPost} /></a>
          <a href=""><img src={Tistory} /></a>
        </div>
      </div>
    </nav>
  )
}


export default Footer;