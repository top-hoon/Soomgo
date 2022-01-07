import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/common.css';
import '../assets/css/signup.css';


function Signup(){
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

    const checkName = (e) => {
        if (e.target.value === "") {
          e.target.classList.add('.textInput-name');
          document.querySelector('.invalid-feedback-name').style.display = 'block';
        } else {
          e.target.classList.remove('.textInput-name');
          document.querySelector('.invalid-feedback-name').style.display = 'none';
        }
    }

    const checkCurrPw = (e) => {
        let regExp = /^[A-Za-z0-9]{7,16}$/;  
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
    

      const [values, setValues] = useState({
        name: '',
        email: '',
        mem_password: ''
    })
    
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    
    const { name, email, mem_password } = values


    function signup(name, email, mem_password) {
        axios.post(`/member/regist`, {
            name, email, mem_password
        })
          .then(response => {
            console.log(response.data)
            setMessage('회원가입이 완료되었습니다.')
            setSuccess(true)
          })
          .catch(err => {
            console.log(err.response.data.err)
            setMessage(err.response.data.err)
            setSuccess(false)
          })
    }

    const handleChange = name => event => {
    setValues({
        ...values, 
        [name]: event.target.value
        })
    }

    const clickSubmit = event => {
    event.preventDefault()
    signup( name, email, mem_password )
    }
    

    const showError = () => (
        <div className="message" style={{display: success ? 'none' : ''}}>{message}</div>
      )
    
      const showSuccess = () => (
        <div className="message" style={{display: success ? '' : 'none'}}></div>
      )
    


    return(
        <div class="signup">
            <div class="signupTit">
                <h2>숨고에 오신 것을 환영합니다</h2>
                {showSuccess()}
                {showError()}
            </div>
            <div class="signupBox">
                <div class="signupForm">
                    <p>이름</p>
                    <input class="textInput" type="text"  placeholder="이름(실명)을 입력해주세요"  value={name} onChange={handleChange('name')} onBlur={checkName}></input>
                    <div className="invalid-feedback-name">이름을 입력해주세요.</div>
                    <p>이메일</p>
                    <input  class="textInput"  type="text" placeholder="example@soomgo.com" value={email} onChange={handleChange('email')} onBlur={checkEmail}></input>
                    <div className="invalid-feedback-email">이메일 주소를 입력해주세요.</div>
                    <p>비밀번호</p>
                    <input class="textInput" type="password" placeholder="영문+숫자 조합 8자리 이상 입력해주세요" value={mem_password} onChange={handleChange('mem_password')} onBlur={checkCurrPw}></input>
                    <div className="invalid-feedback-pwd">비밀번호를 입력해주세요</div>
                    <div className="invalid-feedback-pwdCheck">영문+숫자 조합 8자리 이상 입력해주세요.</div>

                    <div class="checkbox"><input type="checkbox"></input><label for="checkbox"></label><span class="txtAll"><span class="txt1">이용약관</span><span class="txt2">, </span><span class="txt1">개인정보 수집 및 이용</span><span class="txt2"> 동의 (필수)</span></span></div>
                    <div class="checkbox"><input type="checkbox"></input><label for="checkbox"></label><span class="txtAll"> <span class="txt2"> 만 14세 이상 (필수)</span></span></div>
                    <div class="selectBtn"><button class="select signupBtn" onClick={clickSubmit}>회원가입</button></div>
                    <div class="selectBtn"><button class="select signupFB"><img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg" />Facebook으로 가입하기</button></div>
          
        
                </div>  
        
                <div class="gotoPro">
                    <a href="/pro-signup">고수로 가입하시나요?</a>
                </div>

        

            
            </div>

        </div>

    )
}


export default Signup;