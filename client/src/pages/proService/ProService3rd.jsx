import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';

function ProService3rd(props) {

  // props.cate2Idx = [idx, idx, idx]
  const [categories, setCategories] = useState([])
  const cate3nd = []
  const cate3box = []

  useEffect(() => {
    axios.get(`/categoryFullList`)
    .then(res => setCategories(res.data.cate1_list[0].cate2_list))
    .catch(err => console.log(err))
  },[])

  props.cate2Idx.forEach(cate2Idx => {
    categories.forEach(cate2 => {
      if (cate2Idx == cate2.idx) {
        cate3nd.push(cate2.cate3_list)
      }
    })
  })

  cate3nd.forEach(data => data.map(item => cate3box.push(item)))

  return (
    <div data-v-46822a38="" className="container">

      <form data-v-46822a38="" id="id_pro_form">
        {/* progress bar */}
        <div data-v-2b9a1ce0="" data-v-46822a38="" className="signup-progress-bar header">
          <div data-v-2b9a1ce0="" className="progress">
            <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" className="progress-bar" style={{ width: '50%' }}></div>
          </div>
          <div data-v-2b9a1ce0="" className="value-text">50%</div>
        </div>
        {/* # progress bar # */}


        <div data-v-520e67b0="" data-v-46822a38="" id="step1" is-from-prev="true" className="body">
          <h1 data-v-520e67b0="">어떤 서비스를 제공할 수 있나요?</h1>
          <div data-v-520e67b0="" id="selectCat2Box" className="list-group list-group">
            {cate3box.map((item, idx) => 
              <div data-v-520e67b0="" className="list-group-item list-group-item" key={idx}>
                <div data-v-520e67b0="" className="checkbox">
                  <div data-v-520e67b0="" className="service custom-control custom-checkbox" aria-required="true" aria-invalid="false">
                    <input type="checkbox" name="cat2[]" className="custom-control-input" value={item.idx} id={item.idx} />
                    <label className="custom-control-label" htmlFor={item.idx}>{item.cate_name}</label>
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
            <a href='/ProAddress'><button data-v-28599ea4="" type="button" className="btn btn-next btn-primary">다음  </button></a>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
export default ProService3rd;