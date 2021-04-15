import React, { useEffect, useState, useLayoutEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll'
import styled from 'styled-components'
import Swiper from 'react-id-swiper';
import SIAUrl from '../../images/gallery/gallery-1.jpg'
import SIBUrl from '../../images/gallery/gallery-2.jpg'
import SICUrl from '../../images/gallery/gallery-3.jpg'
import SIDUrl from '../../images/gallery/gallery-4.jpg'
import SIEUrl from '../../images/gallery/gallery-5.jpg'
import SIFUrl from '../../images/gallery/gallery-6.jpg'
import SIGUrl from '../../images/gallery/gallery-7.jpg'
import SIHUrl from '../../images/gallery/gallery-8.jpg'
import SIIUrl from '../../images/gallery/gallery-9.jpg'
import SIJUrl from '../../images/gallery/gallery-10.jpg'
import SIKUrl from '../../images/gallery/gallery-11.jpg'
import SILUrl from '../../images/gallery/gallery-12.jpg'
import SIMUrl from '../../images/gallery/gallery-13.jpg'
import SINUrl from '../../images/gallery/gallery-14.jpg'
import SIOUrl from '../../images/gallery/gallery-15.jpg'
import SIPUrl from '../../images/gallery/gallery-16.jpg'
import SIQUrl from '../../images/gallery/gallery-17.jpg'
import SIRUrl from '../../images/gallery/gallery-18.jpg'
import SISUrl from '../../images/gallery/gallery-19.jpg'
import SITUrl from '../../images/gallery/gallery-20.jpg'
import SIUUrl from '../../images/gallery/gallery-21.jpg'


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

    @media (max-width: 480px) {
      right: 8px;
      top: 60%;
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
  .slide-content-icon{
    font-size: 58px;
    line-height: 0;
    margin-left: -15px;
  }
  .slide-content-title{
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin-bottom: 32px;
    text-align: center;
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

  @media (max-width: 1000px) {
      .slide-content-title{
      margin-bottom: 32px;
      text-align: center;
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
  }

  @media (max-width: 480px) {
      .slide-content-title{
      margin-bottom: 32px;
      text-align: center;
      .title-small{
        font-size: 14px;
        letter-spacing: 7px;
        line-height: 1;
        margin-bottom: 8px;
      }
      .title-big{
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 5px;
        line-height: 1;
        text-transform: uppercase;
      }
    }
  }
`

function Gallery(props){


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

  const [ slideImageALoaded, setSlideImageALoaded] = useState(true)
  const [ slideImageBLoaded, setSlideImageBLoaded] = useState(true)
  const [ slideImageCLoaded, setSlideImageCLoaded] = useState(true)
  const [ slideImageDLoaded, setSlideImageDLoaded] = useState(true)
  const [ slideImageELoaded, setSlideImageELoaded] = useState(true)
  const [ slideImageFLoaded, setSlideImageFLoaded] = useState(true)
  const [ slideImageGLoaded, setSlideImageGLoaded] = useState(true)
  const [ slideImageHLoaded, setSlideImageHLoaded] = useState(true)
  const [ slideImageILoaded, setSlideImageILoaded] = useState(true)
  const [ slideImageJLoaded, setSlideImageJLoaded] = useState(true)
  const [ slideImageKLoaded, setSlideImageKLoaded] = useState(true)
  const [ slideImageLLoaded, setSlideImageLLoaded] = useState(true)
  const [ slideImageMLoaded, setSlideImageMLoaded] = useState(true)
  const [ slideImageNLoaded, setSlideImageNLoaded] = useState(true)
  const [ slideImageOLoaded, setSlideImageOLoaded] = useState(true)
  const [ slideImagePLoaded, setSlideImagePLoaded] = useState(true)
  const [ slideImageQLoaded, setSlideImageQLoaded] = useState(true)
  const [ slideImageRLoaded, setSlideImageRLoaded] = useState(true)
  const [ slideImageSLoaded, setSlideImageSLoaded] = useState(true)
  const [ slideImageTLoaded, setSlideImageTLoaded] = useState(true)
  const [ slideImageULoaded, setSlideImageULoaded] = useState(true)


  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      slideImageALoaded === false  &&
      slideImageBLoaded === false  &&
      slideImageCLoaded === false  &&
      slideImageDLoaded === false  &&
      slideImageELoaded === false  &&
      slideImageFLoaded === false  &&
      slideImageGLoaded === false  &&
      slideImageHLoaded === false  &&
      slideImageILoaded === false  &&
      slideImageJLoaded === false  &&
      slideImageKLoaded === false  &&
      slideImageLLoaded === false  &&
      slideImageMLoaded === false  &&
      slideImageNLoaded === false  &&
      slideImageOLoaded === false  &&
      slideImagePLoaded === false  &&
      slideImageQLoaded === false  &&
      slideImageRLoaded === false  &&
      slideImageSLoaded === false  &&
      slideImageTLoaded === false  &&
      slideImageULoaded === false  

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
    slideImageALoaded,
    slideImageBLoaded,
    slideImageCLoaded,
    slideImageDLoaded,
    slideImageELoaded,
    slideImageFLoaded,
    slideImageGLoaded,
    slideImageHLoaded,
    slideImageILoaded,
    slideImageJLoaded,
    slideImageKLoaded,
    slideImageLLoaded,
    slideImageMLoaded,
    slideImageNLoaded,
    slideImageOLoaded,
    slideImagePLoaded,
    slideImageQLoaded,
    slideImageRLoaded,
    slideImageSLoaded,
    slideImageTLoaded,
    slideImageULoaded
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


  return(
    <Section id="headerExpedition">
      <div style={{ display: 'none' }}>
        <img src={SIAUrl} onLoad={(e) => setTimeout(() =>  setSlideImageALoaded(false) , 2000)  } />
        <img src={SIBUrl} onLoad={(e) => setTimeout(() =>  setSlideImageBLoaded(false) , 2000)  } />
        <img src={SICUrl} onLoad={(e) => setTimeout(() =>  setSlideImageCLoaded(false) , 2000)  } />
        <img src={SIDUrl} onLoad={(e) => setTimeout(() =>  setSlideImageDLoaded(false) , 2000)  } />
        <img src={SIEUrl} onLoad={(e) => setTimeout(() =>  setSlideImageELoaded(false) , 2000)  } />
        <img src={SIFUrl} onLoad={(e) => setTimeout(() =>  setSlideImageFLoaded(false) , 2000)  } />
        <img src={SIGUrl} onLoad={(e) => setTimeout(() =>  setSlideImageGLoaded(false) , 2000)  } />
        <img src={SIHUrl} onLoad={(e) => setTimeout(() =>  setSlideImageHLoaded(false) , 2000)  } />
        <img src={SIIUrl} onLoad={(e) => setTimeout(() =>  setSlideImageILoaded(false) , 2000)  } />
        <img src={SIJUrl} onLoad={(e) => setTimeout(() =>  setSlideImageJLoaded(false) , 2000)  } />
        <img src={SIKUrl} onLoad={(e) => setTimeout(() =>  setSlideImageKLoaded(false) , 2000)  } />
        <img src={SILUrl} onLoad={(e) => setTimeout(() =>  setSlideImageLLoaded(false) , 2000)  } />
        <img src={SIMUrl} onLoad={(e) => setTimeout(() =>  setSlideImageMLoaded(false) , 2000)  } />
        <img src={SINUrl} onLoad={(e) => setTimeout(() =>  setSlideImageNLoaded(false) , 2000)  } />
        <img src={SIOUrl} onLoad={(e) => setTimeout(() =>  setSlideImageOLoaded(false) , 2000)  } />
        <img src={SIPUrl} onLoad={(e) => setTimeout(() =>  setSlideImagePLoaded(false) , 2000)  } />
        <img src={SIQUrl} onLoad={(e) => setTimeout(() =>  setSlideImageQLoaded(false) , 2000)  } />
        <img src={SIRUrl} onLoad={(e) => setTimeout(() =>  setSlideImageRLoaded(false) , 2000)  } />
        <img src={SISUrl} onLoad={(e) => setTimeout(() =>  setSlideImageSLoaded(false) , 2000)  } />
        <img src={SITUrl} onLoad={(e) => setTimeout(() =>  setSlideImageTLoaded(false) , 2000)  } />
        <img src={SIUUrl} onLoad={(e) => setTimeout(() =>  setSlideImageULoaded(false) , 2000)  } />
      </div>
      <SwiperWrapper style={{ overflow: 'hidden' }}>
        <Swiper {...params}>
          <div>
            <div className="swiper-slide-mask"></div>
              <div className="swiper-slide-image" style={{backgroundImage: `url(${SIAUrl})`}} />
            </div>
          <div>
              <div className="swiper-slide-mask"></div>
              <div className="swiper-slide-image" style={{backgroundImage: `url(${SIBUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SICUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIDUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIEUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIFUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIGUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIHUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIIUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIJUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIKUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SILUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIMUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SINUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIOUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIPUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIQUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIRUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SISUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SITUrl})`}} />
          </div>

          <div>
            <div className="swiper-slide-mask"></div>
            <div className="swiper-slide-image" style={{backgroundImage: `url(${SIUUrl})`}} />
          </div>

        </Swiper>
      </SwiperWrapper>
    </Section>
  )
}

export default Gallery