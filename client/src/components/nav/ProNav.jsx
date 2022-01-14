import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../assets/css/common.css';
import '../../assets/css/nav.css';
import '../../assets/js/script.js';

import Profile from '../../assets/images/0215f0ab-61fe-4273-8a1b-6d73d71ad38c.png';
import Secondary from '../../assets/images/secondary.svg';

function ProNav({data, getData}) {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("/member/detail?idx=1")
    .then(res => setMembers(res.data))
    .catch(err => console.log(err))
  }, [])

  // Nav.jsx로 데이터 넘길 함수
  const changeUser = () => {
    getData(false)
  }

  // 프로필/알람 메뉴 
  const [hideProfile, setHideProfile] = useState('none')
  const [hideAlram, setHideAlram] = useState('none')

  const alram = (e) => {
    e.preventDefault()
    setHideAlram('block')
    setHideProfile('none')
    if (hideAlram == 'block') {
      setHideAlram('none')
    }
  }

  const profile = (e) => {
    e.preventDefault()
    setHideAlram('none')
    setHideProfile('block')
    if (hideProfile == 'block') {
      setHideProfile('none')
    }
  }

  const logout = (next) => {
    axios.get(`/member/logout`, { withCredentials: true, crossDomain: true })
      .then(res => {
        console.log(res)
        console.log('logout success')
        localStorage.removeItem('Soomgo')
        window.location.replace('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return(
    <nav className="nav">
      <div className="left-section">
        <a href="/" className="logo"></a>
      </div>
      <div className="right-section">
        <div className="pro-navi">
          <a className="pro-navi-1" href="#">받은요청</a>
          <a className="pro-navi-2" href="#">바로견적</a>
          <a className="chat" href="/chat">채팅</a>
          <a className="pro-profile" href="#">프로필</a>
          <span className="alram-btn" onClick={alram}></span>

          {/* alram toggle */}
          <div 
            className="alram-open"
            style={{display: hideAlram}}
          >
            <div className="alram-title">알림</div>
            <div className="alram-box">
              <ul className="alram-list">
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
              </ul>
            </div> 
          </div>
          {/* alram toggle */}

          <div className="profile">
            <img className="image" src={Profile} onClick={profile}/>
            <span className="downarrow"></span>
          </div>

          {/* profile toggle */}
          <div 
            className="profile-open"
            style={{display: hideProfile}}
          >
            <p className="name">{members[0]?.mem_name} 고수님</p>
            <ul className="control">
              <li><a className="profile-settings">프로필 관리</a></li>
              <li><a className="mypage" href="/mypage">마이페이지</a></li>
            </ul>
            <p className="secondary-btn" onClick={changeUser}><img src={Secondary} />고객으로 전환</p>
            <button className="logout-btn" onClick={logout}>로그아웃</button>
          </div>
          {/* profile toggle */}
        </div>
      </div>
    </nav>
  )
}

export default ProNav;