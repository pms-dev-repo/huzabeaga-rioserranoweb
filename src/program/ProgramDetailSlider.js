import React, { useState, useCallback, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Swiper from 'react-id-swiper'
import { ButtonGhost } from '../Styles/Button'


import {FormattedMessage} from 'react-intl';

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  overflow: hidden;
  padding: 120px 0;
  background-color: #F0EFEF;
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
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  transition: background-image 0.2s ease-in-out;
`


const SliderWrap = styled.div`
  width: 700px;
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
    margin-top: 0;
  }

  @media (max-width: 480px) {
    margin-top: 0;
    padding: 20px;
    
  }
`

const SectionContent = styled.div`
  /* > div + div{
    margin-top: 96px;
  } */
`

const SectionTitle = styled.div`
  padding: 24px;
  text-align: center;
  border: 1px solid white;
  margin-bottom: 80px;
  @media (max-width: 575px) {
      margin-bottom: 50px;
    }
  .title{
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 16px;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 8px;
    @media (max-width: 575px) {
      font-size: 22px;
      letter-spacing: 8px;
      text-align: center;
    }
  }
  .date-range{
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #ffffff;
  }
  .years{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ffffff;
  }
`

const SectionIncludes = styled.div`
  max-width: 720px;
  margin: auto;
  .title{
    font-size: 40px;
    color: #FFFFFF;
    letter-spacing: 10px;
    font-weight: 300;
    margin-bottom: 32px;
    @media (max-width: 575px) {
      font-size: 28px;
      letter-spacing: 0.4px;
    }
  }
  .list{
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    li {
      text-align: left;
      padding-left: 1em;
      text-indent: -1em;
      font-size: 14px;
      color: #ffffff;
      line-height: 1.25;
      letter-spacing: .3;
      @media (max-width: 575px) {
      line-height: 1.5;
    }
    }

    li:before {
      content: '›';
      padding-right: 5px;
      font-size: 1.5em;
    }
  }
`


const SliderButtons = styled.div`
  margin: auto; 
  display: flex;
  margin-top: 0px;
  @media (max-width: 1000px) {
    margin-top: 0px;
  }
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
  }
  .prev{
    margin-left: auto;
    margin-right: 24px;
  }
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

export default function ProgramDetailSlider({slider, includes, notIncludes, image}) {
  
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
    <SectionWrapper id="programsSlider" >
      <BgImage 
        image={image} 
        data-scroll 
        data-scroll-speed="-1.5" 
        data-scroll-call="dynamicBackground" 
        data-scroll-repeat 
        data-scroll-target="#programsSlider"
      />
      <SliderWrap>
        <SliderButtons style={{ marginBottom: 32 }}>
          <NextButton className="prev" onClick={goPrev} />
          <div className='.asdf'></div>
          <PrevButton className="next" onClick={goNext} />
        </SliderButtons>
        <Swiper  {...params}>
          { Object.keys(slider).map((slide, index) => 
            <Slide key={index}> 
              <SectionContent>
                <SectionTitle>
                  <div className="title">{slider[slide].title}</div>
                  <div className="date-range">{slider[slide].dates}</div>
                  <div className="years">{slider[slide].year}</div>
                </SectionTitle>
                <SectionIncludes>
                  <div className="title">
                  <FormattedMessage id="programs.fb.detallePrograma.includes.title"/>
                  </div>
                  <ul className="list">
                    { slider[slide].includes.map((text, index) => 
                      <li key={index}>{text}</li>
                    )}
                  </ul>
                </SectionIncludes>
                <SectionIncludes>
                <div className="title">
                  <FormattedMessage id="programs.fb.detallePrograma.notIncludes.title"/>
                </div>
                <div style={{ fontSize: 14, color: '#96908A', lineHeight: 2, letterSpacing: .3 }}>
                  <ul className="list">
                    { slider[slide].notIncludes.map((text, index) => 
                      <li key={index}>{text}</li>
                    )}
                  </ul>
                </div>
                </SectionIncludes>
              </SectionContent>
            </Slide>
          )}
        </Swiper>
        <SliderButtons>
          <NextButton className="prev" onClick={goPrev} />
          <div className='.asdf'></div>
          <PrevButton className="next" onClick={goNext} />
        </SliderButtons>
      </SliderWrap>
    </SectionWrapper>
  )
}
