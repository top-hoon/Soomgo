import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';

function ProService2nd(props) {

  let input = document.querySelectorAll('.custom-control-input');
  let categories = []

  const getData = () => {
    input.forEach((el) => {
      if (el.checked) {
        categories.push(el.value)
      }
    })
    props.cate2Idx(categories)
  }

  const [cate2nd, setCate2nd] = useState([])
  useEffect(() => {
    axios.get(`/category2/list`)
    .then(res => setCate2nd(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div data-v-46822a38="" className="container">
      <form data-v-46822a38="" id="id_pro_form">
        {/* progress bar */}
        <div data-v-2b9a1ce0="" data-v-46822a38="" className="signup-progress-bar header">
          <div data-v-2b9a1ce0="" className="progress">
            <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" className="progress-bar" style={{ width: '20%' }}></div>
          </div>
          <div data-v-2b9a1ce0="" className="value-text">25%</div>
        </div>
        {/* # progress bar # */}
        <div data-v-520e67b0="" data-v-46822a38="" id="step1" is-from-prev="true" className="body">
          <h1 data-v-520e67b0="">어떤 서비스를 제공할 수 있나요?</h1>
          <div data-v-520e67b0="" id="selectCat2Box" className="list-group list-group">
            {cate2nd.map((item, idx) => 
              <div data-v-520e67b0="" className="list-group-item list-group-item" key={idx}>
                <div data-v-520e67b0="" className="checkbox">
                  <div data-v-520e67b0="" className="service custom-control custom-checkbox" aria-required="true" aria-invalid="false">
                    <input type="checkbox" name="cat2[]" className="custom-control-input" value={item.idx} id={idx} />
                    <label className="custom-control-label" htmlFor={idx}>{item.cate_name}</label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 이전 / 다음 버튼 */}
        <div data-v-28599ea4="" data-v-46822a38="" className="step-navigator footer">
          <div data-v-28599ea4="" className="wrapper">
            <div data-v-28599ea4="" className="warning"></div>
            <span data-v-28599ea4="" className="left btn-container">
              <button data-v-28599ea4="" type="button" className="btn btn-prev btn-outline-primary"> 이전 </button>
            </span>
            <span data-v-28599ea4="" className="right btn-container">
              <button data-v-28599ea4="" type="button" className="btn btn-next btn-primary" onClick={getData}> 다음 </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
export default ProService2nd;