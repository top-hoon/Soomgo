import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';


import Icon from '../../assets/images/i-icon.svg';

// 이메일 수정
function email() {

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
              onBlur={checkEmail}
            />
            
            <div className="invalid-feedback">이메일 주소를 입력해주세요.</div>
          </div>
        </fieldset>
        <footer className="button-group">
          <Link className="btn btn-cancel btn-active btn-outline-secondary" to="/mypage/account-info">취소</Link>
          <button type="button" className="btn btn-primary">수정 완료</button>
        </footer>
      </main>
    </div>
  )
}

// 이름 수정
function name() {

  const checkName = (e) => {
    if (e.target.value === "") {
      e.target.classList.add('is-valid');
      document.querySelector('.invalid-feedback').style.display = 'block';
    } else {
      e.target.classList.remove('is-valid');
      document.querySelector('.invalid-feedback').style.display = 'none';
    }
  }


  return (
    <div className="container-md container settings-name">
      <main className="account-info-container">
        <h1>이름 수정</h1>
        <div className="sign-container secondary lg">
          <div className="header">
            <div className="title">
              <img src={Icon} />
              <span>이름(실명)을 사용하시면 고용율이 150% 상승합니다</span>
            </div>
          </div>
        </div>
        <section className="name-section">
          <fieldset className="form-group text-field">
            <legend className="bv-no-focus-ring col-form-label pt-0">이름</legend>
            <div>
              <input 
                name="username" 
                type="text" 
                placeholder="이름(실명)을 입력해주세요" 
                className="form-control is-valid" 
                onBlur={checkName}
              />
              <div className="invalid-feedback">이름을 입력해주세요.</div>
            </div>
          </fieldset>
        </section>
        <footer className="button-group">
          <Link className="btn btn-cancel btn-active btn-outline-secondary" to="/mypage/account-info">취소</Link>
          <button className="btn btn-primary">수정 완료</button>
        </footer>
      </main>
    </div>
  )
}

// 비밀번호 수정
function password() {

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
          <button type="button" className="btn btn-primary">변경 완료</button>
        </footer>
      </main>
    </div>
  )
}

// 휴대전화 번호 설정
function phone() {

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


function MypageSettings() {
  return (
    password()
  )
}

export default MypageSettings;