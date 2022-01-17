import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';
import axios from 'axios';
import Right from '../../assets/images/icon-mypage-list-arrow.svg';
import SoomgoPay from '../../assets/images/soomgopay-info.svg';
import EscrowList from '../../assets/images/icon-mypage-escrow-list.svg';
import Coupon from '../../assets/images/icon-mypage-coupon.svg';
import Board from '../../assets/images/icon-mypage-board-tip.svg';
import Alram from '../../assets/images/icon-mypage-alarm.svg';
import SoomgoInfo from '../../assets/images/icon-mypage-soomgo-info.svg';
import Notice from '../../assets/images/icon-mypage-soomgo-notice.svg';


function Mypage() {
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
  axios.get("/mypage/account-info")
  .then(res => setMembers(res.data))
  .catch(err => console.log(err))
},[]);


  return(
    <section className="mypage">
      <div className="mypage-container">
        <h1 className="mypage-title">마이페이지</h1>
        <div className="profile-container underline">
          <Link className="anchor-tag" to="/mypage/account-info">
            <div className="thumb">
              <div className="user-profile-picture h-100">
                <div className="is-square"></div>
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">
                <span className="name-length">{members[0]?.mem_name} 고객님</span>
              </div>
              <div className="user-id">
                <span className="id-length">{members[0]?.email}</span>
              </div>
            </div>
            <div className="arrow">
              <span className="right-arrow"><img src={Right} /></span>
            </div>
          </Link>
        </div>
        <div className="my-page-menu">
          <ul>
            <li className="main-menu">
              숨고페이
              <img src={SoomgoPay} className="main-menu-more-btn" />
            </li>
            <li className="sub-menu-container underline escrow-list">
              <a className="sub-menu-list">
                <div className="icon-container">
                  <img src={EscrowList} />
                </div>
                <div className="sub-content">
                  <div className="sub-menu">
                    <span className="sub-menu-title">(구)안전거래 내역</span>
                  </div>
                </div>
                <div className="arrow">
                  <span className="right-arrow"><img src={Right} /></span>
                </div>
              </a>
            </li>
            <li className="sub-menu-container underline coupon-event">
              <a className="sub-menu-list">
                <div className="icon-container"><img src={Coupon} /></div>
                <div className="sub-content">
                  <div className="sub-menu">
                    <span className="sub-menu-title">쿠폰/이벤트</span>
                  </div>
                </div>
                <div className="teal-badge">
                  <span data-v-2d1be554="">쿠폰</span>
                  <span data-v-2d1be554=""> 0</span>
                  <span data-v-2d1be554="">개</span>
                </div>
                <div className="arrow">
                  <span className="right-arrow"><img src={Right} /></span>
                </div>
              </a>
            </li>
          </ul>
          <ul>
            <li className="main-menu">활동</li>
            <li className="sub-menu-container underline pro-knowhow">
              <a className="sub-menu-list">
                <div className="icon-container"><img src={Board} /></div>
                <div className="sub-content">
                  <div className="sub-menu">
                    <span className="sub-menu-title badge">고수의 노하우</span>
                  </div>
                </div>
                <div className="arrow">
                  <span className="right-arrow"><img src={Right} /></span>
                </div>
              </a>
            </li>
          </ul>
          <ul>
            <li className="main-menu">설정</li>
            <li className="sub-menu-container underline notification">
              <a className="sub-menu-list">
                <div className="icon-container"><img src={Alram} /></div>
                <div className="sub-content">
                  <div className="sub-menu">
                    <span className="sub-menu-title">알림</span>
                  </div>
                </div>
                <div className="arrow">
                  <span className="right-arrow"><img src={Right} /></span>
                </div>
              </a>
            </li>
            <li className="sub-menu-container underline notice">
              <a className="sub-menu-list">
                <div className="icon-container"><img src={SoomgoInfo} /></div>
                <div className="sub-content">
                  <div className="sub-menu">
                    <span className="sub-menu-title">공지사항</span>
                  </div>
                </div>
                <div className="arrow">
                  <span className="right-arrow"><img src={Right} /></span>
                </div>
              </a>
            </li>
            <li className="sub-menu-container underline soomgo-guide">
              <a className="sub-menu-list">
                <div className="icon-container"><img src={Notice} /></div>
                <div className="sub-content">
                  <div className="sub-menu">
                    <span className="sub-menu-title">숨고안내</span>
                  </div>
                </div>
                <div className="arrow">
                  <span className="right-arrow"><img src={Right} /></span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Mypage;