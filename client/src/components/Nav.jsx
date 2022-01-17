import React, { useEffect, useState } from 'react';
import GuestNav from './nav/GuestNav';
import UserNav from './nav/UserNav';
import ProNav from './nav/ProNav';
import '../assets/css/nav.css';

function Nav() {
  const[isLogin, setIsLogin] = useState(true)

  useEffect(()=> {
    checkLogin()
  }, [])

  const checkLogin = () =>{
    const user = JSON.parse(localStorage.getItem('Soomgo'))
    if(user) {
      setIsLogin(true)
    }else {
      setIsLogin(false)
    }
  }

  // state값을 boolean형으로 default값을 false로 두고,
  // 하위컴포넌트로부터 받아온 데이터를 setIsNav에 담아 state값을 변경시킨다.
  const [isNav, setIsNav] = useState(false)

  // 하위컴포넌트가 상위컴포넌트로 데이터를 보내는 방법은
  // 상위컴포넌트가 만든 콜백함수를 통해 데이터를 전달할 수 있다.
  // 따라서 이 getData 함수는 하위컴포넌트에게 데이터를 받아낼 콜백함수다.
  const getData = (data) => {
    setIsNav(data)
  }

  return (
    <div className="state-nav">
      {isLogin ? (isNav? <ProNav getData={getData} /> : <UserNav getData={getData} />) : <GuestNav />}
    </div>
  )
}

export default Nav;