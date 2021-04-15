import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import styled from 'styled-components'
import { ButtonGhost } from '../Styles/ButtonBlack'



import {FormattedMessage} from 'react-intl'

const Section = styled.section`
  padding-top: 62px;
  padding-bottom: 62px;
  position: relative;
  background-color: #FFF8F0;
  overflow: hidden;
  @media (max-width: 480px) {
    padding-top: 0;
   
  }
`

const Container = styled.div`
  max-width: 1432px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 480px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`
const BgImage = styled.img`
  position: absolute;
  left: -200px;
  top: -150px;
  opacity: .25;
  z-index: -1;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
   
  }
  
`
const Content = styled.div`
  ${props => props.flex ? 'display: flex' : ''}
  @media(max-width: 1000px){
    ${props => props.flex ? 'flex-direction: column' : ''}
  }
`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  text-align: center;
  color: #302D2A;
  text-transform: uppercase;
  margin-top: 100px;
  @media (max-width: 1000px) {
    font-size: 32px;
    letter-spacing: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
    letter-spacing: 8px;
    margin-bottom: 0;
    margin-top: 80px;
  }
`
const Text = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  max-width: 800px;
  margin: auto;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 100px;
  @media (max-width: 480px) {
    margin: 24px 0 24px 0;
  }
`

const Chef = styled.div`
  margin-left: auto;
  position: relative;
  z-index: 1;
  .image{
    margin-right: 20px;
    z-index: 1;
    position: relative;
    width: 450px;
    height: 550px;
    background-position: center;
  }
  .dish{
    position: absolute;
    left: -240px;
    top: -100px;
    z-index: 0;
    pointer-events: none;
    opacity: 0.5;
  }
  .content{
    position: absolute;
    bottom: -32px;
    background-color: #FFF8F0;
    padding: 32px;
    max-width: 470px;
    left: -20%;
    z-index: 2;
    .title{
      font-size: 30px;
      letter-spacing: 10px;
      margin-bottom: 20px;
    }
    .text{
      letter-spacing: 1.5px;
      line-height: 1.5;
      margin-left: 48px;
      font-size: 14px;
    }
  }
  
  @media (max-width: 1400px) {
    .content{
      left: -20%;
    }
  }

  @media (max-width: 1280px) {
    .image{
      height: 550px;
      background-position: top center;
    }
    .content{
      width: 420px;
      position: absolute;
      top: 320px;
      left: 0;
    }
  }

  @media (max-width: 1000px) {
    margin: 0;
    .image{
      height: 500px;
      width: 80%;
      background-position: center -150px;
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 0;
      margin: auto;
    }
    .content{
      max-width: 800px;
      width: 80%;
      position: relative;
      top: 0;
      left: 0;
      margin: auto;
    }
  }

  @media (max-width: 480px) {
    .image{
      height: 310px;
      width: 100%;
      background-position: center -80px;
      margin-top: 40px;
    }
    .content{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
        font-size: 22px;
        text-align: center;
      }
      .text{
        text-align: center;
        margin: 0;
      }
    }
  }

`
const Slider = styled.div`
  width: 50%;
  .home-gastronomy-slide{
      height: 550px !important;
    }
  @media (max-width: 1280px) {
    flex: 1 0 auto;
  }
  @media (max-width: 1000px) {
    width: 80% !important;
    margin: auto;
    .home-gastronomy-slide{
      height: 400px !important;
    }
  }
  @media (max-width: 480px) {
    width: 100% !important;
    .home-gastronomy-slide{
      height: 310px !important;
    }
  }
`


export default function HomeGastronomy({ChefDish, ChefImage, SliderImages}) {



  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

    return (
      <Section id="gastronomy" className="home-gastronomy">
        <Container>
          <Content>
            <Title>
              <FormattedMessage id='home.gastronomy.title'/>
            </Title>
            <Text>
              <FormattedMessage id='home.gastronomy.bajada'/>
            </Text>
          </Content>

          <Content flex>

            <Chef>
              <div data-scroll data-scroll-repeat style={{ overflow: 'hidden' }}>
                <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <div className="image" style={{ backgroundImage: `url(${ChefImage})` }}/>
                </div>
              </div>
              <BgImage 
                src={ChefDish}
                data-scroll
                data-scroll-speed="-2" 
                data-scroll-target="#gastronomy"
              />
              <div 
                className="content"
                data-scroll
                data-scroll-speed="1.5" 
                data-scroll-target="#gastronomy"
              >
                <h3 className="title"><FormattedMessage id='home.gastronomy.nombreChef'/></h3>
                <p className="text">
                  <FormattedMessage id='home.gastronomy.descripcionChef'/>
                </p>
                <ButtonGhost type="button" onClick={() => onChangeRoute('/room-superior')}>
                  <FormattedMessage id='home.gastronomy.button'/>
                </ButtonGhost> 
              </div>
            </Chef>

            <Slider className="home-gastronomy-slider" data-scroll data-scroll-repeat style={{ overflow: 'hidden' }}>
              <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <Swiper {...params}>
                    { SliderImages.map((image, index) => 
                      <div key={index}>
                        <div 
                          className="home-gastronomy-slide" 
                          style={{backgroundImage: `url(${image})`}}
                        />
                      </div>
                    )}
                </Swiper>
              </div>
            </Slider>
          </Content>
        </Container>
      </Section>
  )
}
