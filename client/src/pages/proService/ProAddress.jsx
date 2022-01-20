import React, { useState, useEffect } from 'react';
import DaumPostCode from 'react-daum-postcode';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';


const ProAddress = ({}) => {
    const style1 = {
        position: 'relative', 
        width: '100%', 
        height: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        zIndex: '0',
        overflow: 'hidden',
        minWidth: '300px',
        margin: '0px',
        padding: '0px'
    };
    const style2 = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%', 
        height: '100%',
        border: '0px none',
        margin: '0px',
        padding: '0px',
        overflow: 'hidden',
        minWidth: '300px'
    }

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        //fullAddress -> 전체 주소반환
    }

    return (
        <div data-v-46822a38="" class="container">
            <form data-v-46822a38="" id="id_pro_form" autocomplete="off">
                <div data-v-2b9a1ce0="" data-v-46822a38="" class="signup-progress-bar header">
                    <div data-v-2b9a1ce0="" class="progress">
                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" class="progress-bar" style={{width: '75%'}}></div>
                    </div>
                    <div data-v-2b9a1ce0="" class="value-text">75%</div>
                </div>
                <div data-v-28301380="" data-v-46822a38="" id="step3" is-initial-mounted="true" class="body">
                    <h1 data-v-28301380="">고수님의 활동 지역의 주소를 알려주세요.</h1>
                    <p data-v-28301380="" class="headline">활동 지역은 근처의 고객을 찾는데 도움이 됩니다.</p>
                    <div data-v-28301380="" class="addr-search">
                        <div data-v-28301380="" class="daum-post-code vue-daum-postcode">
                            <div class="vue-daum-postcode-container" style={{height: '444px'}}>
                                <div id="__daum__layer_7" style={style1}>
                                    <DaumPostCode onComplete={handleComplete} className="post-code" style={style2}/>          
                                </div>
                            </div>
                        </div>
                        <div data-v-28301380="" class="addr-form">
                            <div data-v-28301380="" class="col-12">
                                <input data-v-28301380="" name="addr1" type="text" readonly="readonly" class="form-control id-addr1 form-control" aria-label="주소" aria-invalid="false" id="__BVID__4223" style={{display: 'none'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-28599ea4="" data-v-46822a38="" class="step-navigator footer">
                    <div data-v-28599ea4="" class="wrapper">
                        <div data-v-28599ea4="" class="warning"></div>
                        <span data-v-28599ea4="" class="left btn-container">
                            <button data-v-28599ea4="" type="button" class="btn btn-prev btn-outline-primary"> 이전 </button>
                        </span>
                        <span data-v-28599ea4="" class="right btn-container">
                            <button data-v-28599ea4="" type="button" class="btn btn-next btn-primary"> 다음 </button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
        

    );
}

export default ProAddress;