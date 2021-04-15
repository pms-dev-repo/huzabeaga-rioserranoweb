import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonGhost } from '../Styles/Button'

import Surface from '../icons/Surface'
import BedsForTwo from '../icons/BedsForTwo'
import BedsForThree from '../icons/BedsForThree'
import Persons from '../icons/Persons'
import PersonsThree from '../icons/PersonsThree'
import Paine from '../icons/Paine'
import PaineSingle from '../icons/PaineSingle'

import {FormattedMessage} from 'react-intl'

const Section = styled.div`
  position: relative;
`
const BgImage = styled.img`
  position: absolute;
  left: 200px;
  top: 0;
  opacity: .25;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
   
  }
  
`

const Container = styled.div`
  /* max-width: 1432px; */
  align-items: center;
  width: 100%;
  padding: 0 20px 20px 20px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 480px) {
    padding-right: 24px;
    padding-left: 24px;
   
  }

  
`

const SectionHeader = styled.div`
  padding-top: 170px;
  padding-bottom: 100px;
  background-color: white;
  @media (max-width: 480px) {
      padding-top: 80px;
      padding-bottom: 0px;
    }
`


const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 480px) {
      font-size: 22px;
      letter-spacing: 8px;
    }
`
const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  max-width: 800px;
  margin: 10px auto 0 auto;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align: center;
  color: #302D2A;
  @media (max-width: 480px) {
      margin: 24px 0 24px 0;
    }
`

const Rooms = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;  
  @media (max-width: 1060px) {
   flex-flow: column;
  
  }
`
const Room = styled.div`
  position: relative;
  width: 320px;
  height: 610px;
  flex: auto;
  overflow: hidden;
  background-color: black;
  margin: 0 10px 0 10px;

  @media (max-width: 1060px) {
   width: 100%;
   height: 450px;
   margin: 15px 0 0 0;
  
  }

  @media (max-width: 480px) {
      height: 370px;
      
    }

  &:hover{
    .image{
      -webkit-transform: scale(1.25);
      -moz-transform: scale(1.25);
      -ms-transform: scale(1.25);
      transform: scale(1.25);
    }
  }
  .image{
    background-size: cover;
    height: 100%;
    transform: scale(1.6);
    transition: transform 1.5s;
    opacity: .6;
    /* mix-blend-mode: multiply; */
    @media (max-width: 1060px) {
     background-position: center center;
  
    }

  }
  .info{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    justify-content: flex-end;
    align-items: center;
    padding: 64px;
    @media (max-width: 480px) {
      padding: 30px;
    }


    &-title{
      color: white;
      font-size: 25px;
      letter-spacing: 10px;
      margin-bottom: 20px;
      text-transform: uppercase;
      @media (max-width: 480px) {
      font-size: 24px;
      letter-spacing: 8px;
      }
    }
    &-description{
      color: white;
      font-size: 14px;
      letter-spacing: 1.4px;
      line-height: 1.5;
      max-width: 350px;
      margin-bottom: 32px;
      display: flex;
      flex-direction: row;
      @media (max-width: 480px) {
      max-width: 300px;
      letter-spacing: 1.2px;

      }
      .feature {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        margin: 0 10px 0 10px;
        align-items: center;
        min-width: 40px;
        > span {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
`

function  HomeRooms({onChangeRoute, roomSuperiorImg, roomStandarImg, roomStandarPlusImg, roomBgImg}) {
  return (
    <Section id="rooms">
      <Container>
        <SectionHeader data-scroll data-scroll-speed="0">
        { <BgImage 
          src={roomBgImg}
          data-scroll
          data-scroll-speed="1" 
          data-scroll-target="#rooms"
          data-scroll-delay="0.05"
        /> }
          <Title>
            <FormattedMessage id='home.rooms.titulo'/>
          </Title>
          <Text>
            <FormattedMessage id='home.rooms.bajada'/>
          </Text>
        </SectionHeader>
      </Container>
      <Container>
        <Rooms>
          <Room data-scroll data-scroll-repeat> 
            <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
              <div 
                className="image" 
                style={{ backgroundImage: `url(${roomSuperiorImg})` }} 
              />
            </div>
            <div className="info">
              <div className="info-title">
                <FormattedMessage id="home.rooms.superior.titulo"/>
              </div>  
              <div className="info-description">
                <div className='feature'>
                  <Surface/>
                  <span><FormattedMessage id='rooms.superior.superficie'/></span>
                </div>
                <div className='feature'>
                  <BedsForThree/>
                  <span><FormattedMessage id='rooms.superior.tipoCama'/></span>
                </div>
                <div className='feature'>
                  <PersonsThree/>
                  <span><FormattedMessage id='rooms.superior.personas'/></span>
                </div>
                <div className='feature'>
                  <Paine/>
                  <span><FormattedMessage id='rooms.superior.vista'/></span>
                </div>
              </div>  
              <ButtonGhost type="button" onClick={() => onChangeRoute('/room-superior')}>
                <FormattedMessage id='home.rooms.button'/>
              </ButtonGhost>
            </div>
            
          </Room>
          <Room data-scroll data-scroll-repeat> 
            <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
            <div 
              className="image" 
              style={{ backgroundImage: `url(${roomStandarImg})` }} 
              
            />
            </div>
            
            <div className="info">
              <div className="info-title">
                <FormattedMessage id="home.rooms.standarplus.titulo"/>
              </div>
              <div className="info-description">
                <div className='feature'>
                  <Surface/>
                  <span><FormattedMessage id='rooms.plus.superficie'/></span>
                </div>
                <div className='feature'>
                  <BedsForTwo/>
                  <span><FormattedMessage id='rooms.plus.tipoCama'/></span>
                </div>
                <div className='feature'>
                  <Persons/>
                  <span><FormattedMessage id='rooms.plus.personas'/></span>
                </div>
                <div className='feature'>
                  <Paine/>
                  <span><FormattedMessage id='rooms.plus.vista'/></span>
                </div>
              </div>  
              <ButtonGhost type="button" onClick={() => onChangeRoute('/room-standar-plus')}>
                <FormattedMessage id='home.rooms.button'/>
              </ButtonGhost>
            </div>
          </Room>
          <Room data-scroll data-scroll-repeat> 
            <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
              <div 
                className="image" 
                style={{ backgroundImage: `url(${roomStandarPlusImg})` }} 
              />
            </div>
            <div className="info">
              <div className="info-title">
                <FormattedMessage id="home.rooms.standar.titulo"/>
              </div>
              <div className="info-description">
                <div className='feature'>
                  <Surface/>
                  <span><FormattedMessage id='rooms.standar.superficie'/></span>
                </div>
                <div className='feature'>
                  <BedsForTwo/>
                  <span><FormattedMessage id='rooms.standar.tipoCama'/></span>
                </div>
                <div className='feature'>
                  <Persons/>
                  <span><FormattedMessage id='rooms.standar.personas'/></span>
                </div>
                <div className='feature'>
                  <PaineSingle/>
                  <span><FormattedMessage id='rooms.standar.vista'/></span>
                </div>
              </div>  
              <ButtonGhost type="button" onClick={() => onChangeRoute('/room-standar')}>
                <FormattedMessage id='home.rooms.button'/>
              </ButtonGhost>
            </div>
          </Room>
        </Rooms>
      </Container>
    </Section>
  )
}

export default HomeRooms
