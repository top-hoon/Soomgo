import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';
import axios from 'axios'

import Icon from '../../assets/images/i-icon.svg';

function MypageSettingPwd() {

    const checkCurrPw = (e) => {
      if (e.target.value === '') {
        document.querySelector('.currPassword').classList.add('is-invalid');
        document.querySelector('.currPw-feedback').style.display = 'block';
      } else {
        document.querySelector('.currPassword').classList.remove('is-invalid');
        document.querySelector('.currPw-feedback').style.display = 'none';
      }
    }
  
    const checkNewPw = (e) => {
      let regExp = /^[A-Za-z0-9]{8,16}$/;             // 영문+숫자 포함 8자 이상
      let isPassword = regExp.test(e.target.value);   // 형식에 맞는 경우 true 리턴
      let isNewPw = e.target.value;
  
      if (e.target.value == '') {
        document.querySelector('.newPassword').classList.add('is-invalid');
        document.querySelector('.newPw-feedback').style.display = 'block';
        document.querySelector('.newPw-feedback').innerHTML = '비밀번호를 입력해주세요.'
      } else if (e.target.value != '' && isPassword === false) {
        document.querySelector('.newPassword').classList.add('is-invalid');
        document.querySelector('.newPw-feedback').style.display = 'block';
        document.querySelector('.newPw-feedback').innerHTML = '비밀번호 형식이 잘못되었습니다. 영문+숫자 조합 8자리 이상 입력해주세요.'
      } else {
        document.querySelector('.newPassword').classList.remove('is-invalid');
        document.querySelector('.newPw-feedback').style.display = 'none';
      }
    }
  
    const checkConfirmPw = (e) => {
  
      if (e.target.value == '') {
        document.querySelector('.confirmPassword').classList.add('is-invalid');
        document.querySelector('.confirmPw-feedback').style.display = 'block';
        document.querySelector('.confirmPw-feedback').innerHTML = '비밀번호를 한번 더 입력해주세요.'
      } else {
        document.querySelector('.confirmPassword').classList.remove('is-invalid');
        document.querySelector('.confirmPw-feedback').style.display = 'none';
      }
    }

    const [values, setValues] = useState({
        mem_password: ''
    })

    const { mem_password } = values


    function changeName(mem_password) {
        axios.put(`/mypage/account-info/settings/editPassword`, {
            mem_password
        })
          .then(response => {
            console.log(response.data)     
            
            
          })
          .catch(err => {
            console.log(err.response.data.err)
            
          })
          console.log(123);
          
    }

    const handleChange = mem_password => event => {
    setValues({
        ...values, 
        [mem_password]: event.target.value
        })
    }

    const clickSubmit = event => {
    event.preventDefault()
    changeName(mem_password)
    alert('비밀번호가 수정되었습니다.')
    window.location.replace('/mypage/account-info')
    }
  
    return (
      <div className="container-md container settings-password">
        <main className="account-info-container">
          <h1>비밀번호 변경</h1>
          <div className="form-row">
            <div className="margin-bottom-24 col-12">
              <fieldset className="form-group current-password">
                <legend className="bv-no-focus-ring col-form-label pt-0">기존 비밀번호</legend>
                <div>
                  <div className="input-group current-password">
                    <input 
                      name="currentPassword" 
                      type="password" 
                      placeholder="현재 비밀번호를 입력해주세요" 
                      className="form-control currPassword" 
                      onBlur={checkCurrPw}
                    />
                    <button type="button" className="btn btn-secondary">표시</button>
                  </div>
                  <div className="invalid-feedback currPw-feedback">비밀번호를 입력해주세요.</div>
                </div>
              </fieldset>
            </div>
            <div className="margin-bottm-8 col-12">
              <fieldset className="form-group">
                <legend className="bv-no-focus-ring col-form-label pt-0">새로운 비밀번호</legend>
                <div className="new-password">
                  <input 
                    name="password" 
                    type="password" 
                    placeholder="영문+숫자 조합 8자리 이상 입력해주세요" className="form-control newPassword"
                    onBlur={checkNewPw}
                  />
                  <div className="invalid-feedback newPw-feedback"></div>
                </div>
              </fieldset>
            </div>
            <div className="margin-bottm-8 col-12">
              <fieldset className="form-group">
                <legend className="bv-no-focus-ring col-form-label pt-0">새로운 비밀번호 확인</legend>
                <div className="new-password-confirm">
                  <input 
                    name="newPasswordConfirm" 
                    type="password" 
                    placeholder="비밀번호를 한번 더 입력해주세요" 
                    className="form-control confirmPassword" 
                    onBlur={checkConfirmPw}
                  />
                  <div className="invalid-feedback confirmPw-feedback"></div>
                </div>
              </fieldset>
            </div>
          </div>
          <footer className="button-group">
            <Link className="btn btn-cancel btn-active btn-outline-secondary" target="_self" to="/mypage/account-info">취소</Link>
            <button type="button" className="btn btn-primary" onClick={clickSubmit}>변경 완료</button>
          </footer>
        </main>
      </div>
    )
  }
export default MypageSettingPwd;