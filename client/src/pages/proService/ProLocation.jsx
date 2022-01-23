import React, { useEffect, useState } from 'react'
import ProAddress from './ProAddress'
import GoogleMaps from './GoogleMaps'

export default function ProLocation(props) {

  const [address, setAddress] = useState()
  
  const fullAddress = (props) => {
    setAddress(props)
  }

  return (
    <>
      {address ? <GoogleMaps data={address} /> : <ProAddress fullAddress={fullAddress} /> }
    </>
  )
}