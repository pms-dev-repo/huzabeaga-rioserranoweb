import React, { Fragment, useState, useEffect, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import RoomHeader from "./RoomHeader";
import RoomBook from './RoomBook'
import RoomType from './RoomType'
import RoomDetail from './RoomDetail'
import {FormattedMessage} from 'react-intl'

// imagen de header
import HeaderBg from '../../images/room/room-superior-header.jpg'

// imagen de slider booking
import SIAUrl from '../../images/room/gallery/superior1.jpg'
import SIBUrl from '../../images/room/gallery/superior2.jpg'
import SICUrl from '../../images/room/gallery/superior3.jpg'
import BedA from "../illustrations/BedA";

// imagen para tipo de habitacion
import TypeImage from '../../images/room/room-superior-detail.jpg'
import Antecesors from '../illustrations/Antecesors'


//imagen para detalles
import DetailImage from '../../images/room/super_balcon_detail.jpg'
import LandScapeA from '../illustrations/LandScapeA'

function RoomSuperior(props) {

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
        title={<FormattedMessage id="rooms.superior.titulo"/>}
        text={<FormattedMessage id="rooms.superior.bajada"/>}
        image={HeaderBg}
      />
      <RoomBook 
        text={<FormattedMessage id="rooms.superior.detalle"/>}
        sliderImages={[
          SIBUrl,
          SICUrl,
          SIAUrl
        ]}
        illustration={BedA}
        setShowModal={props.setShowModal}
        surface={<FormattedMessage id='rooms.superior.superficie'/>}
        bedType={<FormattedMessage id='rooms.superior.tipoCama'/>}
        guests={<FormattedMessage id='rooms.superior.personas'/>}
        view={<FormattedMessage id='rooms.superior.vista'/>}
        roomId='455982'
        type={1}
      />
      <RoomType 
        image={TypeImage}
        cardTitle={<FormattedMessage id="rooms.superior.culturas.titulo"/>}
        cardText={<FormattedMessage id="rooms.superior.culturas.bajada"/>}
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

export default memo(RoomSuperior, propsAreEqual)