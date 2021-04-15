import React, { Fragment } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Swiper from 'react-id-swiper';




const Section = styled.div`
  position: relative;
  z-index: 2;
  background-color: #F0EFEF;
  padding: 40px 0 120px 0;

  @media (max-width: 768px) {
    padding: 40px 0 0 0;
  }
  @media (max-width: 575px) {
    padding: 40px 24px 0 24px;
  }
`


const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  li {
    padding-left: 1em;
    text-indent: -1em;
    font-size: 14px;
    color: #96908A;
    line-height: 2;
    letter-spacing: .3;
  }

  li:before {
    content: '›';
    padding-right: 5px;
    font-size: 1.5em;
  }

`

const ProgramWhite = styled.div`
  position: absolute;
  height: 700px;
  width: 66.6%;
  background-color: white;
  left: 7%;

  @media (max-width: 1400px) {
    left: 3%;
  }

  @media (max-width: 768px) {
    left: 0;
  }

  @media (max-width: 575px) {
    left: 0;
  }
`
const CajaText = styled.div`
  max-width: 400px;
  float: right;
  text-align: left;
  margin-top: 70px;
  padding-right: 16px;
  padding-left: 16px;

  @media (max-width: 1400px) {
    max-width: 360px;
    padding-right: 10%;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding-left: 0;
  }

  @media (max-width: 575px) {
    padding-right: 0px;
    margin-top: 100px;
  }
`


const SectionContent = styled.div`
  max-width: 500px;
  float: ${props => props.float === 'right' ? 'left' : 'right'};
  text-align: left;
  margin-top: 160px;
  padding-right: ${props => props.float === 'left' ? '16px' : 0};
  padding-left: ${props => props.float === 'right' ? '16px' : 0};
  .text{
    font-size: 14px;
    color: #302D2A;
    line-height: 2;
    letter-spacing: .3;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    float: left;
    text-align: left;
    margin-top: 70px;
    padding: 0 24px;
    .text{
      font-size: 14px;
      color: #302D2A;
      line-height: 2;
      letter-spacing: .3;
    }
  }

  @media (max-width: 575px) {
    padding: 0;
  }
  

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
    &:focus{
      outline: 0;
    }
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='52.645' height='52.645' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg transform='translate(52.645 52.645) rotate(180)' clip-path='url(%23a)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647a24.207,24.207,0,0,1-13.6-4.154,24.4,24.4,0,0,1-8.813-10.7A24.29,24.29,0,0,1,4.154,10.724a24.4,24.4,0,0,1,10.7-8.813A24.322,24.322,0,0,1,44.492,37.923a24.4,24.4,0,0,1-10.7,8.813A24.169,24.169,0,0,1,24.323,48.647Zm0-46.438A22.008,22.008,0,0,0,11.959,5.985a22.183,22.183,0,0,0-8.013,9.73A22.084,22.084,0,0,0,5.985,36.688a22.178,22.178,0,0,0,9.73,8.012,22.087,22.087,0,0,0,20.973-2.039,22.178,22.178,0,0,0,8.012-9.73,22.087,22.087,0,0,0-2.039-20.973,22.183,22.183,0,0,0-9.73-8.013A21.978,21.978,0,0,0,24.323,2.208ZM23.107,32.844h0a1.216,1.216,0,0,1-1.216-1.223V17.026a1.216,1.216,0,0,1,2.067-.851l7.3,7.3a1.241,1.241,0,0,1,0,1.727l-7.3,7.3A1.209,1.209,0,0,1,23.107,32.844Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
    &:hover{
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cg transform='translate(52.645 52.645) rotate(180)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647A24.33,24.33,0,0,1,14.856,1.911,24.33,24.33,0,0,1,33.791,46.735,24.171,24.171,0,0,1,24.323,48.647Zm-1.216-32.82h0a1.217,1.217,0,0,0-1.216,1.2V31.621a1.216,1.216,0,0,0,2.067.875l7.3-7.3a1.236,1.236,0,0,0,0-1.727l-7.3-7.3a1.21,1.21,0,0,0-.851-.347Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
    }
  }
 
`

export default function ProgramSlider({list, sliderImages, firstText, secondText}) {
  
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Section id="programSlider">
      <Container fluid>
        <ProgramWhite 
          data-scroll
          data-scroll-speed="1.5" 
          data-scroll-target="#programSlider"
        />
        <Row>
          <Col lg="5" md="6"  sm="12" style={{padding: 0}}>
            <CajaText 
               data-scroll
               data-scroll-speed="1.5" 
               data-scroll-target="#programSlider"
              
            >
              <div style={{ fontSize: 14, color: '#96908A', lineHeight: 2, letterSpacing: .3 }}>
                <List>
                  { list.map((text, index) => 
                    <li key={index}>{text}</li>
                  )}
                </List>
              </div>
            </CajaText>
          </Col>
          <Col lg="7" md="6"  sm="12" style={{padding: 0}}>
            <SwiperWrapper data-scroll data-scroll-speed="2.5"  data-scroll-target="#programSlider" style={{ overflow: 'hidden' }}>
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
        <Row>
          <Col lg="6" md="6"  sm="12" style={{padding: 0}}>
          <SectionContent 
            data-scroll
            data-scroll-speed="0" 
            data-scroll-target="#programSlider"
            float="left"
          >
            <div className="text">
              {firstText}
            </div>
          </SectionContent>
          </Col>
          <Col lg="6" md="6" sm="12" style={{padding: 0}}> 
          <SectionContent 
            data-scroll
            data-scroll-speed="0" 
            data-scroll-target="#programSlider"
            float="right"
          >
            <div className="text">
              {secondText}
            </div>
          </SectionContent>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
