import React, { useEffect, useState } from 'react'
import ProAddress from './ProAddress'
import GoogleMaps from './GoogleMaps'

export default function ProLocation() {

  const [address, setAddress] = useState()
  
  const location = (props) => {
    setAddress(props)
  }

  return (
    <>
      {address ? <GoogleMaps data={address} /> : <ProAddress location={location} /> }
    </>
  )
}