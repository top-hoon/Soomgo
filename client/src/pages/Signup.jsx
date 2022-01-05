import React, { useState } from 'react';
import axios from 'axios'
import '../assets/css/common.css';
import '../assets/css/signup.css';


function Signup(){
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    
    const { name, email, password } = values
    
  

    function signup(name, email, password) {
        axios.post(`/Login`, {
            name, email, password
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
    signup( name, email, password )
    }
    

    const showError = () => (
        <div className="message" style={{display: success ? 'none' : ''}}>{message}</div>
      )
    
      const showSuccess = () => (
        <div className="message" style={{display: success ? '' : 'none'}}>New account is created. Please Click here <a href='/Signin'>Signin</a></div>
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
                    <input class="textInput" type="text" placeholder="이름(실명)을 입력해주세요" value={name} onChange={handleChange('name')}></input>
                    <p>이메일</p>
                    <input class="textInput" type="text" placeholder="example@soomgo.com" value={email} onChange={handleChange('email')}></input>
                    <p>비밀번호</p>
                    <input class="textInput" type="password" placeholder="영문+숫자 조합 8자리 이상 입력해주세요" value={password} onChange={handleChange('password')}></input>

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
