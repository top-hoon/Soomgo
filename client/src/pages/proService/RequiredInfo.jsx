import React from "react";

import '../../assets/css/common.css';
import '../../assets/css/proService.css';

function RequiredInfo() {
    return (
        <div data-v-46822a38="" class="container">
            <form data-v-46822a38="" id="id_pro_form" autocomplete="off">
                <div data-v-2b9a1ce0="" data-v-46822a38="" class="signup-progress-bar header">
                    <div data-v-2b9a1ce0="" class="progress">
                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" class="progress-bar" style={{width: '100%'}}></div>
                    </div>
                    <div data-v-2b9a1ce0="" class="value-text">100%</div>
                </div>
                <div data-v-b8d7c106="" data-v-46822a38="" id="step4" class="information-step body" is-initial-mounted="true">
                    <div data-v-b8d7c106="" class="header">
                        <h1 data-v-b8d7c106="">마지막으로 필수 정보를 입력해주세요.</h1>
                    </div>
                    <div data-v-b8d7c106="" class="step-body">
                        <div data-v-b8d7c106="" class="form-group sex-wrap">
                            <label data-v-b8d7c106="" for="sex">성별</label>
                            <div data-v-b8d7c106="" class="gender-radio">
                                <span data-v-b8d7c106="">
                                    <div data-v-b8d7c106="" class="radio"> 남자 </div>
                                </span>
                                <span data-v-b8d7c106="">
                                    <div data-v-b8d7c106="" class="radio"> 여자 </div>
                                </span>
                            </div>
                            <div data-v-b8d7c106="" class="invalid-feedback" style={{display: 'none'}}>
                                <p data-v-b8d7c106="" class="error">성별을 선택해주세요.</p>
                            </div>
                        </div>
                        <div data-v-b8d7c106="" class="form-group">
                            <div data-v-9ca64d7a="" data-v-b8d7c106="">
                                <fieldset data-v-9ca64d7a="" class="form-group form-group" id="__BVID__4241">
                                    <div>
                                        <label data-v-9ca64d7a="" for="request-phone" class="input-label">휴대전화 번호 인증</label>
                                        <div data-v-9ca64d7a="" role="group" class="input-group input-group">
                                            <input data-v-9ca64d7a="" id="request-phone" name="requestPhone" type="tel" placeholder="예) 010-1234-5678" class="answer-input form-control is-valid" maxlength="13" data-vv-validate-on="blur" aria-required="true" aria-invalid="false"/>
                                            <input data-v-9ca64d7a="" name="isSendPhoneNumber" data-vv-name="isSendPhoneNumber" hidden="hidden" aria-required="false" aria-invalid="false"/>
                                            <div data-v-9ca64d7a="" class="button-wrapper input-group-append" max-width="991.98px">
                                                <button data-v-9ca64d7a="" type="button" disabled="disabled" class="send-button disabled"> 전송 </button>
                                                <div dir="ltr" class="resize-sensor" style={{pointeEvents: 'none', position: 'absolute', inset: '0px', overflow: 'hidden', zIindex: '-1', visibility: 'hidden', maxWidth: '100%'}}>
                                                    <div class="resize-sensor-expand" style={{pointeEvents: 'none', position: 'absolute', inset: '0px', overflow: 'hidden', zIindex: '-1', visibility: 'hidden', maxWidth: '100%'}}>
                                                        <div style={{position: 'absolute', left: '0px', top: '0px', transition: 'all 0s ease 0s', width: '82px', height: '38px'}}></div>
                                                    </div>
                                                    <div class="resize-sensor-shrink" style={{pointeEvents: 'none', position: 'absolute', inset: '0px', overflow: 'hidden', zIindex: '-1', visibility: 'hidden', maxWidth: '100%'}}>
                                                        <div style={{position: 'absolute', left: '0px', top: '0px', transition: 'all 0s ease 0s', width: '200%', height: '200%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-9ca64d7a="" class="validation-msg-wrapper"></div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div data-v-c80e6146="" data-v-b8d7c106="" class="agree-to-terms-checkbox">
                            <input data-v-c80e6146="" type="checkbox" id="agree-terms-checkbox-1642800385811" name="agreeToTerms" class="agree-to-terms" aria-required="true" aria-invalid="false"/>
                            <label data-v-c80e6146="" for="agree-terms-checkbox-1642800385811">
                                <p data-v-c80e6146="" class="terms-wrapper">
                                    <span data-v-c80e6146="" class="terms">이용약관</span>, <span data-v-c80e6146="" class="terms">개인정보 수집 및 이용</span> 동의 (필수) 
                                </p>
                            </label>
                        </div>
                        <div data-v-56e4e8a6="" data-v-b8d7c106="" class="more-than-14-checkbox">
                            <input data-v-56e4e8a6="" type="checkbox" id="more-than-14-checkbox-1642800385812" name="moreThan14" class="more-than-14" aria-required="true" aria-invalid="false"/>
                            <label data-v-56e4e8a6="" for="more-than-14-checkbox-1642800385812">
                                <p data-v-56e4e8a6="" class="terms-wrapper">만 14세 이상 (필수)</p>
                            </label>
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
                            <button data-v-28599ea4="" type="submit" class="btn btn-primary"> 고수등록 </button>
                        </span>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default RequiredInfo;