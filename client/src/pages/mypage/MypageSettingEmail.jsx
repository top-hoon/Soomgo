import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';
import axios from 'axios'

import Icon from '../../assets/images/i-icon.svg';



// 이메일 수정
function MypageSettingEmail() {

    const checkEmail = (e) => {
      let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      let isEmail = regExp.test(e.target.value);          // 형식에 맞는 경우 true 리턴
      // console.log('이메일 유효성 검사 :: ', isEmail)   // 결과 출력
  
      if (isEmail === false) {
        e.target.classList.add('is-valid');
        document.querySelector('.invalid-feedback').style.display = 'block';
      } else {
        e.target.classList.remove('is-valid');
        document.querySelector('.invalid-feedback').style.display = 'none';
      }
    }

    const [values, setValues] = useState({
        email: ''
    })

    const { email } = values


    function changeName(email) {
        axios.put(`/mypage/account-info/settings/editEmail`, {
            email
        })
          .then(response => {
            console.log(response.data)     
            
            
          })
          .catch(err => {
            console.log(err.response.data.err)
            
          })
          console.log(123);
          
    }

    const handleChange = email => event => {
    setValues({
        ...values, 
        [email]: event.target.value
        })
    }

    const clickSubmit = event => {
    event.preventDefault()
    changeName(email)
    alert('이메일이 수정되었습니다.')
    window.location.replace('/mypage/account-info')
    }
  
    return (
      <div className="container-md container settings-email">
        <main className="account-info-container">
          <h1>이메일 수정</h1>
          <fieldset className="form-group">
            <legend className="bv-no-focus-ring col-form-label pt-0">이메일</legend>
            <div>
  
              <input 
                name="email" 
                type="email" 
                placeholder="example@soomgo.com" 
                className="form-control"
                onBlur={checkEmail} value={email} onChange={handleChange('email')}
              />
              
              <div className="invalid-feedback">이메일 주소를 입력해주세요.</div>
            </div>
          </fieldset>
          <footer className="button-group">
            <Link className="btn btn-cancel btn-active btn-outline-secondary" to="/mypage/account-info">취소</Link>
            <button type="button" className="btn btn-primary" onClick={clickSubmit}>수정 완료</button>
          </footer>
        </main>
      </div>
  
    )
}

export default MypageSettingEmail;