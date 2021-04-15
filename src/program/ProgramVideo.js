import React, { useState } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
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
  padding: 120px 0 120px 0;

  @media (max-width: 575px) {
    padding: 40px 24px 40px 24px;
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
  left: -5%;
  opacity: .20;
  font-size: 600px;
  top: 25%;
  line-height: 0;
  z-index: -1;
  @media (max-width: 575px) {
    right: -90%;
    opacity: 0.05;
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

  width: 100%;
  height: 540px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: auto;
  @media (max-width: 1400px) {
    width: 100%;
    margin: 0 32px;
  }
  @media (max-width: 1000px) {
    margin: 0px;
  }
  @media (max-width: 575px) {
    height: 320px;
    margin: 0px;
  }
  /* @media (max-width: 1200px) {
    right: 5%;
  }
  @media (max-width: 1000px) {
    right: 0;
    top: 0;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  } */
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
export default function ProgramVideo({videoCode, videoCover, illustration}) {
  
  const DynamicComponent = illustration;
  const [ visible, setVisble ] =  useState(false)
  const [ showVideo, setShowVideo ] =  useState(false)

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0
    },
  };



  return (
    <Section id="programVideo">
      <div id="programVideo" data-scroll data-scroll-speed="1">
        <Container>
          <Row data-scroll data-scroll-speed="1">
            <Col xl = "12" style = {{padding: 0 }} >
               <Recuadro 
                data-scroll
                style={{ backgroundImage: `url(${videoCover})` }} 
                onClick={() => setVisble(true)}
              >
                <div className="video">
                  <VideoIcon />
                </div>
              </Recuadro>
            </Col>
          </Row>

          <SectionIllus
            data-scroll
            data-scroll-speed="-1" 
            data-scroll-target="#programVideo"
          >
            <DynamicComponent />
          </SectionIllus>

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
