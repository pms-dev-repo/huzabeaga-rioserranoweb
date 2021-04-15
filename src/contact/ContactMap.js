import React, { Fragment, useState } from 'react';
import styled from 'styled-components'
import { markers as _markers }from './contactMapData'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Gmaps from '../icons/Gmaps'
import Waze from '../icons/Waze'
import { isMobile} from 'react-device-detect';
import { CSSTransition } from 'react-transition-group';

const Section = styled.div`
  padding: 24px;
  background-color: #F0EFEF;
  @media (max-width: 1000px) {
    padding: 50px 0;
  }

  @media (max-width: 575px) {
    padding: 40px 24px;
  }
`

const Container = styled.div`
   display: flex;
   flex-direction: row;
  @media (max-width: 1000px) {
      flex-direction: column;
  }

  @media (max-width: 575px) {

  }
`
const ContainerMask = styled.div`
  width: 100%;
  height: 720px;
  position: relative;
  flex: auto;
  overflow: hidden;

  @media (max-width: 1000px) {
      height: 100%;
  }

  @media (max-width: 575px) {

  }
`

const MapContainer = styled.div`
  width:100%;
  height: 720px;
  position: relative;
  top: 0px;
  @media (max-width: 1000px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 320px;
  }
`


const Picker = styled.div`
  width: 560px;
  height: 720px;
  background-color: #302D2A;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {

  }
`
const PickerImageWrp = styled.div`
  height: 260px;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 1000px) {
    display: none;
    height: 0px;
  }

  @media (max-width: 480px) {

  }
`

const PickerImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  @media (max-width: 1000px) {

  }

  @media (max-width: 480px) {

  }
`

const PickerSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  height: 100%;
  > div {
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all .2s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover{
      color: #c5c5c5;
    }
  }
  
  .apps{
    display: flex;
    margin-left: auto;
    align-items: center;
    font-size: 40px;
    line-height: 1;
  }
  @media (max-width: 1000px) {
    padding: 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {

  }
`


export default function ContactMap() {

  const [ markers, setMarkers ] = useState(_markers)
  const [ selected, setSelected] = useState(1)

  const onLoad = marker => {}

  const mapContainerStyle = { height: '100%', width: "100%"}
  const mapOptions = {
    streetViewControl: true,
    scaleControl: true,
    mapTypeControl: true,
    panControl: true,
    zoomControl: true,
    rotateControl: true,
    fullscreenControl: true,
    draggable: true,
    mapTypeId: 'satellite'
  }

  const handlePosition = (_marker) => {
    setSelected(_marker.id)
    setTimeout(() => {
      const newMarkers = markers.map(marker => ({...marker, active: _marker.id === marker.id ? true : false}))
      setMarkers(newMarkers)
    }, 200)
   
  }

  return (
    <Section>
      <ContainerMask data-scroll data-scroll-repeat>
        <Container>
          <MapContainer>
            <LoadScript
              id="script-loader"
              googleMapsApiKey="AIzaSyBjapmUuCJmhfbySS7cGVaGoNchx3rN0CM"
            >
              <GoogleMap
                id='example-map'
                mapContainerStyle={mapContainerStyle}
                options={mapOptions}
                zoom={14}
                center={markers.filter(marker => marker.active === true)[0].position}
              >
                { markers.map((marker, index) => 
                  <Marker
                    key={index}
                    onLoad={onLoad}
                    position={marker.position}
                    visible={marker.active}
                  />
                ) }
                
              </GoogleMap>
            </LoadScript>
          </MapContainer>
          <Picker>
            <PickerImageWrp>
            <CSSTransition
              in={markers.filter(marker => marker.active === true)[0].id !== selected}
              timeout={200}
              classNames='contactFade'
            >
              <PickerImage image={markers.filter(marker => marker.active === true)[0].image} width="100%" />
            </CSSTransition>
            </PickerImageWrp>
            <PickerSelector>
              { markers.map((marker, index) => 
                <div 
                  key={index}
                  onClick={() => handlePosition(marker)}
                  style={{ fontWeight: marker.active ? 800 : 500 }}
                >
                  { marker.name}
                  <div className="apps">
                    <a 
                      target="_blank"
                      href={`https://www.waze.com/es/livemap/directions?navigate=yes&latlng=${marker.position.lat}%2C${marker.position.lng}&zoom=17`}>
                      <Waze />
                    </a>
                    <a 
                      target="_blank"
                      href={`https://www.google.com/maps/search/?api=1&query=${marker.position.lat},${marker.position.lng}`}>
                      <Gmaps />
                    </a>
                  </div>
                </div>
                
                
              )}
            </PickerSelector>
          </Picker>
        </Container>
      </ContainerMask>
    </Section>
  )
}