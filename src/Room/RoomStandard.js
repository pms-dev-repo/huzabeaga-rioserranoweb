import React, { Fragment, useState, useEffect, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import RoomHeader from "./RoomHeader";
import RoomBook from './RoomBook'
import RoomType from './RoomType'
import RoomDetail from './RoomDetail'

// imagen de header
import HeaderBg from '../../images/room/room-standar-header.jpg'

// imagen de slider booking
import SIAUrl from '../../images/room/gallery/standar1.jpg'
import SIBUrl from '../../images/room/gallery/standar2.jpg'
import SICUrl from '../../images/room/gallery/standar3.jpg'
import BedA from "../illustrations/BedA";

// imagen para tipo de habitacion
import TypeImage from '../../images/room/room-standar-detail.jpg'
import Antecesors from '../illustrations/Antecesors'


//imagen para detalles
import DetailImage from '../../images/room/super_balcon_detail.jpg'
import LandScapeA from '../illustrations/LandScapeA'

import {FormattedMessage} from 'react-intl'


function RoomStandard(props) {

  const [ headerImageLoaded, setHeaderImageLoaded] = useState(true)
  const [ typeImageLoaded, setTypeImageLoaded] = useState(true)
  const [ roomSlideALoaded, setProgramSlideALoaded] = useState(true)
  const [ roomSlideBLoaded, setProgramSlideBLoaded] = useState(true)
  const [ roomSlideCLoaded, setProgramSlideCLoaded] = useState(true)

  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      headerImageLoaded === false  &&
      typeImageLoaded === false  &&
      roomSlideALoaded === false  &&
      roomSlideBLoaded === false  &&
      roomSlideCLoaded === false  
    ){
      props.onSetLoading(false)
      handleScroll()
    };
    return () => {
      props.setInitTop(0)
      props.setPosition(0)
      props.setDirection(null)
      if(props.paretnRef.current !== null){
        props.paretnRef.current.destroy()
        props.paretnRef.current = null;
        props.refMain.current.style = ""
      }
    }
  }, [
    headerImageLoaded,
    typeImageLoaded,
    roomSlideALoaded,
    roomSlideBLoaded,
    roomSlideCLoaded
  ])

  useEffect(() => {
    if(props.paretnRef.current !== null){
      props.paretnRef.current.update()
    }
  }, [props.lang])


  const handleScroll = () => {
    props.setInitTop(0)
    props.setPosition(0)
    props.setDirection(null)
    if(props.paretnRef.current !== null){
      props.paretnRef.current.destroy()
      props.paretnRef.current = null;
      props.refMain.current.style = ""
    }
    props.paretnRef.current = new LocomotiveScroll({
      el: props.refMain.current,
      smooth: true,
      smoothMobile: false,
      getDirection: true
    })
    props.paretnRef.current.on('scroll', (obj) => {
      props.setPosition(obj.scroll.y)
      props.setDirection(obj.direction)
    })  
  }

  return (
    <Fragment>
      
      <div style={{ display: 'none' }}>
        <img src={HeaderBg} onLoad={(e) => setTimeout(() => setHeaderImageLoaded(false) , 2000)  } />
        <img src={TypeImage} onLoad={(e) => setTimeout(() => setTypeImageLoaded(false) , 2000)  } />
        <img src={SIAUrl} onLoad={(e) => setTimeout(() => setProgramSlideALoaded(false) , 2000)  } />
        <img src={SIBUrl} onLoad={(e) => setTimeout(() => setProgramSlideBLoaded(false) , 2000)  } />
        <img src={SICUrl} onLoad={(e) => setTimeout(() => setProgramSlideCLoaded(false) , 2000)  } />
      </div>

      <RoomHeader 
        title={<FormattedMessage id="rooms.standar.titulo"/>}
        text={<FormattedMessage id="rooms.standar.bajada"/>}
        image={HeaderBg}
      />
      <RoomBook 
        text={<FormattedMessage id="rooms.standar.detalle"/>}
        sliderImages={[
          SIBUrl,
          SICUrl,
          SIAUrl
        ]}
        illustration={BedA}
        setShowModal={props.setShowModal}
        surface={<FormattedMessage id='rooms.standar.superficie'/>}
        bedType={<FormattedMessage id='rooms.standar.tipoCama'/>}
        guests={<FormattedMessage id='rooms.standar.personas'/>}
        view={<FormattedMessage id='rooms.standar.vista'/>}
        roomId='455981'
        type={3}
      />
      <RoomType
        image={TypeImage}
        cardTitle={<FormattedMessage id="rooms.standar.culturas.titulo"/>}
        cardText={<FormattedMessage id="rooms.standar.culturas.bajada"/>}
        illustration={Antecesors}
        
      />
    </Fragment>
  )
}

function propsAreEqual(prev, curr) {
  if(prev.lang !== curr.lang) 
    return false
  else
    return true
}
export default memo(RoomStandard, propsAreEqual)
