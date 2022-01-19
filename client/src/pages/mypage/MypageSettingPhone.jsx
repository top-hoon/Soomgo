import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';
import axios from 'axios'


import Icon from '../../assets/images/i-icon.svg';

function MypageSettingPhone() {

    const checkPhone = (e) => {
      var regExp1 = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
      let isPhone = regExp1.test(e.target.value);
  
      if (isPhone === false) {
        e.target.classList.add('error');
        document.querySelector('.validation').style.display = 'block';
      } else {
        e.target.classList.remove('error');
        document.querySelector('.validation').style.display = 'none';
      }
    }


    const [values, setValues] = useState({
        hp: ''
    })

    const { hp } = values


    function changeHp(hp) {
        axios.put(`/mypage/account-info/settings/editPhone`, {
            hp
        })
          .then(response => {
            console.log(response.data)     
            
            
          })
          .catch(err => {
            console.log(err.response.data.err)
            
          })
          console.log(123);
          
    }

    const handleChange = hp => event => {
    setValues({
        ...values, 
        [hp]: event.target.value
        })
    }

    // const clickSubmit = event => {
    // event.preventDefault()
    // changeName(email)
    // alert('이메일이 수정되었습니다.')
    // window.location.replace('/mypage/account-info')
    // }
  
    return (
      <div className="container-md container settings-phone">
        <main className="account-info-container">
          <h1>휴대전화 번호 설정</h1>
          <div className="sign-container secondary lg">
            <div className="header">
              <div className="title">
                <img src={Icon} alt="secondary" />
                <span data-v-31d0b338="">설정한 번호로 숨고 알림을 받을 수 있습니다</span>
              </div>
            </div>
          </div>
          <section className="phone-section">
            <fieldset className="form-group form-group">
              <div>
                <label for="request-phone" className="input-label">휴대전화 번호 인증</label>
                <div className="input-group">
                  <input 
                    name="requestPhone" 
                    type="tel"
                    placeholder="예) 010-9876-4321" 
                    className="answer-input form-control" 
                    onBlur={checkPhone}
                  />
                  <input className="hidden" type="checkbox" name="isSendPhoneNumber" hidden="hidden" />
                  <div className="button-wrapper input-group-append">
                    <button type="button" disabled="disabled" className="send-button disabled">전송</button>
                  </div>
                </div>
                <div className="validation-msg-wrapper">
                  <p className="validation">휴대전화 번호를 입력해주세요.</p>
                </div>
              </div>
            </fieldset>
          </section>
          <footer className="button-group">
            <Link to="/mypage/account-info" className="btn btn-cancel btn-active btn-outline-secondary" target="_self">취소</Link>
            <button type="button" className="btn btn-primary">설정 완료</button>
          </footer>
        </main>
      </div>
    )
  }

export default MypageSettingPhone;