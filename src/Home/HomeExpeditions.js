import React, { useRef } from 'react';
import styled, { css } from 'styled-components'
import { isMobile,isTablet, isSafari, isSafarimobile, isIPad13, isIPhone13 } from 'react-device-detect';
import { ButtonGhost } from '../Styles/Button'

import ThumbEscalada from '../../videos/thumbnails/escalada.jpg'
import ThumbCabalgata from '../../videos/thumbnails/cabalgata.jpg'
import ThumbHiking from '../../videos/thumbnails/hiking.jpg'
import ThumbNavegation from '../../videos/thumbnails/navegation.jpg'
import ThumbPaine from '../../videos/thumbnails/paine.jpg'

import ThumbMobileEscalada from '../../videos/thumbnails/mobile-escalada.jpg'
import ThumbMobileCabalgata from '../../videos/thumbnails/mobile-cabalgata.jpg'
import ThumbMobileHiking from '../../videos/thumbnails/mobile-hiking.jpg'
import ThumbMobileNavegation from '../../videos/thumbnails/mobile-navegation.jpg'
import ThumbMobilePaine from '../../videos/thumbnails/mobile-paine.jpg'

import ThumbTabletEscalada from '../../videos/thumbnails/tablet-escalada.jpg'
import ThumbTabletCabalgata from '../../videos/thumbnails/tablet-cabalgata.jpg'
import ThumbTabletHiking from '../../videos/thumbnails/tablet-hiking.jpg'
import ThumbTabletNavegation from '../../videos/thumbnails/tablet-navegation.jpg'
import ThumbTabletPaine from '../../videos/thumbnails/tablet-paine.jpg'

import VidEscalada from '../../videos/escalada.mp4'
import VidCabalgata from '../../videos/cabalgata.mp4'
import VidHiking from '../../videos/hiking.mp4'
import VidNavegation from '../../videos/navegation.mp4'
import VidPaine from '../../videos/paine.mp4'

import VidMobileEscalada from '../../videos/mobile-escalada.mp4'
import VidMobileCabalgata from '../../videos/mobile-cabalgata.mp4'
import VidMobileHiking from '../../videos/mobile-hiking.mp4'
import VidMobileNavegation from '../../videos/mobile-navegation.mp4'
import VidMobilePaine from '../../videos/mobile-paine.mp4'

import VidTabletEscalada from '../../videos/tablet-escalada.mp4'
import VidTabletCabalgata from '../../videos/tablet-cabalgata.mp4'
import VidTabletHiking from '../../videos/tablet-hiking.mp4'
import VidTabletNavegation from '../../videos/tablet-navegation.mp4'
import VidTabletPaine from '../../videos/tablet-paine.mp4'

import VidEscaladaW from '../../videos/escalada.webm'
import VidCabalgataW from '../../videos/cabalgata.webm'
import VidHikingW from '../../videos/hiking.webm'
import VidNavegationW from '../../videos/navegation.webm'
import VidPaineW from '../../videos/paine.webm'

import VidMobileEscaladaW from '../../videos/mobile-escalada.webm'
import VidMobileCabalgataW from '../../videos/mobile-cabalgata.webm'
import VidMobileHikingW from '../../videos/mobile-hiking.webm'
import VidMobileNavegationW from '../../videos/mobile-navegation.webm'
import VidMobilePaineW from '../../videos/mobile-paine.webm'

import VidTabletEscaladaW from '../../videos/tablet-escalada.webm'
import VidTabletCabalgataW from '../../videos/tablet-cabalgata.webm'
import VidTabletHikingW from '../../videos/tablet-hiking.webm'
import VidTabletNavegationW from '../../videos/tablet-navegation.webm'
import VidTabletPaineW from '../../videos/tablet-paine.webm'

import IconEspecials from '../../images/home/expeditions_especials_icon.svg'
import IconHorseRiding from '../../images/home/expeditions_horse_riding_icon.svg'
import IconHiking from '../../images/home/expeditions_hiking_icon.svg'
import IconNavegations from '../../images/home/expeditions_navegations_icon.svg'
import IconFullDay from '../../images/home/expeditions_full_day_paine_icon.svg'

import {FormattedMessage} from 'react-intl'


const Section = styled.div`
  position: relative;
  padding: 170px 0;
  background-color: #f0efef;
  overflow: hidden;
  @media (max-width: 480px) {
    padding: 0;
   
  }
`

const BgImage = styled.img`
  position: absolute;
  right: 0;
  opacity: .25;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
   
  }
  
`

const Container = styled.div`
  max-width: 1200px;
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 480px) {
    padding: 80px 24px 20px 24px;
   
  }
`

const Content = styled.div`
  max-width: 1300px;
`
const ImageLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 35%;
  background-image: ${props => props.image && css ? `url(${props.image})` : null };
  background-size: cover;
  z-index: 0;
  background-position: center;

  @media (max-width: 1000px) {
    display: none;
   
  }
`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  text-align: right;
  color: #302D2A;
  text-transform: uppercase;
  margin-right: 140px;
  @media (max-width: 1000px) {
    text-align: center;
    margin: 0 ;
  }
  @media (max-width: 480px) {
      font-size: 22px;
      letter-spacing: 8px;
    }
`
const Text = styled.p`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  max-width:520px;
  margin-left: auto;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 60px;
  @media (max-width: 1000px) {
    text-align: center;
    margin: 24px auto 50px;
  }
  @media (max-width: 480px) {
    margin: 24px 0 50px 0;
  }
`

const Expeditions = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;

  @media (max-width: 1000px) {
    flex-direction: initial;
    align-content: center ;
    margin: 0 auto;
  }
`

const Expedition = styled.div`
  position: relative;
  width: 0px;
  height: 490px;
 /*  margin: 16px; */
  flex: auto;
  overflow: hidden;
  z-index: 1;

  .video{

  }
  &:hover{
    .image{
      opacity: 0;
      transition: opacity .25s ease-in-out;
      -moz-transition: opacity .25s ease-in-out;
      -webkit-transition: opacity .25s ease-in-out;
    }
  }
  .image{
    position: absolute;

    object-fit: cover;
    opacity: 1;
    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;
  }
  .info{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 32px;
    padding-bottom:80px;
    background: rgba(48, 45, 42, 0.5 );
    text-align: center;
    justify-content: flex-end;
    align-items: center;
    color: white;
    &-title{
      font-size: 17px;
      letter-spacing: 6px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    &-description{
      letter-spacing: 1.4px;
      line-height: 1.5;
      font-size: 14px;
    }
    &-icon{
      margin-top: 24px;
      margin-bottom: 48px;
      width: 50px;
      height: 50px;
    }
    &-button{

    }
  }
  & ~ & {
    margin-left: 16px;
  }
  
  @media (max-width: 1000px) {
    width: 100%;
    height: 380px;

    .video{
      width: 100%;
    }
    .image{
      background-position: center center;
      height: 150%;
      width: 100%;
    }
    .info{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      padding: 32px;
      padding-bottom: 100px;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      justify-content: flex-end;
      align-items: center;
      color: white;
      &-title{
        font-size: 18px;
        letter-spacing: 6px;
        margin-bottom: 20px;
        font-weight: 600;
      }
      &-description{
        letter-spacing: 1.5px;
        line-height: 1.75;
        font-size: 14px;
        display:none;
      }
      &-icon{
        margin-top: 5px;
        margin-bottom: 10px;
      }
      &-button{

      }
    }
    & ~ & {
      margin-top: 16px;
      margin-left:0px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 220px;

  .video{
    width: 100%;
  
    }
    .image{
      height: 120%;
      width: 100%;
    }
    
  .info{
    padding: 40px;
    &-description{
      display: none
    }
    &-title{
      font-size: 18px;
      letter-spacing: 6px;
      margin-bottom: 10px;
      font-weight: 600;
    }
    &-icon{
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }
  & ~ & {
    margin-left: 0px;
    margin-top: 16px;
  }

}
`

function HomeExpeditions({onChangeRoute, bgImage, bgIllus}){

  const cabalgataVideo = useRef(null)
  const escaladaVideo = useRef(null)
  const hikingVideo = useRef(null)
  const navegationsVideo = useRef(null)
  const paineVideo = useRef(null)

  const expeditions = [{
      name: <FormattedMessage id="home.expeditions.specials.titulo"/>,
      icon: IconEspecials,
      ref: escaladaVideo,
      link: '/expeditions',
      key: 4,
      video : {
        mobile: {
          thumbnail:ThumbMobileEscalada,
          mp4: VidMobileEscalada,
          webm: VidMobileEscaladaW
        },
        tablet: {
          thumbnail:ThumbTabletEscalada,
          mp4: VidTabletEscalada,
          webm: VidTabletEscaladaW
        },
        desktop: {
          thumbnail:ThumbEscalada,
          mp4: VidEscalada,
          webm: VidEscaladaW
        }
      }
    },{
      name: <FormattedMessage id="home.expeditions.horseRiding.titulo"/>,
      icon: IconHorseRiding,
      ref: cabalgataVideo,
      link: '/expeditions',
      key: 2,
      video : {
        mobile: {
          thumbnail:ThumbMobileCabalgata,
          mp4: VidMobileCabalgata,
          webm: VidMobileCabalgataW
        },
        tablet: {
          thumbnail:ThumbTabletCabalgata,
          mp4: VidTabletCabalgata,
          webm: VidTabletCabalgataW
        },
        desktop: {
          thumbnail:ThumbCabalgata,
          mp4: VidCabalgata,
          webm: VidCabalgataW
        }
      }
    },{
      name: <FormattedMessage id="home.expeditions.hiking.titulo"/>,
      icon: IconHiking,
      ref: hikingVideo,
      link: '/expeditions',
      key: 0,
      video : {
        mobile: {
          thumbnail:ThumbMobileHiking,
          mp4: VidMobileHiking,
          webm: VidMobileHikingW
        },
        tablet: {
          thumbnail:ThumbTabletHiking,
          mp4: VidTabletHiking,
          webm: VidTabletHikingW
        },
        desktop: {
          thumbnail:ThumbHiking,
          mp4: VidHiking,
          webm: VidHikingW
        }
      }
    },{
      name: <FormattedMessage id="home.expeditions.navigations.titulo"/>,
      icon: IconNavegations,
      ref: navegationsVideo,
      link: '/expeditions',
      key: 3,
      video : {
        mobile: {
          thumbnail:ThumbMobileNavegation,
          mp4: VidMobileNavegation,
          webm: VidMobileNavegationW
        },
        tablet: {
          thumbnail:ThumbTabletNavegation,
          mp4: VidTabletNavegation,
          webm: VidTabletNavegationW
        },
        desktop: {
          thumbnail:ThumbNavegation,
          mp4: VidNavegation,
          webm: VidNavegationW
        }
      }
    },{
      name: <FormattedMessage id="home.expeditions.fullDayPaine.titulo"/>,
      icon: IconFullDay,
      ref: paineVideo,
      link: '/expeditions',
      key: 1,
      video : {
        mobile: {
          thumbnail:ThumbMobilePaine,
          mp4: VidMobilePaine,
          webm: VidMobilePaineW
        },
        tablet: {
          thumbnail:ThumbTabletPaine,
          mp4: VidTabletPaine,
          webm: VidTabletPaineW
        },
        desktop: {
          thumbnail:ThumbPaine,
          mp4: VidPaine,
          webm: VidPaineW
        }
      }
    }]

  return (
    <Section id="expeditions">
      <ImageLeft image={bgImage} data-scroll data-scroll-speed="-1" data-scroll-call="dynamicBackground" data-scroll-repeat/>
      <BgImage 
        src={bgIllus}
        data-scroll
        data-scroll-speed="2" 
        data-scroll-target="#expeditions"
        data-scroll-delay="0.05"
      />

      <Container 
        data-scroll 
        data-scroll-speed="1"   
      >
        <Content>
          <Title><FormattedMessage id="home.expeditions.titulo"/></Title>
          <Text>
            <FormattedMessage id="home.expeditions.bajada"/>
          </Text>
          <Expeditions 
            data-scroll 
            data-scroll-speed="0.25" 
          >
          
            { expeditions.map((item, index) => 
              <Expedition
                key={index}
                onLoadStart = {()=> item.ref.current.pause()}
                onMouseEnter={() => item.ref.current.play()}
                onMouseLeave={() => {
                  setTimeout(() => {
                    item.ref.current.currentTime = 0;
                    item.ref.current.pause();
                  }, 250) ;
                  
                }}
              >
                <img 
                  className="image" 
                  src={
                    isIPad13 === true ? 
                    item.video.tablet.thumbnail:
                    isTablet === true ? 
                    item.video.tablet.thumbnail:
                    isMobile === true ? 
                    item.video.mobile.thumbnail :
                    isIPhone13 === true ? 
                    item.video.mobile.thumbnail :
                    item.video.desktop.thumbnail
                  } 
                />
                <video className="video" ref={item.ref} 
                  src={
                    isIPhone13 ? item.video.mobile.mp4 :
                    isMobile ? item.video.mobile.mp4 :
                    isIPad13 ? item.video.tablet.mp4 :
                    isTablet ? item.video.tablet.mp4 :
                    isSafari ? item.video.desktop.mp4
                    : null
                  }
                  loop 
                  muted 
                  playsInline 
                  autoPlay 
                  preload="auto"
                >
                {isTablet === true ?
                  (<source src={item.video.tablet.mp4} type='video/mp4;' /> ,
                  <source src={item.video.tablet.webm} type='video/webm;' /> ) :
                  isMobile === true ? 
                  (<source src={item.video.mobile.mp4} type='video/mp4'/> ,
                  <source src={item.video.mobile.webm} type='video/webm'/>) : 
                  (<source src={item.video.desktop.mp4} type='video/mp4' /> ,
                  <source src={item.video.desktop.webm} type='video/webm' />)
                }
                </video>
                  <div className="info">
                    <div className="info-title">
                      {item.name}
                    </div>  
                      <img 
                        className="info-icon"
                        width="auto" 
                        height="auto" 
                        alt="logo-rioserrano" 
                        src={item.icon}
                      />
                    <ButtonGhost type="button" onClick={() => onChangeRoute(item.link, {key: item.key})}>
                      <FormattedMessage id='button.explorar'/>
                    </ButtonGhost>
                </div>
              </Expedition>
            )}
          </Expeditions>
        </Content>
      </Container>
    </Section>
  )
}

export default HomeExpeditions;