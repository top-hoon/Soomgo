import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';
import ProService2nd from './ProService2nd';
import ProService3rd from './ProService3rd';

function ProService() {
  const [cate2nd, setCate2nd] = useState([])
  const [cate3rd, setCate3rd] = useState([])
  const [isData, setIsData] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: '',
    hp: '',
    image: null,
    mem_name: '',
    mem_password: ''
  })

  const { email, hp, image, mem_name, mem_password } = userInfo

  useEffect(() => {
    axios.get("/mypage/account-info")
    .then(res => setUserInfo(res.data[0]))
    .catch(err => console.log(err))
  },[])

  const cate2Idx = (props) => { 
    setCate2nd([...props])
    if (cate2nd == 0) {
      setIsData(false) 
    } else {
      setIsData(true)
    }
  }

  const cate3Idx = (props) => { 
    setCate3rd([...props]) 
  }

  // if (cate2nd != 0 && cate3rd != 0) {
  //   axios.post('/gosu/regist', { 
  //     cate1_idx: 1, 
  //     cate2_idx: cate2nd, 
  //     cate3_idx: cate3rd,
  //   })
  // }

  return (
    <>
      {isData ? <ProService3rd cate2Idx={cate2nd} cate3Idx={cate3Idx} /> : <ProService2nd cate2Idx={cate2Idx} />}
    </>
  )
}

export default ProService;