import React, { useState } from 'react';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';
import ProService2nd from './ProService2nd';
import ProService3rd from './ProService3rd';

function ProService(){
    //let values = []
    const[state, setState] = useState('')

    const cate2Idx = (props) => {
        setState(props)
        
    }



    return(
        <ProService2nd cate2Idx={cate2Idx}/>
        // <ProService3rd data={data}/>       
        // state에 값이 있으면 ProService3rd로 이동 
        

    )
}
export default ProService;