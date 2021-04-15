import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Swiper from 'react-id-swiper'
import BookingRooms from '../booking/BookingRooms'


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

const SectionIllus = styled.div`
  position: absolute;
  top: 50%;
  opacity: .10;
  font-size: 600px;
  line-height: 0;
  z-index: -1;

  @media (max-width: 575px) {
    display:none;
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

const RoomWhite = styled.div`
  position: absolute;
  height: 700px;
  width: 80%;
  background-color: white;
  left: 4%;

  @media (max-width: 768px) {
    left: 24px;
    width: 94%;
    right: 24px;
    height: 57%;
    
  }

  @media (max-width: 575px) {
    left: 24px;
    width: 87%;
    right: 24px;
    height: 67%;
  }
`

const Booking = styled.div`
  max-width: 490px;
  float: right;
  text-align: left; 
  margin-top: 120px;
  padding-right: 48px;
  padding-left: 48px;
  @media (max-width: 768px) {
    margin-top: 60px;
    float: initial;
    margin: 50px auto 60px auto;
  }
  @media (max-width: 575px) {
    padding-right: 24px;
    padding-left: 24px;
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

export default function RoomBook({text, illustration, sliderImages, setShowModal, surface, bedType, guests, view, roomId, type}) {
  const Illustration_ = illustration

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
    <Section id="roomBooking">
      <Container fluid>
        <RoomWhite 
          data-scroll
          data-scroll-speed="1.5" 
          data-scroll-target="#roomBooking" 
        />
        <Row>
          <Col lg="5" md="6"  sm="12" style = {{padding: 0 }}>
            <Booking 
              data-scroll
              data-scroll-speed="1.5" 
              data-scroll-target="#roomBooking"
            >
              <Text 
                data-scroll
                data-scroll-speed="1.5" 
                data-scroll-target="#roomBooking"
              >
                { text }  
              </Text>
              <BookingRooms
                setShowModal={setShowModal}
                surface={surface}
                bedType={bedType}
                guests={guests}
                view={view}
                roomId={roomId}
                type={type}
              />
            </Booking>
          </Col>
          <Col lg="7" md="6"  sm="12" style = {{padding: 0 }}>
            <SwiperWrapper data-scroll data-scroll-speed="2.5"  data-scroll-target="#roomBooking" style={{ overflow: 'hidden' }}>
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
      <SectionIllus
        data-scroll
        data-scroll-speed="-1" 
      >
        <Illustration_ />
      </SectionIllus>
    </Section>
  );
}
