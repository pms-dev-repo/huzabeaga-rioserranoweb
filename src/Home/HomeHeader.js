import React, {  memo } from "react";
import styled, { css } from 'styled-components'
import BookingmodalPortal from '../booking/BookingmodalPortal'


const Section = styled.div`
  height: calc(100vh - 0px);
  position: relative;
  margin-bottom: 0px;
  color: #ffffff;
  text-align: left;
  z-index: 2;
  /* overflow: hidden; */
  /* background-color: #000; */
  @media (max-width: 1000px) {
    /* height: 768px; */
    height: calc(100vh - 0px);
    background-position-x: -150px;
    
  }

  @media (max-width: 480px) {
   /*  height: 640px; */
    height: calc(100vh - 0px);
    background-position-x: -550px;
    
  }
`

const BgImageTop = styled.div`
  background-image: ${props => props.image && css ? `url(${props.image})` : null };
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  height: calc(100vh - 0px);

  @media (max-width: 480px) {
    background-position: bottom left;
    background-position-x: -550px;
  }
`

const BgImageBottom = styled.div`
  background-image: ${props => props.image && css ? `url(${props.image})` : null };
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  height: calc(100vh - 0px);
  opacity: 1;
  position: absolute;
  bottom: 0;
  z-index: 2;
  left: 0;
  right: 0;
  @media (max-width: 480px) {
    background-position-x: -200px;
  }
`

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  z-index: 10;
  img{
    width: 50%;
    height: 100%;
    display: block;
    margin: auto;
    @media (max-width: 1000px) {
      width: 70%;
   }
    @media (max-width: 480px) {
        width: 100%;
    }

  }
`
const DPContainer = styled.div`
  width: 1000px;
  margin: auto;
  position: absolute;
  bottom: 60px;
  transform: translate(-50%);
  left: 50%;
  border-radius: 0px;
  display: flex;
  z-index: 4;
  @media (max-width: 1000px) {
    display: none;
  }
`


function HomeHeader({imgBgTop, imgBgBottom}){
  return(
    <Section id="header">
      <BgImageBottom image={imgBgBottom} data-scroll data-scroll-speed="-1" data-scroll-target="#header"/>
      <BgImageTop image={imgBgTop}  data-scroll data-scroll-speed="-3" data-scroll-position="top" data-scroll-target="#header"/>
     
      <DPContainer >
         <BookingmodalPortal></BookingmodalPortal>
      </DPContainer>
    </Section>
  )
}


function propsAreEqual(prev, next) {
  return prev.language === next.language
}


export default memo(HomeHeader, propsAreEqual)
