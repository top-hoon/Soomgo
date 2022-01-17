import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';
import '../../assets/css/mypage.css';
import Icon from '../../assets/images/i-icon.svg';
import axios from 'axios'

function MypageSettingName() {
  const checkName = (e) => {
    if (e.target.value === "") {
      e.target.classList.add('is-valid');
      document.querySelector('.invalid-feedback').style.display = 'block';
    } else {
      e.target.classList.remove('is-valid');
      document.querySelector('.invalid-feedback').style.display = 'none';
    }
  }

  const [values, setValues] = useState({
    mem_name: ''
  })

  const { mem_name } = values


  function changeName(mem_name) {
    axios.put(`/mypage/account-info/settings/editName`, {
      mem_name
    })
      .then(response => {
        console.log(response.data)     
        
        
      })
      .catch(err => {
        console.log(err.response.data.err)
        
      })
      console.log(123);
      
  }

  const handleChange = mem_name => event => {
    setValues({
    ...values, 
    [mem_name]: event.target.value
    })
  }

  const clickSubmit = event => {
  event.preventDefault()
  changeName(mem_name)
  alert('이름이 수정되었습니다.')
  window.location.replace('/mypage/account-info')
  }

  
  return (
    <>
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
                onBlur={checkName}  value={mem_name} onChange={handleChange('mem_name')}
              />
              <div className="invalid-feedback">이름을 입력해주세요.</div>
            </div>
          </fieldset>
        </section>
        <footer className="button-group">
          <Link className="btn btn-cancel btn-active btn-outline-secondary" to="/mypage/account-info">취소</Link>
          <button className="btn btn-primary" onClick={clickSubmit}>수정 완료</button>
        </footer>
      </main>
    </div>
    </>
  )
}
  
export default MypageSettingName;