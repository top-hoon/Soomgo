import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';
import axios from 'axios';
import Profile from '../../assets/images/basic-profile.svg';
import CameraIcon from '../../assets/images/camera-icon.svg';
import Right from '../../assets/images/icon-mypage-list-arrow.svg';


function AccountInfo() {
  // const accessToken;
  // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken.token}`;

  // document.cookie = `Soomgo=${accessToken.token}`;
  
  const [user, setUser] = useState([]);
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    axios.get("/mypage/account-info")
    .then(res => setMembers(res.data))
    .catch(err => console.log(err))
  },[]);

  const popup = () => {
    document.querySelector('.swal2-center').style.display = 'block';
  }

  const back = () => {
    document.querySelector('.swal2-center').style.display = 'none';
  }

  return (
    <div className="account-info-wrap">
      <main className="account-info-container">
        <h1>계정 설정</h1>
        <div className="profile-image">
          <div className="user-profile-picture h-100">
            <div className="image">
              <img src={Profile} />
            </div>
            <img src={CameraIcon} className="camera-icon" />
          </div>
        </div>
        <section className="account-info-section">
          <div className="account-info">
            <Link className="item-container" to="/mypage/account-info/settings">
              <div className="item">
                <div className="item-title">이름</div>
                <div className="item-info">{members[0]?.mem_name}</div>
              </div>
              <div><img src={Right} /></div>
            </Link>
            <Link className="item-container" to="/mypage/account-info/settings">
              <div className="item">
                <div className="item-title">이메일</div>
                <div className="item-info">
                  <span>{members[0]?.email}</span>
                </div>
              </div>
              <div><img src={Right} /></div>
            </Link>
            <Link className="item-container" to="/mypage/account-info/settings">
              <div className="item">
                <div className="item-title">비밀번호</div>
                <div className="item-info">•••••••</div>
              </div>
              <div><img src={Right} /></div>
            </Link>
            <Link className="item-container" to="/mypage/account-info/settings">
              <div className="item">
                <div className="item-title">휴대전화 번호</div>
                <div className="item-info">미인증</div>
              </div>
              <div><img src={Right} /></div>
            </Link>
          </div>
          <ul className="delete-account" onClick={popup}>
            <li className="item-container">
              <div className="item">계정 탈퇴</div>
              <div><img src={Right} /></div>
            </li>
          </ul>
        </section>
      </main>
      <div className="swal2-container swal2-center sg-swal swal2-shown">
        <div className="swal2-popup swal2-modal swal2-show">
          <div className="swal2-header">
            <h2 className="swal2-title">정말 숨고를<br />떠나실 건가요?</h2>
          </div>
          <div className="swal2-content">
            <div>계정 탈퇴 시 모든 개인정보가 삭제되며<br />구매하신 캐시는 환불되지 않아요</div>
          </div>
          <div className="swal2-actions">
            <button type="button" className="swal2-confirm btn" onClick={back}>다시 생각해 볼게요</button>
            <button type="button" className="swal2-cancel btn">계정 탈퇴</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo;