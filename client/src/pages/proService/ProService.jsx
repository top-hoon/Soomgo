import React, { useState } from 'react';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';
import ProService2nd from './ProService2nd';
import ProService3rd from './ProService3rd';

function ProService() {
  const [cate2nd, setCate2nd] = useState([])
  const [isData, setIsData] = useState(false)

  const cate2Idx = (props) => {
    setCate2nd(props)
    if (cate2nd == 0) {
      setIsData(false) 
    } else {
      setIsData(true)
    }
  }

  return (
    <>
      {isData ? <ProService3rd cate2Idx={cate2nd} /> : <ProService2nd cate2Idx={cate2Idx} />}
    </>
  )
}

export default ProService;