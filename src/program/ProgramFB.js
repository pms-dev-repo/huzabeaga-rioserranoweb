import React, { Fragment, useEffect, useState, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

import ProgramHeader from './ProgramHeader'
import ProgramSlider from './ProgramSlider'
import ProgramDetail from './ProgramDetail'
import ProgramDetailNonSlider from './ProgramDetailNonSlider'
import ProgramRecomendation from './ProgramRecomendation'
import ProgramDownloads from './ProgramDownloads'
import ProgramVideo from './ProgramVideo'

// imagen de fondo
import HeaderBg from '../../images/program/program-full-board-header@2x.jpg'

// imagenes video
import BirdOpenWings from '../illustrations/Cougar'
import VideoCoverImage from '../../images/program/program-full-board-video-cover@2x.jpg';

//imagenes para detalle
import DetailImage from '../../images/program/program-full-board-detail@2x.jpg';

// imagenes de downloas
import DonwloadImage from '../../images/program/program-full-board-downloads@2x.jpg'
import DonwloadPdf from '../../files/fullboard.pdf'


// imagenes de slider
import SIAUrl from '../../images/program/gallery/program-gallery1.jpg'
import SIBUrl from '../../images/program/gallery/program-gallery2.jpg'
import SICUrl from '../../images/program/gallery/program-gallery3.jpg'



// imagenes recomendaciones
import WollCap from '../icons/WollCap';
import Pants from '../icons/Pants';
import Jacket from '../icons/Jacket';
import Boots from '../icons/Boots';
import BirdResting from '../illustrations/BirdResting'

//imagenes para descargas
import CougarWalking from '../illustrations/CougarWalking'
import {FormattedMessage} from 'react-intl'


function ProgramFB(props) {

  const [ headerImageLoaded, setPeaderImageLoaded] = useState(true)
  const [ coverImageLoaded, setCoverImageLoaded] = useState(true)

  const [ programSlideALoaded, setProgramSlideALoaded] = useState(true)
  const [ programSlideBLoaded, setProgramSlideBLoaded] = useState(true)
  const [ programSlideCLoaded, setProgramSlideCLoaded] = useState(true)

  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      headerImageLoaded === false  &&
      coverImageLoaded === false  &&
      programSlideALoaded === false  &&
      programSlideBLoaded === false  &&
      programSlideCLoaded === false  
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
    coverImageLoaded,
    programSlideALoaded,
    programSlideBLoaded,
    programSlideCLoaded
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
        <img src={HeaderBg} onLoad={(e) => setTimeout(() =>  setPeaderImageLoaded(false) , 2000)  } />
        <img src={VideoCoverImage} onLoad={(e) => setTimeout(() =>  setCoverImageLoaded(false) , 2000)  } />
        <img src={SIAUrl} onLoad={(e) => setTimeout(() =>  setProgramSlideALoaded(false) , 2000)  } />
        <img src={SIBUrl} onLoad={(e) => setTimeout(() =>  setProgramSlideBLoaded(false) , 2000)  } />
        <img src={SICUrl} onLoad={(e) => setTimeout(() =>  setProgramSlideCLoaded(false) , 2000)  } />
      </div>

      <ProgramHeader 
        title={<FormattedMessage id="programs.fb.titulo"/>}
        text={<FormattedMessage id="programs.fb.bajada"/>}
        image={HeaderBg}
      />

      <ProgramVideo 
        videoCover={VideoCoverImage}
        videoCode="PJedyERD9Jw"
        illustration={BirdResting}
      />


      <ProgramDetailNonSlider
        title={<FormattedMessage id="programs.fb.detallePrograma.titulo"/>}
        text={<FormattedMessage id="programs.fb.bajada"/>}
        image={DetailImage}
        includes={[
          <FormattedMessage id="programs.fb.detallePrograma.includes.list.item1"/>,
          <FormattedMessage id="programs.fb.detallePrograma.includes.list.item2"/>,
          <FormattedMessage id="programs.fb.detallePrograma.includes.list.item3"/>,
          <FormattedMessage id="programs.fb.detallePrograma.includes.list.item4"/>,
          <FormattedMessage id="programs.fb.detallePrograma.includes.list.item5"/>,
          <FormattedMessage id="programs.fb.detallePrograma.includes.list.item6"/>,
        ]}
        notIncludes={[
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item1"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item2"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item3"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item4"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item5"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item6"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item7"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item8"/>,
          <FormattedMessage id="programs.fb.detallePrograma.notIncludes.list.item9"/>,

        ]}
      />

      <ProgramDetail 
        title={<FormattedMessage id="programs.fb.detallePrograma.titulo"/>}
        text={<FormattedMessage id="programs.fb.detallePrograma.bajada"/>}
        videoCover={DonwloadImage}
        illustration={BirdResting}
      />

      <ProgramDownloads  
        title={<FormattedMessage id="programs.fb.descargas.titulo"/>}
        illustration={CougarWalking}
        downloads={[
          { name:<FormattedMessage id="programs.fb.descargas.pdf"/> , path: DonwloadPdf },
        ]}
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

export default memo(ProgramFB, propsAreEqual)