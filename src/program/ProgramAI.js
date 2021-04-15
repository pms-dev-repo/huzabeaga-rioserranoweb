import React, { Fragment, useEffect, useState, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

import ProgramHeader from './ProgramHeader'

import ProgramDetail from './ProgramDetail'
import ProgramDetailSlider from './ProgramDetailSlider'
import ProgramCalendar from './ProgramCalendar'
import ProgramDownloads from './ProgramDownloads'
import ProgramVideo from './ProgramVideo'

// imagen de fondo
import HeaderBg from '../../images/program/program-all-inclusive-header@2x.jpg'

// imagenes video
import Cougar from '../illustrations/Cougar'
import VideoCoverImage from '../../images/program/program-all-inclusive-video-cover@2x.jpg';

//imagenes para detalle
import DetailImage from '../../images/program/program-all-inclusive-detail@2x.jpg';

// imagenes de downloas
import DonwloadImage from '../../images/program/program-all-inclusive-downloads@2x.jpg'
import DonwloadPdf1 from '../../files/allinclusive.pdf'
import DonwloadPdf2 from '../../files/allinclusive-fin.pdf'

// imagenes de slider
import SIAUrl from '../../images/program/gallery/program-gallery1.jpg'
import SIBUrl from '../../images/program/gallery/program-gallery2.jpg'
import SICUrl from '../../images/program/gallery/program-gallery3.jpg'



// imagenes recomendaciones
import BirdResting from '../illustrations/BirdResting'
import LandScape from '../illustrations/LandScape'
import Tiger from '../illustrations/Tiger'

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

  const handleUpdateScroll = () => {
    setTimeout(() => props.paretnRef.current.update(), 100);
  }

  return (
    <Fragment>

      <div style={{ display: 'none' }}>
        <img src={HeaderBg} onLoad={(e) => setTimeout(() => setPeaderImageLoaded(false) , 2000)  } />
        <img src={VideoCoverImage} onLoad={(e) => setTimeout(() => setCoverImageLoaded(false) , 2000)  } />
        <img src={SIAUrl} onLoad={(e) => setTimeout(() => setProgramSlideALoaded(false) , 2000)  } />
        <img src={SIBUrl} onLoad={(e) => setTimeout(() => setProgramSlideBLoaded(false) , 2000)  } />
        <img src={SICUrl} onLoad={(e) => setTimeout(() => setProgramSlideCLoaded(false) , 2000)  } />
      </div>

      <ProgramHeader 
        title={<FormattedMessage id="programs.ai.titulo"/>}
        text={<FormattedMessage id="programs.ai.bajada"/>}
        image={HeaderBg}
      />

      <ProgramVideo 
        videoCover={VideoCoverImage}
        videoCode="oMA3L9iSf-8"
        illustration={Cougar}
      />


      <ProgramDetailSlider
        title={<FormattedMessage id="programs.ai.detallePrograma.titulo"/>}
        image={DetailImage}
        slider={{
         
          tempMed: {
            title: <FormattedMessage id="programs.ai.detallePrograma.tempMed.titulo"/>,
            dates: <FormattedMessage id="programs.ai.detallePrograma.tempMed.dates"/>,
            year: <FormattedMessage id="programs.ai.detallePrograma.tempMed.years"/>,
            includes: [
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item1"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item2"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item3"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item4"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item5"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item6"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item7"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item8"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item9"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.includes.list.item10"/>,
            ],
            notIncludes: [
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item1"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item2"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item3"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item4"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item5"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item6"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempMed.notIncludes.list.item7"/>,
            ]
          },
          tempAlt: {
            title: <FormattedMessage id="programs.ai.detallePrograma.tempAlt.titulo"/>,
            dates: <FormattedMessage id="programs.ai.detallePrograma.tempAlt.dates"/>,
            year: <FormattedMessage id="programs.ai.detallePrograma.tempAlt.years"/>,
            includes: [
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item1"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item2"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item3"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item4"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item5"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item6"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item7"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item8"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item9"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.includes.list.item10"/>,
            ],
            notIncludes: [
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item1"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item2"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item3"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item4"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item5"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item6"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempAlt.notIncludes.list.item7"/>,
            ]
          },
          tempFda: {
            title: <FormattedMessage id="programs.ai.detallePrograma.tempFda.titulo"/>,
            dates: <FormattedMessage id="programs.ai.detallePrograma.tempFda.dates"/>,
            year: <FormattedMessage id="programs.ai.detallePrograma.tempFda.years"/>,
            includes: [
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item1"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item2"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item3"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item4"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item5"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item6"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item7"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item8"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item9"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item10"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.includes.list.item11"/>
            ],
            notIncludes: [
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item1"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item2"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item3"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item4"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item5"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item6"/>,
              <FormattedMessage id="programs.ai.detallePrograma.tempFda.notIncludes.list.item7"/>,
            ]
          }
        }}
        includes={[
          <FormattedMessage id="programs.ai.detallePrograma.includes.list.item1"/>,
          <FormattedMessage id="programs.ai.detallePrograma.includes.list.item2"/>,
          <FormattedMessage id="programs.ai.detallePrograma.includes.list.item3"/>,
          <FormattedMessage id="programs.ai.detallePrograma.includes.list.item4"/>,
          <FormattedMessage id="programs.ai.detallePrograma.includes.list.item5"/>,
          <FormattedMessage id="programs.ai.detallePrograma.includes.list.item6"/>,
        ]}
        notIncludes={[
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item1"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item2"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item3"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item4"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item5"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item6"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item7"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item8"/>,
          <FormattedMessage id="programs.ai.detallePrograma.notIncludes.list.item9"/>,

        ]}
      />

      <ProgramCalendar onUpdateScroll={handleUpdateScroll}
        illustrationLandscape={LandScape}
        illustrationTiger={Tiger}
      />
      <ProgramDetail 
        title={<FormattedMessage id="programs.ai.detallePrograma.titulo"/>}
        text={<FormattedMessage id="programs.ai.detallePrograma.bajada"/>}
        videoCover={DonwloadImage}
        illustration={BirdResting}
      />

      <ProgramDownloads 
        title={<FormattedMessage id="programs.ai.descargas.titulo"/>}
        illustration={CougarWalking}
        downloads={[
          { name:<FormattedMessage id="programs.ai.descargas.pdf" />, path: DonwloadPdf1},
          { name:<FormattedMessage id="programs.ai.descargas.basesCondiciones" />, path: DonwloadPdf2}
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