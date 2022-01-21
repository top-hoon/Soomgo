import React, { useEffect, useState, useRef, useCallback } from 'react'
import axios from 'axios';
import '../../assets/css/common.css';
import '../../assets/css/proService.css';

export default function Geolocation(props) {

  const [location, setLocation] = useState([])
  const mapRef = useRef(null)
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

  const initMap = useCallback((value) => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: Number(location.lat), lng: Number(location.lng) },
      zoom: Number(value),
    })
  }, [mapRef])

  const zoom = (event) => {
    initMap(event.target.getAttribute('value'))
  }

  useEffect(() => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.data}&key=${API_KEY}`)
    .then(res => setLocation(res.data.results[0].geometry.location))
    .catch(err => console.log(err))
    
    initMap()
  },[])

  return (
    <div data-v-46822a38="" className="container">
      <form data-v-46822a38="" id="id_pro_form">
          <div data-v-2b9a1ce0="" data-v-46822a38="" className="signup-progress-bar header">
            <div data-v-2b9a1ce0="" className="progress">
              <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" className="progress-bar" style={{ width: '75%' }}></div>
            </div>
            <div data-v-2b9a1ce0="" className="value-text">75%</div>
          </div>
          <div data-v-28301380="" data-v-46822a38="" id="step3" is-initial-mounted="true" className="body">
            <h1 data-v-28301380="">고수님의 활동 지역의 주소를 알려주세요.</h1>
            <p data-v-28301380="" className="headline">활동 지역은 근처의 고객을 찾는데 도움이 됩니다.</p>
            <div data-v-28301380="" className="addr-search">
              <div data-v-28301380="" className="addr-input">
                <span data-v-28301380="" className="active-area">활동 지역</span>
                <span data-v-28301380="" className="edit-addr-btn"><a href="/ProAddress">수정</a></span>
              </div>
              <div data-v-28301380="" className="addr-form">
                <div data-v-28301380="" className="col-12">
                  <input data-v-28301380="" name="addr1" type="text" className="form-control id-addr1 form-control" disabled aria-label="주소" aria-invalid="false" id="__BVID__289" value={props.data}/>
                </div>
              </div>
            </div>
          <div data-v-28301380="" className="map-distance">
            <div data-v-28301380="" className="map-wrap">
              <div data-v-28301380="" className="title">이동 가능 거리</div>
              <div className="radius-point"></div>
              <div data-v-28301380="" className="map">
                <div data-v-28301380="" className="google-map" style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                  {/* googole map */}
                  <center>
                    <div
                      className="map"
                      style={{ width: "575px", height: "500px", top: '-150px', right: '50px' }}
                      ref={mapRef}
                    ></div>
                  </center>
                  {/* googole map */}
                </div>
              </div>
            </div>
            <ul data-v-28301380="" className="distance-list">
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={12}> 2Km </div>
              </li>
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={10}> 5Km </div>
              </li>
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={9}> 10Km </div>
              </li>
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={8}> 25Km </div>
              </li>
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={7}> 50Km </div>
              </li>
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={6}> 100Km </div>
              </li>
              <li data-v-28301380="" onClick={zoom}>
                <div data-v-28301380="" className="wrap" value={3}> 전국 </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-v-28599ea4="" data-v-46822a38="" className="step-navigator footer">
          <div data-v-28599ea4="" className="wrapper">
            <div data-v-28599ea4="" className="warning">
            </div>
            <span data-v-28599ea4="" className="left btn-container">
              <button data-v-28599ea4="" type="button" className="btn btn-prev btn-outline-primary"> 이전 </button>
            </span>
            <span data-v-28599ea4="" className="right btn-container">
              <button data-v-28599ea4="" type="button" className="btn btn-next btn-primary"> 다음 </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}