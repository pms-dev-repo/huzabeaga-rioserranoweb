import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import moment from 'moment'
import {FormattedMessage} from 'react-intl'

import BookingmodalPortal from '../booking/BookingmodalPortal'

import Surface from '../icons/Surface'
import Bed from '../icons/Bed'
import BedsForTwo from '../icons/BedsForTwo'
import BedsForThree from '../icons/BedsForThree'
import Persons from '../icons/Persons'
import PersonsThree from '../icons/PersonsThree'
import Paine from '../icons/Paine'
import PaineSingle from '../icons/PaineSingle'
import Clock from '../icons/Clock'

const Feature = styled.div`
  text-align: center;
  font-size: 18px;
  color: #833832;
  .feature-specs {
    
    font-size: 14px;
    margin-top: 14px;
  }
`

const ClockDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  .detail-container{
    margin-left: 8px;
  }
  .details{
    font-size:14px;
    color:#96908A;
    text-transform: uppercase;
  }
`

const InuptLabel = styled.div`
  font-size: 12px;
  color: #96908A;
  font-weight: 600;
  margin-bottom: 4px;
  text-transform: uppercase;
`


const Inupt = styled.div`
  width: 100%;
  border: 1px solid #96908A;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 8px 8px;
  color: #96908A;
  cursor: text;
`


const Button = styled.div`
  padding: 0px 32px;
  margin-top: 24px;
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
  font-size: 16px;
  text-transform: uppercase;
  background-color: #833832;
  letter-spacing: 3px;
  color: #FFF;
  height: 48px;
  transition: all 0.45s;
  &:hover, &:focus{
    color: #fff;
    background-color: #5a150f
  }
`

export default function BookingRooms({setShowModal, surface, bedType, guests, view, roomId, type}) {
  return (
    <Container 
      fluid 
      data-scroll
      data-scroll-speed="1.5" 
      data-scroll-target="#roomBooking"
    >
      <Row>
        <Col sm={3} xs={6}>
          <Feature>
            <Surface/>
            <div className='feature-specs'>{surface}</div>
          </Feature>
        </Col>
        <Col sm={3} xs={6}>
          <Feature>
            { type === 1 ? <BedsForThree/> : <BedsForTwo/>}
            <div className='feature-specs'>{bedType}</div>
          </Feature>
        </Col>
        <Col sm={3} xs={6}>
          <Feature>
            { type === 1 ? <PersonsThree/> : <Persons/>}
            <div className='feature-specs'>{guests}</div>
          </Feature>
        </Col>
        <Col sm={3} xs={6}>
          <Feature>
            { type === 3 ? <PaineSingle/> : <Paine/>}
            <div className='feature-specs'>{view}</div>
          </Feature>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ClockDetail>
            <Clock/>
            <div className='detail-container'>
              <div className='details'><FormattedMessage id="rooms.superior.llegada"/>: 16:00 hrs.</div>
              <div className='details'><FormattedMessage id="rooms.superior.salida"/>: 12:00 hrs.</div>
            </div>
          </ClockDetail>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <BookingmodalPortal type="room" selectedRoom={roomId}/>
        </Col>
      </Row>
    </Container>
  )
}