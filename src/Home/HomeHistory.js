import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components'
import Logo from '../../images/home/abstract-logo-white.svg'
import { Button } from '../styles/Button'
import VideoIcon from '../icons/video-icon'
import SectionBg from '../../images/home/svg-historia.svg'
import {FormattedMessage} from 'react-intl'
import Modal from 'react-responsive-modal'
import YouTube from 'react-youtube'
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const ArrowIcon = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><defs><clipPath id="a"><rect width="24" height="24" fill="none"/></clipPath></defs><g clipPath="url(#a)"><rect width="24" height="24" fill="rgba(255,255,255,0)"/><path d="M18.082.148a.5.5,0,0,1,.71,0l1.06,1.06a.48.48,0,0,1,0,.7l-9.19,9.19a.75.75,0,0,1-.53.22h-.26a.75.75,0,0,1-.53-.22L.152,1.908a.48.48,0,0,1,0-.7L1.212.148a.5.5,0,0,1,.71,0L10,8.228Z" transform="translate(1.998 6.682)"/></g></svg>
  )
}


const Section = styled.div`
  position: relative;
  padding: 170px 0;
  background-color: #fff;
  padding-bottom: 0;
  z-index: 1;
  @media (max-width: 1000px) {
    padding: 170px 0;
  }
  @media (max-width: 480px) {
      padding: 50px 0 ;
  }
`
const BgImage = styled.img`
  position: absolute;
  right: 60%;
  top: 10%;
  opacity: .25;
  z-index: -1;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
   
  }
  
`
const Actions = styled.div`
   text-align: center;
  @media (max-width: 1000px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      
  }
  `

const Container = styled.div`
  max-width: 1432px;
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  button{
    position: absolute;
    right: 20%;
    top: 25%;
    z-index: 111;
    @media (max-width: 1000px) {
        right: 0;
        top: 0;
        position: relative;
        margin-bottom: 70px;
      }
    }
  .image{
    z-index: 1;
    position: absolute;
    width: 430px;
    height: 240px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    right: 15%;
    top: 15%;
   
      @media (max-width: 1200px) {
      right: 5%;
    }
      @media (max-width: 1000px) {
        right: 0;
        top: 0;
        position: relative;
        width: 100%;
        margin-bottom: 20px;
      }
  }

  @media (max-width: 480px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`
const Recuadro = styled.div`
    z-index: 1;
    position: absolute;
    width: 430px;
    height: 240px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    right: 15%;
    top: 15%;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (max-width: 1200px) {
      right: 5%;
    }
      @media (max-width: 1000px) {
        right: 0;
        top: 0;
        position: relative;
        width: 100%;
        margin-bottom: 20px;
      }
    .video{
      font-size: 100px;
      color: white;
      opacity: 0.5;
      width: 100%;
      height: 240px;
      padding-top: 40px;
      text-align: center;
      transition: all 0.45s;
      &:hover{
        opacity: 0.9
         }

      }
  `

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  text-align: left;
  color: #302D2A;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    text-align: center;
    margin: 0 ;
  }
  @media (max-width: 480px) {
      font-size: 22px;
      letter-spacing: 8px;
      text-align: center;
      }
`
const Text = styled.p`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  max-width: 620px;
  margin-right: auto;
  margin-left: 48px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 124px;
  @media (max-width: 1150px) {
    max-width: 450px;
  }
  @media (max-width: 1000px) {
    text-align: center;
    margin-left: auto;
    max-width: 620px;
  }
  @media (max-width: 480px) {
      text-align: center;
    
      }
`



const SwiperWrapper = styled.div`
  width: 100%;
  .swiper-wrapper {
    
  }
  .swiper-slide{
    overflow: hidden;
    flex-shrink: 0;
    /* width: 100% !important; */
    height: 100%;
    position: relative;
    transition-duration: 1s !important;
    transition: opacity 0.25s ease; 
    opacity: 0 !important;
    > div {
      height: 600px;
      background-position: center;
      background-size: cover;
      @media (max-width: 480px) {
      height: 420px;
      }
    }
  }
  .swiper-slide-active{
    opacity: 1 !important;
  }

  .swiper-button-prev {
    left: 16px;
    right: auto;
  }
  .swiper-button-next {
    left: 80px;
    right: auto;
    transform: rotate(180deg);
  }
  .swiper-button-prev,
  .swiper-button-next {
    &:focus{
      outline: 0;
    }
  }

  .slide{
    padding: 50px;
    @media (max-width: 480px) {
      padding: 15px;
      }

    .slide-content{
      border-radius: 5px 5px 5px 5px;
      -moz-border-radius: 5px 5px 5px 5px;
      -webkit-border-radius: 5px 5px 5px 5px;
      border: 0px solid #000000;
      background-color: rgba(48, 45, 42, 0.5);
      /* box-shadow: 0px 0px 220px 140px rgba(38, 35, 33, 0.44),
                  inset 3px -1px 100px 220px rgba(38, 35, 33, 0.44); */
      padding: 0px 30px;
      font-size: 14px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      max-width: 800px;
      margin: auto;
      text-align: center;
      color: white;
      height: 50%;

      @media (max-width: 480px) {
      font-size: 14px;
      max-width: 450px;
      padding: 0px 20px;
      height: 70%;
      }

    }
    .slide-titulo{
      margin-top: 15%;
      font-size: 46px;
      padding-top: 30px;

      @media (max-width: 480px) {
      font-size: 32px;
      }
    }

    .slide-iso{
      margin-bottom: 24px;
      max-width: 240px;

    }
  }

 
`

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  max-width: 620px;
  margin: auto;
`
const Tab = styled.div`
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  color: ${props => props.active === true ? '#833832' : '#302D2A'};
  & ~ & {
    margin-left: 50px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 20;
    & ~ & {
    margin-left: auto;
    }
      }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20;
    & ~ & {
    margin-left: 14px;
    }
      }
`
const TabContent = styled.div`
  height: 700px;
  padding: 120px;
`


export function HomeHistory({HistoryVid, slides}){


  const [ selectedTab, setSelectedTab] = useState(1)
  const [swiper, updateSwiper] = useState(null);

  const [ visible, setVisble ] =  useState(false)
  const [ showVideo, setShowVideo ] =  useState(false)

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      rel:0,
    },
  };
  
  const params = {
    effect: 'fade'
  }

  const goToSlide = (index) => {
    if (swiper !== null) {
      swiper.slideTo(index);
    }
  };

  
  const config = [
    {
    nombre: <FormattedMessage id='home.historia.year.2000'/>,
    content: <FormattedMessage id='home.historia.2000'/>,
    background: `${slides[0]}`
   },
   {
    nombre: <FormattedMessage id='home.historia.year.2002'/>,
    content: <FormattedMessage id='home.historia.2002'/>,
    background: `${slides[1]}`
  },
  {
    nombre: <FormattedMessage id='home.historia.year.2005'/>,
    content: <FormattedMessage id='home.historia.2005'/>,
    background: `${slides[2]}`
  },
  {
    nombre: <FormattedMessage id='home.historia.year.2008'/>,
    content: <FormattedMessage id='home.historia.2008'/>,
    background: `${slides[3]}`
  },
  {
    nombre: <FormattedMessage id='home.historia.year.2018'/>,
    content: <FormattedMessage id='home.historia.2018'/>,
    background: `${slides[4]}`
  },
  {
    nombre: <FormattedMessage id='home.historia.year.today'/>,
    content: <FormattedMessage id='home.historia.hoy'/>,
    background: `${slides[6]}`
  }]


  return (
    <Section id="history">
      <Container>
      { <BgImage 
          src={SectionBg}
          data-scroll
          data-scroll-speed="-2" 
        /> }
        <Title><FormattedMessage id='home.historia.titulo'/></Title>
        <Text>
          <FormattedMessage id='home.historia.bajada'/>
        </Text>
        <Recuadro 
          data-scroll
          data-scroll-speed="1" 
          style={{ backgroundImage: `url(${HistoryVid})` }} 
          onClick={() => setVisble(true)}
        >
          <div className="video">
            <VideoIcon />
          </div>
        </Recuadro>

        <Modal 
          open={visible} 
          styles={{ overlay: { width: '100%'} }}
          onClose={() => {setVisble(false); setShowVideo(false)}} 
          blockScroll={false}
          focusTrapped={false}
          center
          closeIconId="CloseIconVideo"
          classNames={{
            overlay: 'Poverlay',
            modal: 'PmodalVideo',
            closeButton: 'PcloseButton',
            closeIcon: 'PcloseIcon',
            transitionEnter: 'PtransitionEnter',
            transitionEnterActive: 'PtransitionEnterActive',
            transitionExit: 'PtransitionExit',
            transitionExitActive: 'PtransitionExitActive',
          }}
        >
          <div className="Pmodal-content-video" style={{ width: '100%', height: '100%' }}>
            <div style={{
              display: showVideo ? 'none' : 'flex',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 2,
              backgroundColor: '#0e0c0a',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div className="sweet-loading">
                <BarLoader
                  size={30}
                  color={"#ffffff"}
                  loading={true}
                />
              </div>
            </div>
            

            <YouTube 
              videoId="dNy0DYaa_ZQ" 
              opts={opts} 
              containerClassName="Pmodal-content-video-wrapper"
              onReady={(e) => {
                e.target.playVideo();
                setTimeout(() =>setShowVideo(true), 1000) 
              }}
              />
          </div>
        </Modal>

      </Container>
      

        <Tabs data-scroll data-scroll-speed="1" style={{ height: '100%'}}>
          { config.map((tab, index) => 
            <Tab 
              key={index}
              onClick={() => goToSlide(index)}
            >
              {tab.nombre}
              <ArrowIcon/>
            </Tab>
          )}
        </Tabs>
        <SwiperWrapper>
          <div data-scroll data-scroll-speed="1" style={{ height: '100%'}}>
            <Swiper getSwiper={updateSwiper} {...params} >
              
              { config.map((tab, index) => 
              <div key={index}> 
                <div 
                  className="slide" 
                  style={{
                    backgroundImage: `url(${tab.background})`,
                    
                  }}>
                  <div 
                  className="slide-content">
                      <div 
                      className="slide-titulo">
                        {tab.nombre === 'hoy' ? <FormattedMessage id='home.historia.hoy.titulo'/> : tab.nombre}
                    </div>
                    <div><img  className="slide-iso" src={Logo}/></div>
                    <div>
                      {tab.content}
                    </div>
                  </div>
                </div> 
              </div>
              
              )}
                
            </Swiper>
          </div>
        </SwiperWrapper>
    </Section>
  );

}

export default HomeHistory;