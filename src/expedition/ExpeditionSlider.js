import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import TreckingDistance  from '../icons/TreckingDistance'
import CarDistance  from '../icons/CarDistance'
import TreckingHigh  from '../icons/TreckingHigh'
import {FormattedMessage} from 'react-intl'
import Boat  from '../icons/Boat'

const Section = styled.div`
  position: relative;
  z-index: 2;
  background-color: #F0EFEF;
  padding: 40px 0 120px 0;

  @media (max-width: 768px) {
    padding: 40px 0 60px 0;
  }
  @media (max-width: 575px) {
    padding: 40px 24px 24px 24px;
  }
`

const SectionIllus = styled.div`
  position: absolute;
  top: 80%;
  opacity: .25;
  font-size: 600px;
  line-height: 0;
  z-index: -1;
`

const CajaText = styled.div`
  max-width: 550px;
  float: right;
  text-align: left;
  margin-top: 160px;
  padding-right: 16px;
  padding-left: 16px;
  padding-right: 10%;
  .data-list{
    margin-bottom: 16px;
    display: flex;
    color: #833832;
    .data{
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      &-icon{
        font-size: 40px;
      }
      &-text{
        font-size: 12px;
        margin-top: 4px;
        color: #302D2A;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }

  @media (max-width: 1500px) {
    max-width: 465px;
    padding-right: 10%;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    padding-left: 0;
  }

  @media (max-width: 575px) {
    padding-right: 0px;
    .data{
      &-icon{
        font-size: 24px !important;
      }
      &-text{
        font-size: 12px !important;
      }
    }
  }
`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 12.5px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 16px;

  @media (max-width: 575px) {
    font-size: 22px;
    letter-spacing: 8px;
  }
`
const Text = styled.p`
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.3px;
  color: #96908A;

  @media (max-width: 575px) {
    margin: 24px 0 24px 0;
  }
`

const ExpWhite = styled.div`
  position: absolute;
  height: 700px;
  width: 66.6%;
  background-color: white;
  left: 5%;

  @media (max-width: 1400px) {
    left: 1%;
  }

  @media (max-width: 768px) {
    left: 0;
  }

  @media (max-width: 575px) {
    left: 0;
  }
`


const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  flex: auto;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }


  @media (max-width: 575px) {
    height: 400px;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: scale(1.25);

  @media (max-width: 1400px) {
    width: 70%;
    float: right;
  }

  @media (max-width: 768px) {
    width: 100%;
    float: left;
  }
`
const Content = styled.div`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 7.5px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 16px;

`
const SwiperWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  .swiper-wrapper {
    transition-duration: 1500ms !important;
    transform: translate3d(0px, 0px, 0px);

    @media (max-width: 768px) {
      height: 400px;
    }


    @media (max-width: 575px) {
      height: 300px;
      }
    }
  .swiper-slide{
    overflow: hidden;
    flex-shrink: 0;
    width: 100% !important;
    height: 100%;
    position: relative;
    transition-property: transform;

    @media (max-width: 575px) {
        height: 300px;
  
      }
    > div {
      height: 540px;
      background-position: center;
      background-size: cover;
      transition: transform 1s;
      transform: scale(1.5);

      @media (max-width: 575px) {
        height: 100%;
  
      }
    }
  }
  .swiper-slide-active{
    > div {
      transform: scale(1);
    }
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
    position: absolute;
    top: initial;
    bottom: 16px;
    width: 48px;
    height: 48px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 48px 48px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='52.645' height='52.645' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg transform='translate(52.645 52.645) rotate(180)' clip-path='url(%23a)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647a24.207,24.207,0,0,1-13.6-4.154,24.4,24.4,0,0,1-8.813-10.7A24.29,24.29,0,0,1,4.154,10.724a24.4,24.4,0,0,1,10.7-8.813A24.322,24.322,0,0,1,44.492,37.923a24.4,24.4,0,0,1-10.7,8.813A24.169,24.169,0,0,1,24.323,48.647Zm0-46.438A22.008,22.008,0,0,0,11.959,5.985a22.183,22.183,0,0,0-8.013,9.73A22.084,22.084,0,0,0,5.985,36.688a22.178,22.178,0,0,0,9.73,8.012,22.087,22.087,0,0,0,20.973-2.039,22.178,22.178,0,0,0,8.012-9.73,22.087,22.087,0,0,0-2.039-20.973,22.183,22.183,0,0,0-9.73-8.013A21.978,21.978,0,0,0,24.323,2.208ZM23.107,32.844h0a1.216,1.216,0,0,1-1.216-1.223V17.026a1.216,1.216,0,0,1,2.067-.851l7.3,7.3a1.241,1.241,0,0,1,0,1.727l-7.3,7.3A1.209,1.209,0,0,1,23.107,32.844Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
    &:hover{
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cg transform='translate(52.645 52.645) rotate(180)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647A24.33,24.33,0,0,1,14.856,1.911,24.33,24.33,0,0,1,33.791,46.735,24.171,24.171,0,0,1,24.323,48.647Zm-1.216-32.82h0a1.217,1.217,0,0,0-1.216,1.2V31.621a1.216,1.216,0,0,0,2.067.875l7.3-7.3a1.236,1.236,0,0,0,0-1.727l-7.3-7.3a1.21,1.21,0,0,0-.851-.347Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
    }
    &:focus{
      outline: 0;
    }
  }
`

export default function ExpeditionVideo({title, text, icons, sliderImages}) {
  
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);

  const params = {
    initialSlide: 0,
    getSwiper: updateSwiper,
    shouldSwiperUpdate: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  const updateIndex = useCallback(() => updateCurrentIndex(swiper.realIndex), [
    swiper
  ]);

  useEffect(() => {
    if (swiper !== null && currentIndex === 0) {
      swiper.on("slideChange", updateIndex);
    }
    
    return () => {
      if (swiper !== null ) {
        swiper.off("slideChange", updateIndex);
      }
    };
  }, [swiper, updateIndex]);

  return (
    <Section id="expeditionSlider">
      <Container fluid>
        <ExpWhite 
          data-scroll
          data-scroll-speed="1.5" 
          data-scroll-target="#expeditionSlider" 
        />
        <Row>
          <Col lg="5" md="6"  sm="12" style = {{padding: 0}}>
            <CajaText 
               data-scroll
               data-scroll-speed="1.5" 
               data-scroll-target="#expeditionSlider"
              
            >
              <Title>
                {title}
              </Title>
    
              <div className="data-list">
                { icons.walk !== undefined && 
                  <div className="data">
                    <div className="data-icon">
                      <TreckingDistance />
                    </div>
                    
                    <div className="data-text">
                      { icons.walk.distance } Km  
                    </div>
                    <div className="data-text">
                      { icons.walk.time } { icons.walk.unit !== undefined ? icons.walk.unit : 'Hrs' }
                      </div>
                    <div>
                      { icons.walk.oneWay ? <FormattedMessage id="expeditions.lazoweber.ida"/> : <FormattedMessage id="expeditions.lazoweber.idaVuelta"/> }
                    </div>
                  </div>
                }

                { icons.vehicle !== undefined && 
                  <div className="data">
                  
                    <div className="data-icon">
                      <CarDistance />
                    </div>
                    
                    <div className="data-text">
                      { icons.vehicle.distance } Km  
                    </div>
                    <div className="data-text">
                    { icons.vehicle.time } { icons.vehicle.unit !== undefined ? icons.vehicle.unit : 'Hrs' }
                      </div>
                    <div>
                     <FormattedMessage id="expeditions.lazoweber.idaVuelta"/>
                    </div>
                  </div>
                }

                { icons.navigation !== undefined && 
                  <div className="data">
                    <div className="data-icon">
                      <Boat />
                    </div>
                    
                    <div className="data-text">
                      { icons.navigation.distance } Km  
                    </div>
                    <div className="data-text">
                    { icons.navigation.time } { icons.navigation.unit !== undefined ? icons.navigation.unit : 'Hrs' }
                      </div>
                    <div>
                      <FormattedMessage id="expeditions.lazoweber.idaVuelta"/>
                    </div>
                  </div>
                }

                { icons.height !== undefined && 
                  <div className="data">
                    <div className="data-icon">
                      <TreckingHigh />
                    </div>
                    
                    <div className="data-text">
                    { icons.height.start } Inicio 
                    </div>
                    <div className="data-text">
                    { icons.height.max } Máxima
                    </div>
                    <div>
                      M.S.N.M
                    </div>
                  </div>
                }

              </div>

              <Text>
                {text}
              </Text>
              
            </CajaText>
          </Col>
          <Col lg="7" md="6"  sm="12" style = {{padding: 0 }}>
            <SwiperWrapper data-scroll data-scroll-speed="2.5"  data-scroll-target="#expeditionSlider" style={{ overflow: 'hidden' }}>
              <Swiper {...params}>
                { sliderImages.map((image, index) => 
                  <div key={index}>
                    <div className="swiper-slide-image" style={{backgroundImage: `url(${image})`}} />
                  </div>
                )}
              </Swiper>
            </SwiperWrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
