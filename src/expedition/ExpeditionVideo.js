import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Button } from '../styles/Button'
import Modal from 'react-responsive-modal'
import YouTube from 'react-youtube'
import { css } from "@emotion/core";
import VideoIcon from '../icons/video-icon'
import BarLoader from "react-spinners/BarLoader";
import HistoryVid from '../../images/home/history/video.jpg'



const Section = styled.div`
  position: relative;
  z-index: 1;
  background-color: #F0EFEF;
  padding: 60px 0 0 0;

  @media (max-width: 575px) {
    padding: 16px 24px 0px 24px;
  }
`

const SectionHeader = styled.div`
  max-width: 1050px;
  padding: 24px;
  margin: auto;
  margin-bottom: 32px;

  @media (max-width: 575px) {
    padding: 0;
  }

`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 575px) {
    font-size: 22px;
  }
`

const SectionIllus = styled.div`
  position: absolute;
  right: -2%;
  opacity: .20;
  font-size: 600px;
  top: 10%;
  line-height: 0;

  @media (max-width: 575px) {
    right: -90%;
    opacity: 0.05;
  }
`

const Actions = styled.div`
   text-align: center;
  @media (max-width: 1000px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      button  {
        margin-left: 0;
    }
      button + button{
        margin-left: 0;
        margin-top: 40px;
    }
  }

  @media (max-width: 575px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      button  {
        margin-left: 0;
        font-size: 12px;
        
    }
      button + button{
        margin-left: 0;
        margin-top: 20px;
    }
  }
`

const Recuadro = styled.div`

  width: 1000px;
  height: 540px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    height: 320px;
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
export default function ExpeditionVideo({videoH1, videoCode, videoCover}) {
  
  const [ visible, setVisble ] =  useState(false)
  const [ showVideo, setShowVideo ] =  useState(false)
  const iframe = useRef(null)

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      muted: 0,
      rel: 0
    },
  };


  return (
    <Section id="expeditionVideo">
      <div id="expeditionVideo" data-scroll data-scroll-speed="1">
        <SectionHeader>
          <Title>{videoH1}</Title>
        </SectionHeader>
        <Container>
          <Row data-scroll data-scroll-speed="1">
            <Col xl = "12" style = {{padding: 0 }} >
               <Recuadro 
                data-scroll
                data-scroll-speed="1" 
                style={{ backgroundImage: `url(${videoCover})` }} 
                onClick={() => setVisble(true)}
              >
                <div className="video">
                  <VideoIcon />
                </div>
              </Recuadro>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal 
        open={visible} 
        styles={{ overlay: { width: '100%'} }}
        onClose={() => {setVisble(false); setShowVideo(false)}} 
        blockScroll={false}
        focusTrapped={false}
        closeIconId="CloseIconVideo"
        center
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
            ref={iframe}
            videoId={videoCode} 
            opts={opts} 
            containerClassName="Pmodal-content-video-wrapper"
            onReady={(e) => {
              e.target.playVideo();
              setTimeout(() =>setShowVideo(true), 1000) 
            }}
          />
        </div>
      </Modal>
    </Section>
  );
}
