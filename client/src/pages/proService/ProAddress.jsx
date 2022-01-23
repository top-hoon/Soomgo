import React from 'react';
import DaumPostCode from 'react-daum-postcode';

import '../../assets/css/common.css';
import '../../assets/css/proService.css';


const ProAddress = (props) => {
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
    };
    const color = {
      color: '#fff'
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
        props.fullAddress(fullAddress)
    }

    return (
        <div data-v-46822a38="" className="container">
            <form data-v-46822a38="" id="id_pro_form">
                <div data-v-2b9a1ce0="" data-v-46822a38="" className="signup-progress-bar header">
                    <div data-v-2b9a1ce0="" className="progress">
                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" className="progress-bar" style={{width: '75%'}}></div>
                    </div>
                    <div data-v-2b9a1ce0="" className="value-text">75%</div>
                </div>
                <div data-v-28301380="" data-v-46822a38="" id="step3" is-initial-mounted="true" className="body">
                    <h1 data-v-28301380="">고수님의 활동 지역의 주소를 알려주세요.</h1>
                    <p data-v-28301380="" className="headline">활동 지역은 근처의 고객을 찾는데 도움이 됩니다.</p>
                    <div data-v-28301380="" className="addr-search">
                        <div data-v-28301380="" className="daum-post-code vue-daum-postcode">
                            <div className="vue-daum-postcode-container" style={{height: '444px'}}>
                                <div id="__daum__layer_7" style={style1}>
                                    <DaumPostCode onComplete={handleComplete} className="post-code" style={style2}/>          
                                </div>
                            </div>
                        </div>
                        <div data-v-28301380="" className="addr-form">
                            <div data-v-28301380="" className="col-12">
                                <input data-v-28301380="" name="addr1" type="text" readOnly className="form-control id-addr1 form-control" aria-label="주소" aria-invalid="false" id="__BVID__4223" style={{display: 'none'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-28599ea4="" data-v-46822a38="" className="step-navigator footer">
                    <div data-v-28599ea4="" className="wrapper">
                        <div data-v-28599ea4="" className="warning"></div>
                        <span data-v-28599ea4="" className="left btn-container">
                            <button data-v-28599ea4="" type="button" className="btn btn-prev btn-outline-primary"> 이전 </button>
                        </span>
                        <span data-v-28599ea4="" className="right btn-container">
                            <button data-v-28599ea4="" type="button" className="btn btn-next btn-primary">다음</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProAddress;