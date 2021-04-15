import React, { useEffect, useState, useLayoutEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll'
import styled from 'styled-components'
import Swiper from 'react-id-swiper';

import { FormattedMessage } from 'react-intl'

import { ButtonGhost, ButtonGhostLink } from '../Styles/Button'

import COVAurl from '../../images/covid-gallery/img-01.jpg'
import COVBurl from '../../images/covid-gallery/img-02.jpg'
import COVCurl from '../../images/covid-gallery/img-03.jpg'
import COVDurl from '../../images/covid-gallery/img-04.jpg'
import COVEurl from '../../images/covid-gallery/img-05.jpg'
import COVFurl from '../../images/covid-gallery/img-06.jpg'
import COVGurl from '../../images/covid-gallery/img-07.jpg'
import COVHurl from '../../images/covid-gallery/img-08.jpg'
import COVIurl from '../../images/covid-gallery/img-09.jpg'
import COVJurl from '../../images/covid-gallery/img-10.jpg'

import ImgCovidA from '../../images/covid-gallery/covid1.png'
import ImgCovidB from '../../images/covid-gallery/covid2.png'
import ImgCovidC from '../../images/covid-gallery/covid3.png'
import ImgCovidD from '../../images/covid-gallery/covid4.png'
import ImgCovidE from '../../images/covid-gallery/covid5.png'
import ImgCovidF from '../../images/covid-gallery/covid6.png'
import ImgCovidG from '../../images/covid-gallery/covid7.png'

import Bird from '../../images/home/birds_pattern-white.png'

import Modal from 'react-responsive-modal'
import YouTube from 'react-youtube'
import { css } from "@emotion/core";
import VideoIcon from '../icons/video-icon'
import BarLoader from "react-spinners/BarLoader";

import CovidVid from '../../images/covid-gallery/video.jpg'

import DonwloadEn from '../../files/en_covid.pdf'
import DonwloadEs from '../../files/es_covid.pdf'
import DonwloadPt from '../../files/pt_covid.pdf'


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
    }
    &-mask{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(48, 45, 42, 0)
    }
    &-image{
      height: 100%;
      background-position: center;
      background-size: cover;
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
    width: 8px;
    height: 8px;
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

    @media (max-width: 1000px) {
      right: 8px;
      top: 55%;
    }

    @media (max-width: 480px) {
      right: 8px;
      top: 55%;
    }
  }

  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    display: block;
    margin: 20px 0px;

    @media (max-width: 480px) {
      margin: 10px 0px;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: transparent;
    border: 2px solid white;
  }
`

const SlideContent = styled.div`
padding: 40px;
display: flex;
flex-direction: row;
@media (max-width: 480px) {
  padding: 40px 40px 40px 0px;
}
.left{
  padding: 45px;
  width: 700px;
  height: 500px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: rgba(48,45,42,0.67);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-special{
    width: 1030px;
    border-radius: 5px;
    background-color: rgba(48,45,42,0.67);
    padding: 45px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }

    @media (max-width: 1000px) {
      border-radius: 5px;
      &-special{
        max-width: 700px;
        border-radius: 5px;
      }
    }

  @media (max-width: 480px) {
    width: 280px;
    height: auto;
    padding: 12px;
    &-special{
      width: 280px;
      height: auto;
      padding: 12px;
    }
  }
  
}

.right{
  width: 330px;
  height: 500px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgba(131,56,50,0.67);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 20%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
}

.box-tittle{
    font-size: 35px;
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 7.5px;
    line-height: 1;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      margin-top: 20px;
      font-size: 22px;
      line-height: 1.2;
    }
  }

  .box-text{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 2;
    letter-spacing: .3px;
    margin-bottom: 20px;
    max-width: 568px;
      &-special{
        font-size: 14px;
        color: #FFFFFF;
        line-height: 2;
        letter-spacing: .3px;
        margin-bottom: 20px;
        max-width: 1068px;
      }
      @media (max-width: 480px) {
      line-height: 1.5;
      font-size: 12px;
      &-special{
        font-size: 12px;
        line-height: 1.5;
      }
    }
  }

  .box-buttons{
    button{
      margin-right: 30px;
    }
    @media (max-width: 480px) {
      button{
        margin-right: 15px;
      }
      button, a{
        padding: 8px 3%;
        font-size: 11px;
      }
    }
  }


  .lista{
    list-style: none;
    padding: 0px;

    li{
      line-height: 1.5;
      padding-left: 1em;
      text-indent: -0.8em;
      @media (max-width: 480px) {
      line-height: 1.4;
      }
    }

    li:before {
      content: '›';
      padding-right: 5px;
      font-size: 1.5em;
    }
  }

  .bird{
    position: absolute;
    top: -130px;
    left: 550px;
    @media (max-width: 480px) {
      display: none;
    }
    

  }

  a{
    color: white;
    text-decoration: none;
  }
`
const Recuadro = styled.div`
    width: 100%;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 100%;
      height: auto;
      max-width: 700px;
    }
    @media (max-width: 480px) {
      width: auto;
      height: auto;
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

export default function Covid(props) {


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

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0
    },
  };

  const [visible, setVisble] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [videoCode, setVideoCode] = useState(undefined)

  const [document, setDocument] = useState(undefined)

  const [swiper, updateSwiper] = useState(null);

  const [slideImageALoaded, setSlideImageALoaded] = useState(true)
  const [slideImageBLoaded, setSlideImageBLoaded] = useState(true)
  const [slideImageCLoaded, setSlideImageCLoaded] = useState(true)
  const [slideImageDLoaded, setSlideImageDLoaded] = useState(true)
  const [slideImageELoaded, setSlideImageELoaded] = useState(true)
  const [slideImageFLoaded, setSlideImageFLoaded] = useState(true)
  const [slideImageGLoaded, setSlideImageGLoaded] = useState(true)
  const [slideImageHLoaded, setSlideImageHLoaded] = useState(true)
  const [slideImageILoaded, setSlideImageILoaded] = useState(true)
  const [slideImageJLoaded, setSlideImageJLoaded] = useState(true)



  useEffect(() => {
    if (
      props.refMain.current !== undefined &&
      slideImageALoaded === false &&
      slideImageBLoaded === false &&
      slideImageCLoaded === false &&
      slideImageDLoaded === false &&
      slideImageELoaded === false &&
      slideImageFLoaded === false &&
      slideImageGLoaded === false &&
      slideImageHLoaded === false &&
      slideImageILoaded === false &&
      slideImageJLoaded === false


    ) {
      props.onSetLoading(false)
      handleScroll()
    };
    return () => {
      props.setInitTop(0)
      props.setPosition(0)
      props.setDirection(null)
      if (props.paretnRef.current !== null) {
        props.paretnRef.current.destroy()
        props.paretnRef.current = null;
        props.refMain.current.style = ""
      }
    }
  }, [
    slideImageALoaded,
    slideImageBLoaded,
    slideImageCLoaded,
    slideImageDLoaded,
    slideImageELoaded,
    slideImageFLoaded,
    slideImageGLoaded,
    slideImageHLoaded,
    slideImageILoaded,
    slideImageJLoaded
  ])


  useEffect(() => {
    if (props.lang === 'es') {
      setVideoCode('LMPnrOpeWng')
      setDocument(DonwloadEs)
    }
    if (props.lang === 'en' || props.lang === 'zh') {
      setVideoCode('sn7-evZlwPI')
      setDocument(DonwloadEn)
    }
    if (props.lang === 'pt') {
      setVideoCode('W39fywS1ZLA')
      setDocument(DonwloadPt)
    }
  }, [props.lang])

  const handleGotoLast = (e) => {
    e.preventDefault()
    swiper.slideTo(10)
  }

  const handleScroll = () => {
    props.setInitTop(0)
    props.setPosition(0)
    props.setDirection(null)
    if (props.paretnRef.current !== null) {
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
    <Section id="headerExpedition">
      <div style={{ display: 'none' }}>
        <img src={COVAurl} onLoad={(e) => setTimeout(() => setSlideImageALoaded(false), 2000)} />
        <img src={COVJurl} onLoad={(e) => setTimeout(() => setSlideImageJLoaded(false), 2000)} />
        <img src={COVBurl} onLoad={(e) => setTimeout(() => setSlideImageBLoaded(false), 2000)} />
        <img src={COVCurl} onLoad={(e) => setTimeout(() => setSlideImageCLoaded(false), 2000)} />
        <img src={COVDurl} onLoad={(e) => setTimeout(() => setSlideImageDLoaded(false), 2000)} />
        <img src={COVEurl} onLoad={(e) => setTimeout(() => setSlideImageELoaded(false), 2000)} />
        <img src={COVFurl} onLoad={(e) => setTimeout(() => setSlideImageFLoaded(false), 2000)} />
        <img src={COVGurl} onLoad={(e) => setTimeout(() => setSlideImageGLoaded(false), 2000)} />
        <img src={COVHurl} onLoad={(e) => setTimeout(() => setSlideImageHLoaded(false), 2000)} />
        <img src={COVIurl} onLoad={(e) => setTimeout(() => setSlideImageILoaded(false), 2000)} />
      </div>
      <SwiperWrapper style={{ overflow: 'hidden' }}>
        <Swiper getSwiper={updateSwiper} {...params}>
          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left-special">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery1.tittle" />
                  </div>

                  <div className="box-text">
                    <FormattedMessage id="covid.gallery1.content1" /><strong><FormattedMessage id="covid.gallery1.content2" /></strong><FormattedMessage id="covid.gallery1.content3" /><strong><FormattedMessage id="covid.gallery1.content4" /></strong><FormattedMessage id="covid.gallery1.content5" />
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink className="button" href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>
              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVAurl})` }} />
          </div>
          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery2.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><FormattedMessage id="covid.gallery2.content1" /><strong><FormattedMessage id="covid.gallery2.content2" /></strong></li>
                      <li><FormattedMessage id="covid.gallery2.content3" /><strong><FormattedMessage id="covid.gallery2.content31" /></strong><FormattedMessage id="covid.gallery2.content32" /></li>
                      <li><FormattedMessage id="covid.gallery2.content4" /><strong><FormattedMessage id="covid.gallery2.content5" /></strong><FormattedMessage id="covid.gallery2.content6" /></li>
                      <li><strong><FormattedMessage id="covid.gallery2.content7" /></strong><FormattedMessage id="covid.gallery2.content8" /></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidA} style={{ width: `40%` }} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVJurl})` }} />
          </div>


          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery3.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><strong><FormattedMessage id="covid.gallery3.content1" /></strong><FormattedMessage id="covid.gallery3.content2" /></li>
                      <li><strong><FormattedMessage id="covid.gallery3.content3" /></strong><FormattedMessage id="covid.gallery3.content4" /></li>
                      <li><FormattedMessage id="covid.gallery3.content5" /><strong><FormattedMessage id="covid.gallery3.content6" /></strong><FormattedMessage id="covid.gallery3.content7" /></li>
                      <li><strong><FormattedMessage id="covid.gallery3.content8" /></strong><FormattedMessage id="covid.gallery3.content9" /></li>
                      <li><FormattedMessage id="covid.gallery3.content10" /><strong><FormattedMessage id="covid.gallery3.content11" /></strong><FormattedMessage id="covid.gallery3.content12" /></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidB} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVBurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery4.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><FormattedMessage id="covid.gallery4.content1" /><strong><FormattedMessage id="covid.gallery4.content2" /></strong><FormattedMessage id="covid.gallery4.content3" /></li>
                      <li><FormattedMessage id="covid.gallery4.content4" /><strong><FormattedMessage id="covid.gallery4.content5" /></strong> </li>
                      <li><FormattedMessage id="covid.gallery4.content6" /></li>
                      <li><FormattedMessage id="covid.gallery4.content7" /><strong><FormattedMessage id="covid.gallery4.content8" /></strong> </li>
                      <li><FormattedMessage id="covid.gallery4.content9" /><strong><FormattedMessage id="covid.gallery4.content10" /></strong></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidC} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVCurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery5.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><FormattedMessage id="covid.gallery5.content1" /><strong><FormattedMessage id="covid.gallery5.content2" /></strong></li>
                      <li><FormattedMessage id="covid.gallery5.content3" /><strong><FormattedMessage id="covid.gallery5.content31" /></strong><FormattedMessage id="covid.gallery5.content32" /></li>
                      <li><strong><FormattedMessage id="covid.gallery5.content4" /></strong><FormattedMessage id="covid.gallery5.content5" /></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidD} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVDurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery6.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><strong><FormattedMessage id="covid.gallery6.content1" /></strong><FormattedMessage id="covid.gallery6.content2" /></li>
                      <li><FormattedMessage id="covid.gallery6.content3" /><strong><FormattedMessage id="covid.gallery6.content4" /></strong><FormattedMessage id="covid.gallery6.content5" /></li>
                      <li><FormattedMessage id="covid.gallery6.content6" /><strong><FormattedMessage id="covid.gallery6.content7" /></strong></li>
                      <li><FormattedMessage id="covid.gallery6.content8" /><strong><FormattedMessage id="covid.gallery6.content9" /></strong></li>
                      <li><strong><FormattedMessage id="covid.gallery6.content10" /></strong><FormattedMessage id="covid.gallery6.content11" /></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidE} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVEurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery7.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><FormattedMessage id="covid.gallery7.content1" /><strong><FormattedMessage id="covid.gallery7.content2" /></strong></li>
                      <li><FormattedMessage id="covid.gallery7.content3" /><strong><FormattedMessage id="covid.gallery7.content4" /></strong></li>
                      <li><FormattedMessage id="covid.gallery7.content5" /><strong><FormattedMessage id="covid.gallery7.content6" /></strong><FormattedMessage id="covid.gallery7.content7" /></li>
                      <li><FormattedMessage id="covid.gallery7.content8" /><strong><FormattedMessage id="covid.gallery7.content9" /></strong><FormattedMessage id="covid.gallery7.content10" /></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidF} style={{ width: `40%` }} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVFurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery8.tittle" />
                  </div>

                  <div className="box-text">
                    <ul className="lista">
                      <li><FormattedMessage id="covid.gallery8.content1" /><strong><FormattedMessage id="covid.gallery8.content2" /></strong><FormattedMessage id="covid.gallery8.content3" /></li>
                      <li><FormattedMessage id="covid.gallery8.content4" /><strong><FormattedMessage id="covid.gallery8.content5" /></strong></li>
                      <li><FormattedMessage id="covid.gallery8.content6" /><strong><FormattedMessage id="covid.gallery8.content7" /></strong></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>

                <div className="right">
                  <img src={ImgCovidG} style={{ width: `40%` }} />
                </div>

              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVGurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left-special">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery9.tittle" />
                  </div>

                  <div className="box-text-special">
                    <ul className="lista">
                      <FormattedMessage id="covid.gallery9.content1" /><strong><FormattedMessage id="covid.gallery9.content2" /></strong><FormattedMessage id="covid.gallery9.content3" /><strong><FormattedMessage id="covid.gallery9.content4" /></strong><FormattedMessage id="covid.gallery9.content5" />
                      <li><FormattedMessage id="covid.gallery9.content6" /><strong><FormattedMessage id="covid.gallery9.content7" /></strong></li>
                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>
                <img className="bird" src={Bird} />
              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVHurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left-special">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery9.tittle" />
                  </div>

                  <div className="box-text-special">
                    <ul className="lista">
                      <li><FormattedMessage id="covid.gallery9.content8" /><strong><FormattedMessage id="covid.gallery9.content81" /></strong></li>
                      <li><FormattedMessage id="covid.gallery9.content9" /><strong><FormattedMessage id="covid.gallery9.content10" /></strong> </li>
                      <li><FormattedMessage id="covid.gallery9.content11" /><strong><FormattedMessage id="covid.gallery9.content12" />.</strong></li>
                      <FormattedMessage id="covid.gallery9.content13" /><strong><a href="mailto:reservas@rioserrano.com"><FormattedMessage id="covid.gallery9.content14" /></a></strong>

                    </ul>
                  </div>

                  <div className="box-buttons">
                    <ButtonGhost onClick={(e) => handleGotoLast(e)}>
                      <FormattedMessage id="covid.button.video" />
                    </ButtonGhost>
                    <ButtonGhostLink href={document} download>
                      <FormattedMessage id="covid.button.pdf" />
                    </ButtonGhostLink>
                  </div>
                </div>
                <img className="bird" src={Bird} />
              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVHurl})` }} />
          </div>

          <div>
            <div className="swiper-slide-content">
              <SlideContent>
                <div className="left-special">
                  <div className="box-tittle">
                    <FormattedMessage id="covid.gallery10.tittle" />
                  </div>
                  <Recuadro
                    style={{ backgroundImage: `url(${CovidVid})` }}
                    onClick={() => setVisble(true)}
                  >
                    <div className="video">
                      <VideoIcon />
                    </div>
                  </Recuadro>
                </div>
              </SlideContent>
            </div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{ backgroundImage: `url(${COVIurl})` }} />
          </div>


        </Swiper>
      </SwiperWrapper>

      <Modal
        open={visible}
        styles={{ overlay: { width: '100%' } }}
        onClose={() => { setVisble(false); setShowVideo(false) }}
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
              setTimeout(() => setShowVideo(true), 1000)
            }}
          />
        </div>
      </Modal>

    </Section>
  )
}