import React, { useState, useEffect } from 'react';
import '../../assets/css/common.css';
import '../../assets/css/nav.css';
import axios from 'axios';
import Profile from '../../assets/images/0215f0ab-61fe-4273-8a1b-6d73d71ad38c.png';
import Secondary from '../../assets/images/secondary.svg';

function UserNav({data, getData}) {

  const [members, setMembers] = useState([]);
  const [gosuFlag, setGosuFlag] = useState(false);

  useEffect(() => {
    axios.get("/mypage/account-info")
    .then(res => setMembers(res.data))
    .catch(err => console.log(err))
  },[]);

  const changePro = () => {
    getData(gosuFlag);
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

  return (
    <nav className="nav">
      <div className="left-section">
        <a href="/" className="logo"></a>
      </div>
      <div className="right-section">
        <div className="user-navi">  
          <a className="pro-search" href="/ProSearch">고수찾기</a>
          <a className="received" href="/SentRequest">받은견적</a>
          <a className="chat" href="/Chat">
            채팅
            <span className="chat-count">17</span>
          </a>
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
            <p className="name">{members[0]?.mem_name} 고객님</p>
            <ul className="control">
              <li><a className="sent-request" href="/SentRequest">받은 견적</a></li>
              <li><a className="mypage" href="/Mypage">마이페이지</a></li>
            </ul>
            <p className="secondary-btn" onClick={changePro}>
              <img src={Secondary} />
              <span className="secondary-btn-title"></span>
            </p>
            <button className="logout-btn" onClick={logout}>로그아웃</button>
          </div>
          {/* profile toggle */}

        </div>
      </div>
    </nav>
  )
}

export default UserNav;