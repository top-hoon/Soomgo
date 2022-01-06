import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/common.css';
import '../assets/css/login.css';
import icon_kakao from '../assets/images/icon_kakao.svg';
import icon_facebook from '../assets/images/icon_facebook.svg';

function Login(){
  const checkEmail = (e) => {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let isEmail = regExp.test(e.target.value);          // 형식에 맞는 경우 true 리턴
    // console.log('이메일 유효성 검사 :: ', isEmail)   // 결과 출력

    if (isEmail === false) {
      e.target.classList.add('.textInput-email');
      document.querySelector('.invalid-feedback-email').style.display = 'block';
    } else {
      e.target.classList.remove('.textInput-email');
      document.querySelector('.invalid-feedback-email').style.display = 'none';
    }
  }
  const checkCurrPw = (e) => {
    let regExp = /^[A-Za-z0-9]{8,16}$/;  
    let isPw = regExp.test(e.target.value);
    if(e.target.value === '') {
        e.target.classList.add('.textInput-pwd');
        document.querySelector('.invalid-feedback-pwd').style.display = 'block';
        document.querySelector('.invalid-feedback-pwdCheck').style.display = 'none';
    }else if(isPw === false){
        e.target.classList.add('.textInput-pwd');
        document.querySelector('.invalid-feedback-pwd').style.display = 'none';
        document.querySelector('.invalid-feedback-pwdCheck').style.display = 'block';
    }else if(isPw === true && isPw ==! ''){
        e.target.classList.add('.textInput-pwd');
        document.querySelector('.invalid-feedback-pwd').style.display = 'none';
        document.querySelector('.invalid-feedback-pwdCheck').style.display = 'none';
      }
    
  }

  const [values, setValues] = useState({})

  // email, password 변수 선언
  const { email, mem_password } = values

  const handleChange = name => event => {
    setValues({
      ...values, 
      [name]: event.target.value
    })
  }

  // 이메일로그인 버튼 클릭하면 email, password 값을 signin 함수로 전달
  const clickSubmit = event => {
    event.preventDefault()
    signin( email, mem_password )
  }

  // clickSubmit 에서 전달받은 데이터 서버로 전달.
  function signin(email, mem_password) {
    axios.post('member/login',
      { email, mem_password },
      { withCredentials: true, crossDomain: true },
      console.log('email: ' + email + ' / ' + 'password: ' + mem_password))
      .then(res => {
        console.log(res.data);
        const data = { id: res.data.id, name: res.data.name }
        localStorage.setItem('Soomgo', JSON.stringify(data))
        // window.location.replace('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

    return(
      <>
        <div className="_login">
          <div className="loginTit">
            <h2>로그인</h2>
          </div>
          <div className="loginBox">
            <form className="loginForm">
              <p>이메일</p>
              <input 
                className="textInput-email" 
                type="text" 
                placeholder="example@soomgo.com" 
                onBlur={checkEmail}
                name="email"
                onChange={handleChange('email')} 
                value={email}
              />
              <div className="invalid-feedback-email">이메일 주소를 입력해주세요.</div>
              <p>비밀번호</p>
              <input 
                className="textInput-pwd" 
                type="password" 
                placeholder="비밀번호를 입력해주세요." 
                onBlur={checkCurrPw}
                name="mem_password"
                onChange={handleChange('mem_password')} 
                value={mem_password}
              />
              <div className="invalid-feedback-pwd">비밀번호를 입력해주세요</div>
              <div className="invalid-feedback-pwdCheck">영문+숫자 조합 8자리 이상 입력해주세요.</div>
              <a className="_findPwd" href="/FindPwd"><span className="findPwd-txt">비밀번호 찾기</span></a>
              <div className="selectBtn">
                <button 
                  className="select sel-email" 
                  onClick={clickSubmit} 
                >이메일 로그인</button></div>
              <div className="selectBtn"><button className="select sel-kakao"><img src={icon_kakao} alt='icon_kakao' />Kakao로 시작하기</button></div>
              <div className="selectBtn"><button className="select sel-Facebook"><img src={icon_facebook} alt='icon_facebook' />Facebook으로 시작하기</button></div>
            </form>  
          
            <div className="gotoSignup">
              <a href="/Signup">계정이 없으신가요?</a>
              
            </div>
          </div>
  
      </div>
    </>
  
    )
}


export default Login;