import React, { useState, useCallback, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Swiper from 'react-id-swiper'
import { ButtonGhost } from '../Styles/Button'


import {FormattedMessage} from 'react-intl';

const Section = styled.div`
  width: 100%;
  position: relative;
  background-color: #000;
  z-index: 3;
  overflow: hidden;
  padding: 300px 0;
  @media (max-width: 480px) {
    padding: 80px 0 0 0;
  }
  
`
const BgImage = styled.div`
  background-image: ${props => props.image && css ? `url(${props.image})` : null };
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  position: absolute;
  top: -50px;
  left: 0;
  bottom: -100px;
  right: 0;
  z-index: -1;
  transition: background-image 0.2s ease-in-out;
`

const Title = styled.h2`
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 36px;
  letter-spacing: 15px;
  text-align: center;
  z-index: 3;
  color: #fff;
  @media (max-width: 480px) {
    font-size: 22px;
    letter-spacing: 8px;
    margin-bottom: 0px;
  }
`

const SliderWrap = styled.div`
  width: 50%;
  margin: auto;
  @media (max-width: 480px) {
    width: 90%;
  }
  .swiper-container{
    display: flex;
  }
  .swiper-wrapper{
    transition-duration: 750ms !important;
    height: auto;
  }
  .swiper-button{
    &-prev,
    &-next{
      position: absolute;
      top: initial;
      bottom: 16px;
      width: 48px;
      height: 48px;
      margin-top: -22px;
      z-index: 10;
      cursor: pointer;
      background-size: 48px 48px;
    }
    
    &-disabled{
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }
    &:focus{
      outline: 0;
    }
  }
`

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.25s ease;
  .slide-image{
    background-position: center;
    background-size: cover;
    transition: transform 5s;
    transform: scale(1.25);
  }
  &.swiper-slide-active{
    opacity: 1;
    .slide-image{
      transform: scale(1);
    }
  }
  @media (max-width: 1000px) {
    padding: 40px;
    margin-top: 20%;
  }

  @media (max-width: 480px) {
    margin-top: 3%;
    padding: 20px;
    
  }
`


const SlideContent = styled.div`
  color: white;
  text-align: center;
  z-index: 2;

  .title{
    font-size: 35px;
    margin-bottom: 20px;
    @media (max-width: 480px) {
    font-size: 28px;
    }
  }
  .text{
    max-width: 480px;
    margin: auto;
    font-weight: 500;
    letter-spacing: 1.4px;
    font-size: 14px;
  }
`

const SlideHr = styled.div`
  width: 48px;
  height: 2px;
  background-color: white;
  margin: 48px auto;
`

const SliderButtons = styled.div`
  margin: auto; 
  display: flex;
  margin-top: 64px;
  @media (max-width: 480px) {
    margin: 20px 0 70px 0;
  }
  .next, .prev{
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-size: 48px 48px;
  }
  .next{
    margin-right: auto;
    margin-left: 5px;
  }
  .prev{
    margin-left: auto;
    margin-right: 5px;
  }
`

const SliderCounter = styled.div`
  color: #fff;
  justify-self: center;
  align-self: center;
  margin: 0 16px;
`
const NextButton = styled.div`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='52.645' height='52.645' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg transform='translate(52.645 52.645) rotate(180)' clip-path='url(%23a)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647a24.207,24.207,0,0,1-13.6-4.154,24.4,24.4,0,0,1-8.813-10.7A24.29,24.29,0,0,1,4.154,10.724a24.4,24.4,0,0,1,10.7-8.813A24.322,24.322,0,0,1,44.492,37.923a24.4,24.4,0,0,1-10.7,8.813A24.169,24.169,0,0,1,24.323,48.647Zm0-46.438A22.008,22.008,0,0,0,11.959,5.985a22.183,22.183,0,0,0-8.013,9.73A22.084,22.084,0,0,0,5.985,36.688a22.178,22.178,0,0,0,9.73,8.012,22.087,22.087,0,0,0,20.973-2.039,22.178,22.178,0,0,0,8.012-9.73,22.087,22.087,0,0,0-2.039-20.973,22.183,22.183,0,0,0-9.73-8.013A21.978,21.978,0,0,0,24.323,2.208ZM23.107,32.844h0a1.216,1.216,0,0,1-1.216-1.223V17.026a1.216,1.216,0,0,1,2.067-.851l7.3,7.3a1.241,1.241,0,0,1,0,1.727l-7.3,7.3A1.209,1.209,0,0,1,23.107,32.844Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
  &:hover{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cg transform='translate(52.645 52.645) rotate(180)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647A24.33,24.33,0,0,1,14.856,1.911,24.33,24.33,0,0,1,33.791,46.735,24.171,24.171,0,0,1,24.323,48.647Zm-1.216-32.82h0a1.217,1.217,0,0,0-1.216,1.2V31.621a1.216,1.216,0,0,0,2.067.875l7.3-7.3a1.236,1.236,0,0,0,0-1.727l-7.3-7.3a1.21,1.21,0,0,0-.851-.347Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
   
  };
  &:focus{
      outline: 0;
    }
`

const PrevButton = styled.div`
   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='52.645' height='52.645' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647a24.208,24.208,0,0,1-13.6-4.154,24.4,24.4,0,0,1-8.813-10.7A24.29,24.29,0,0,1,4.154,10.724a24.4,24.4,0,0,1,10.7-8.813A24.322,24.322,0,0,1,44.492,37.923a24.4,24.4,0,0,1-10.7,8.813A24.169,24.169,0,0,1,24.323,48.647Zm0-46.438A22.008,22.008,0,0,0,11.959,5.985a22.183,22.183,0,0,0-8.013,9.73A22.084,22.084,0,0,0,5.985,36.688a22.178,22.178,0,0,0,9.73,8.012,22.087,22.087,0,0,0,20.973-2.039,22.178,22.178,0,0,0,8.012-9.73,22.087,22.087,0,0,0-2.039-20.973,22.183,22.183,0,0,0-9.73-8.013A21.978,21.978,0,0,0,24.323,2.208ZM23.107,32.844h0a1.216,1.216,0,0,1-1.216-1.223V17.026a1.216,1.216,0,0,1,2.067-.851l7.3,7.3a1.241,1.241,0,0,1,0,1.727l-7.3,7.3A1.209,1.209,0,0,1,23.107,32.844Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
  &:hover{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647A24.33,24.33,0,0,1,14.856,1.911,24.33,24.33,0,0,1,33.791,46.735,24.171,24.171,0,0,1,24.323,48.647Zm-1.216-32.82h0a1.217,1.217,0,0,0-1.216,1.2V31.621a1.216,1.216,0,0,0,2.067.875l7.3-7.3a1.236,1.236,0,0,0,0-1.727l-7.3-7.3a1.21,1.21,0,0,0-.851-.347Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/svg%3E");
  }
   
  &:focus{
    outline: 0;
  }  
`

const content = [{
    title: <FormattedMessage id="programs.ai.titulo"/>,
    desc: <FormattedMessage id="home.programs.allInclusive"/>,
    link: '/program-all-inclusive'
  },
  {
    title: <FormattedMessage id="programs.fb.titulo"/>,
    desc: <FormattedMessage id="home.programs.fullBoard"/>,
    link: '/program-full-board'
  }
]

export default function HomePrograms({onChangeRoute, images}) {
  
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);
  
  const params = {
    initialSlide: 0,
    getSwiper: updateSwiper
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const updateIndex = useCallback(() => updateCurrentIndex(swiper.realIndex), [
    swiper
  ]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on("slideChange", updateIndex);
    }

    return () => {
      if (swiper !== null) {
        swiper.off("slideChange", updateIndex);
      }
    };
  }, [swiper, updateIndex]);


  return (
    <Section id="programs">
      <BgImage image={images[currentIndex]} data-scroll data-scroll-speed="-1.5" data-scroll-call="dynamicBackground" data-scroll-repeat/>
      <Title><FormattedMessage id='menu.programas'/></Title>
      <SliderWrap>
        <Swiper  {...params}>
          { content.map((slide, index) => 
            <Slide key={index}> 
              <SlideContent>
                <div className="title">
                  {slide.title}
                </div>
                <div className="text">
                  {slide.desc}
                </div>
                <SlideHr />
                <ButtonGhost onClick={() => onChangeRoute(slide.link)}>
                  <FormattedMessage id='button.explorar'/>
                </ButtonGhost>
              </SlideContent>
            </Slide>
          )}
        </Swiper>
        <SliderButtons>
          <NextButton className="prev" onClick={goPrev} />
          <div className='.asdf'></div>
          <PrevButton className="next" onClick={goNext} />
        </SliderButtons>
      </SliderWrap>
    </Section>
  )
}
