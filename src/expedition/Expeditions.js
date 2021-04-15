import React, { useState, useLayoutEffect, useEffect, memo } from "react";
import { useHistory } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll'
import styled from 'styled-components'
import Swiper from 'react-id-swiper';
import Hiking from "../icons/Hiking";
import Specials from "../icons/Specials";
import HorseRiding from "../icons/HorseRiding";
import Navigations from "../icons/Navigations";
import FullDayPaine from "../icons/FullDayPaine";

import Question from "../icons/question";


import SpecialImage from '../../images/expedition/specials.jpg'
import HorseRidingImage from '../../images/expedition/horseriding.jpg'
import HikingImage from '../../images/expedition/hiking.jpg'
import NavigationsImage from '../../images/expedition/navegations.jpg'
import FullDayPaineImage from '../../images/expedition/fulldaypaine.jpg'

import {FormattedMessage} from 'react-intl'

const Section = styled.div`
  height: calc(100vh - 0px);
  position: relative;
  margin-bottom: 0px;
  color: #ffffff;
  text-align: left;
  z-index: 0; 
  @media (max-width: 1000px) {
    height: calc(100vh - 0px);
    background-position-x: -150px;
  }

  @media (max-width: 480px) {
    height: calc(100vh - 0px);
    background-position-x: -150px;
  }
`
const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  .swiper-container{
    height: 100%;
  }
  .swiper-wrapper {
    transition: all 1.2s ease 0s !important;
  }
  .swiper-slide{
    overflow: hidden;
    flex-shrink: 0;
    width: 100% !important;
    height: 100%;
    position: relative;
    transition-property: transform;
    &-content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      @media (max-width: 1000px) {
        top: 50%;
      }

      @media (max-width: 480px) {
        top: 50%;
        left: 35%;
      }
    }
    &-mask{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(33, 31, 29, 0)
    }
    &-image{
      height: 100%;
      background-position: center;
      background-size: cover;
    }
  }
  .swiper-slide-active{
    > div {
      /* transform: scale(1); */
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transform: translate3d(0px, 0px, 0px);
    z-index: 10;
    transition: opacity 300ms ease 0s;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 100%;
    background-color: white;
    border: 2px solid transparent;
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
      cursor: pointer;
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 32px;
    top: 50%;
    background-color: transparent;
    transform: translateY(-50%);

    @media (max-width: 480px) {
      right: 24px;
      top: 55%;
    }
  }

  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    display: block;
    margin: 24px 0px;

    @media (max-width: 480px) {
      margin: 18px 0px;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: transparent;
    border: 2px solid white;
  }
`

const SlideContent = styled.div`
  border-radius: 5px;
  background-color: rgba(33, 37, 41, 0.5);
  padding: 40px;

  @media (max-width: 480px) {
      padding: 40px 60px 40px 80px;
    }
  .slide-legend{
    font-size: 12px;
    width: 140px;
    height: 100%;
    float: right;
    opacity: 0.7;
    display: flex;
    flex-direction: row;
      .slide-icon-legend{
        font-size: 22px;
        margin-right: 8px;
        @media (max-width: 480px) {
        font-size: 20px;
      }
    }
    
    }

  .slide-content-icon{
    font-size: 58px;
    line-height: 0;
    margin-left: -15px;
  }
  .slide-content-title{
    margin-bottom: 32px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    .title-small{
      font-size: 22px;
      letter-spacing: 7px;
      line-height: 1;
      margin-bottom: 8px;
    }
    .title-big{
      font-size: 40px;
      font-weight: 300;
      letter-spacing: 5px;
      line-height: 1;
      text-transform: uppercase;
    }
  }
  .menu{
    display: flex;
    flex-wrap: wrap;
    max-height: 300px;
    min-width: 800px;
    max-width: 800px;
    align-items: flex-start;
    &-item{
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      font-size: 14px;
      cursor: pointer;
      padding: 8px 32px; 
      transition: all .5s ease 0s;
      flex: 50% 0 0;
      width: 50%;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 1.5px; 
      font-weight: 300;
      &:hover{
        background-color: #908275;
        
      }
    }
  }

  @media (max-width: 1000px) {
      .slide-content-icon{
      font-size: 58px;
      line-height: 0;
      margin-left: -15px;
    }
    .slide-content-title{
      margin-bottom: 22px;
      .title-small{
        font-size: 22px;
        letter-spacing: 7px;
        line-height: 1;
        margin-bottom: 8px;
      }
      .title-big{
        font-size: 40px;
        font-weight: 300;
        letter-spacing: 5px;
        line-height: 1;
        text-transform: uppercase;
      }
    }
    .menu{
      display: block;
      margin: auto;
      flex-wrap: wrap;
      max-height: 1000px;
      max-width: 1000px;
      min-width: 500px;
      align-items: flex-start;
      &-item{
        font-size: 14px;
        cursor: pointer;
        padding: 4px 10px; 
        transition: all .5s ease 0s;
        flex: 100% 0 0;
        width: 120%;
        margin-bottom: 0px;
        text-transform: uppercase;
        letter-spacing: 1.5px; 
        font-weight: 300;
        &:hover{
          background-color: #908275;
          
        }
      }
    }
  }

  @media (max-width: 480px) {
    .slide-content-icon{
      font-size: 48px;
      line-height: 0;
      margin-left: -15px;
    }
    .slide-content-title{
      margin-bottom: 16px;
      .title-small{
        font-size: 14px;
        letter-spacing: 7px;
        line-height: 1;
        margin-bottom: 4px;
      }
      .title-big{
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 5px;
        line-height: 1;
        text-transform: uppercase;
      }
    }
    .menu{
      display: block;
      margin: auto;
      flex-wrap: wrap;
      max-height: 300px;
      max-width: 768px;
      min-width: 0px;
      align-items: flex-start;
      &-item{
        font-size: 10px;
        cursor: pointer;
        padding: 3px 4px; 
        transition: all .5s ease 0s;
        flex: 100% 0 0;
        width: 130%;
        margin-bottom: 0px;
        text-transform: uppercase;
        letter-spacing: 1.5px; 
        font-weight: 300;
        &:hover{
          background-color: #908275;
          
        }
      }
    }
  }
`

const expeditions = [{
  name:  <FormattedMessage id="expeditions.hiking.title"/>,
  icon: Hiking,
  image: HikingImage,
  links: [{
    name: <FormattedMessage id="expeditions.trekkingbasetorres.title"/>,
    path: 'trekking-base-torres',
    code: 'bt'
  },{
    name: <FormattedMessage id="expeditions.trekkingcordonchacabuco.title"/>,
    path: 'trekking-cordon-chacabuco',
    code: 'cc'
  },{
    name: <FormattedMessage id="expeditions.miradorferrer.title"/>,
    path: 'trekking-mirador-ferrier',
    code: 'mf'
  },{
    name: <FormattedMessage id="expeditions.chorrillopingo.title"/>,
    path: 'trekking-chorrillo-pingo',
    code: 'chp'
  },
  // {
  //   name: <FormattedMessage id="expeditions.cascadapingo.title"/>,
  //   path: 'trekking-cascada-pingo',
  //   code: 'cp'
  // },
  // {
  //   name: <FormattedMessage id="expeditions.saltoserrano.title"/>,
  //   path: 'trekking-salto-serrano',
  //   code: 'ss'
  // },
  {
    name: <FormattedMessage id="expeditions.lazoweber.title"/>,
    path: 'trekking-lazo-weber',
    code: 'lw'
  },{
    name: <FormattedMessage id="expeditions.lagunaescondida.title"/>,
    path: 'trekking-laguna-escondida',
    code: 'lc'
  },{
    name: <FormattedMessage id="expeditions.miradorcondor.title"/>,
    path: 'trekking-mirador-condor',
    code: 'mc'
  },{
    name: <FormattedMessage id="expeditions.miradortoro.title"/>,
    path: 'trekking-mirador-toro',
    code: 'mt'
  },{
    name: <FormattedMessage id="expeditions.miradorcuernos.title"/>,
    path: 'trekking-mirador-cuernos',
    code: 'mcu'
  },{
    name: <FormattedMessage id="expeditions.aonikenk.title"/>,
    path: 'trekking-aonikenk',
    code: 'ak'
  },{
    name: <FormattedMessage id="expeditions.playasarmiento.title"/>,
    path: 'trekking-playa-sarmiento',
    code: 'ps'
  },{
    name: <FormattedMessage id="expeditions.senderogrey.title"/>,
    path: 'trekking-sendero-grey',
    code: 'sg'
  },{
    name: <FormattedMessage id="expeditions.senderocuernos.title"/>,
    path: 'trekking-sendero-cuernos',
    code: 'sc'
  },{
    name: <FormattedMessage id="expeditions.campoesmeralda.title"/>,
    path: 'trekking-campo-esmeralda',
    code: 'ce'
  },{
    name: <FormattedMessage id="expeditions.trekkingvallefrances.title"/>,
    path: 'trekking-valle-frances',
    code: 'vf'
  }]
},{
  name:  <FormattedMessage id="expeditions.fullday.title"/>,
  icon: FullDayPaine,
  image: FullDayPaineImage,
  links: [{
    name: <FormattedMessage id="expeditions.fulldaypaine.title"/>,
    path: 'full-day-paine',
    code: 'fdp'
  }]
},{
  name:  <FormattedMessage id="expeditions.horseriding.title"/>,
  icon: HorseRiding,
  image: HorseRidingImage,
  links: [{
    name: <FormattedMessage id="expeditions.2horas.title"/>,
    path: 'horse-riding-two-hours',
    code: 'th'
  }
  // ,{
  //   name: <FormattedMessage id="expeditions.pntp.title"/>,
  //   path: 'horse-riding-pntp',
  //   code: 'pn'
  // }
]
},{
  name:  <FormattedMessage id="expeditions.navigations.title"/>,
  icon: Navigations,
  image: NavigationsImage,
  links: [{
    name: <FormattedMessage id="expeditions.navegacionglaciargrey.title"/>,
    path: 'navigations-glaciar-grey',
    code: 'gg'
  },{
    name: <FormattedMessage id="expeditions.navegacionrioserrano.title"/>,
    path: 'navigations-rio-serrano',
    code: 'rs'
  }]
},{
    name:  <FormattedMessage id="expeditions.specials.title"/>,
    icon: Specials,
    image: SpecialImage,
    links: [{
        name: <FormattedMessage id="expeditions.specialescalada.title"/>,
        path: 'specials-escalada',
        code: 'es'
      },{
        name: <FormattedMessage id="expeditions.specialphotosafari.title"/>,
        path: 'specials-photo-safari',
        code: 'ps'
      }]
}]

function Expeditions(props){


  const [ specialImgLoaded, setSpecialImgLoaded] = useState(true)
  const [ horseRidingImgLoaded, setHorseRidingImgLoaded] = useState(true)
  const [ hikingImgLoaded, setHikingImgLoaded] = useState(true)
  const [ navigationImgLoaded, setNavigationImgLoaded] = useState(true)
  const [ fullDayImgLoaded, setFullDayImgLoaded] = useState(true)


  let history = useHistory();

  const [swiper, updateSwiper] = useState(null);
  
  const [params, setParams] = useState({
    direction: 'vertical',
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }) 
  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      specialImgLoaded === false  &&
      horseRidingImgLoaded === false  &&
      hikingImgLoaded === false  &&
      navigationImgLoaded === false  &&
      fullDayImgLoaded === false  
    ){
      props.onSetLoading(false)
      handleScroll()
    };

    setParams(() => ({
      direction: 'vertical',
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    }))

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
    specialImgLoaded,
    horseRidingImgLoaded,
    hikingImgLoaded,
    navigationImgLoaded,
    fullDayImgLoaded
  ])

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



  useEffect(() => {
    if(props.location.state === undefined && swiper !== null){
      swiper.slideTo(0)
    }
    if(props.location.state !== undefined && swiper !== null){
      swiper.slideTo(props.location.state.key)
    }
  }, [swiper, props.location.state])


  const handleChangeRoute = (location, code) => {
    history.push(`/expeditions/expedition-${location}-${code}`)
  }

  return(
    <Section id="headerExpeditions">
      <div style={{ display: 'none' }}>
        <img src={SpecialImage} onLoad={(e) => setTimeout(() => setSpecialImgLoaded(false) , 2000)  } />
        <img src={HorseRidingImage} onLoad={(e) => setTimeout(() => setHorseRidingImgLoaded(false) , 2000)  } />
        <img src={HikingImage} onLoad={(e) => setTimeout(() => setHikingImgLoaded(false) , 2000)  } />
        <img src={NavigationsImage} onLoad={(e) => setTimeout(() => setNavigationImgLoaded(false) , 2000)  } />
        <img src={FullDayPaineImage} onLoad={(e) => setTimeout(() => setFullDayImgLoaded(false) , 2000)  } />
      </div>

      <SwiperWrapper style={{ overflow: 'hidden' }}>
        <Swiper getSwiper={updateSwiper} {...params} >
          {expeditions.map((item, index) => {
            const Icon = item.icon
            return(
              <div key={index}>
                <div className="swiper-slide-content">
                  <SlideContent>
                    <div className="slide-legend">
                      <div className="slide-icon-legend">
                        <Question/>
                      </div>
                    F/D = FULL DAY<br/>
                    H/D = HALF DAY
                    </div>
                    <div className="slide-content-icon">
                      <Icon />
                    </div>
                    <div className="slide-content-title">
                      <div className="title-small">
                        <FormattedMessage id="menu.expediciones"/>
                      </div>
                      <div className="title-big">
                        {item.name}
                      </div>
                    </div>
                    <div className="menu">
                      { item.links.map((link, _index) => 
                        <div 
                          key={_index} 
                          onClick={() => handleChangeRoute(link.path, link.code)}
                          className="menu-item"
                        >
                          {link.name}
                        </div>
                      )}
                      
                    </div>
                  </SlideContent>
                </div>
                <div className="swiper-slide-mask"></div>
                <div className="swiper-slide-image" style={{backgroundImage: `url(${item.image})`}} />
              </div>
            )
          })}
        </Swiper>
      </SwiperWrapper>
    </Section>
  )
}


function propsAreEqual(prev, next) {
  if(prev.location.state !== undefined){
    return prev.location.state.key ===  next.location.state.key
  } 
  else {
    return true;
  }
}


export default memo(Expeditions, propsAreEqual)

