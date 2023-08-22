import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import styles from './styles.module.scss'

const Maps = () => {
  const api = 'AIzaSyC7J-1TEFwGW3enM2rKXLjW0YSLX_Th9Dk'
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  return (
    <GoogleMap
      zoom={20}
      center={{ lat: -29.758217399213777, lng: -50.03500241360799 }}
      mapContainerClassName={styles.mapContainer}
    >
      <Marker
        position={{ lat: -29.758217399213777, lng: -50.03500241360799 }}
      />
    </GoogleMap>
  )
}

export default Maps
