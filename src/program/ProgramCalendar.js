import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router-dom'
import {FormattedMessage} from 'react-intl'

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #F0EFEF;
  position: relative;
`


const Section = styled.div`
  width: 100%;
  max-width: 1040px;
  position: relative;
  padding: 80px 0 10px 0;
  margin: auto;
  z-index: 1;
  @media (max-width: 480px) {
    padding: 80px 0 0 0;
  }
`

const SectionTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 8px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  margin-bottom: 64px;
  @media (max-width: 575px) {
    font-size: 22px;
  }
`

const SectionIllus = styled.div`
  position: absolute;
  left: -15%;
  opacity: .20;
  font-size: 500px;
  top: 10%;
  line-height: 0;
  z-index: 0;
  @media (max-width: 575px) {
    right: -90%;
    opacity: 0.05;
    display: none;
  }
`

const SectionIllusBottom = styled.div`
  position: absolute;
  right: -5%;
  opacity: .20;
  font-size: 500px;
  bottom: 10%;
  line-height: 0;
  z-index: 0;
  @media (max-width: 575px) {
    right: -90%;
    opacity: 0.05;
    display: none;
  }
`

const Calendar = styled.div`

`

const CalendarHead = styled.div`
  padding: 32px;
  background-color: #302D2A;
  margin-bottom: 48px;
  position: relative;
    @media (max-width: 575px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 26px;
    }
  .name{
    font-size: 32px;
    color: white;
    text-align: center;
    letter-spacing: 8px;
    font-weight: 300;
    margin-bottom: 16px;
      @media (max-width: 575px) {
      font-size: 22px;
      max-width: 200px;
    }
  }
  .date{
    text-align: center;
    &-range{
      color: white
    }
    &-years{
      color: white;
      font-weight: 600;
    }
  }
  .control-next,
  .control-prev{
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-size: 48px 48px;
    position: absolute;
    top: 50%;
      @media (max-width: 575px) {
      top: 30%;
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -24px;
    &:focus{
      outline: 0;
    }  
  }
  .control-next{
    right: 30px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='52.645' height='52.645' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647a24.208,24.208,0,0,1-13.6-4.154,24.4,24.4,0,0,1-8.813-10.7A24.29,24.29,0,0,1,4.154,10.724a24.4,24.4,0,0,1,10.7-8.813A24.322,24.322,0,0,1,44.492,37.923a24.4,24.4,0,0,1-10.7,8.813A24.169,24.169,0,0,1,24.323,48.647Zm0-46.438A22.008,22.008,0,0,0,11.959,5.985a22.183,22.183,0,0,0-8.013,9.73A22.084,22.084,0,0,0,5.985,36.688a22.178,22.178,0,0,0,9.73,8.012,22.087,22.087,0,0,0,20.973-2.039,22.178,22.178,0,0,0,8.012-9.73,22.087,22.087,0,0,0-2.039-20.973,22.183,22.183,0,0,0-9.73-8.013A21.978,21.978,0,0,0,24.323,2.208ZM23.107,32.844h0a1.216,1.216,0,0,1-1.216-1.223V17.026a1.216,1.216,0,0,1,2.067-.851l7.3,7.3a1.241,1.241,0,0,1,0,1.727l-7.3,7.3A1.209,1.209,0,0,1,23.107,32.844Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
      @media (max-width: 575px) {
      right: 10px;
    }
    &:hover{
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647A24.33,24.33,0,0,1,14.856,1.911,24.33,24.33,0,0,1,33.791,46.735,24.171,24.171,0,0,1,24.323,48.647Zm-1.216-32.82h0a1.217,1.217,0,0,0-1.216,1.2V31.621a1.216,1.216,0,0,0,2.067.875l7.3-7.3a1.236,1.236,0,0,0,0-1.727l-7.3-7.3a1.21,1.21,0,0,0-.851-.347Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/svg%3E");
    }
  }
  .control-prev{
    left: 30px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='52.645' height='52.645' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg transform='translate(52.645 52.645) rotate(180)' clip-path='url(%23a)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647a24.207,24.207,0,0,1-13.6-4.154,24.4,24.4,0,0,1-8.813-10.7A24.29,24.29,0,0,1,4.154,10.724a24.4,24.4,0,0,1,10.7-8.813A24.322,24.322,0,0,1,44.492,37.923a24.4,24.4,0,0,1-10.7,8.813A24.169,24.169,0,0,1,24.323,48.647Zm0-46.438A22.008,22.008,0,0,0,11.959,5.985a22.183,22.183,0,0,0-8.013,9.73A22.084,22.084,0,0,0,5.985,36.688a22.178,22.178,0,0,0,9.73,8.012,22.087,22.087,0,0,0,20.973-2.039,22.178,22.178,0,0,0,8.012-9.73,22.087,22.087,0,0,0-2.039-20.973,22.183,22.183,0,0,0-9.73-8.013A21.978,21.978,0,0,0,24.323,2.208ZM23.107,32.844h0a1.216,1.216,0,0,1-1.216-1.223V17.026a1.216,1.216,0,0,1,2.067-.851l7.3,7.3a1.241,1.241,0,0,1,0,1.727l-7.3,7.3A1.209,1.209,0,0,1,23.107,32.844Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
      @media (max-width: 575px) {
      left: 10px;
    }
    &:hover{
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52.645' height='52.645' viewBox='0 0 52.645 52.645'%3E%3Cg transform='translate(52.645 52.645) rotate(180)'%3E%3Crect width='52.645' height='52.645' fill='rgba(255,255,255,0)'/%3E%3Cpath d='M24.323,48.647A24.33,24.33,0,0,1,14.856,1.911,24.33,24.33,0,0,1,33.791,46.735,24.171,24.171,0,0,1,24.323,48.647Zm-1.216-32.82h0a1.217,1.217,0,0,0-1.216,1.2V31.621a1.216,1.216,0,0,0,2.067.875l7.3-7.3a1.236,1.236,0,0,0,0-1.727l-7.3-7.3a1.21,1.21,0,0,0-.851-.347Z' transform='translate(2 2)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
    
    };
  }
`

const CalendarBody = styled.div`
  
`

const CalendarSection= styled.div`
  margin-bottom: 32px;
`

const CalendarSectionType= styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
  letter-spacing: 4px;
  padding: 8px;
  background-color: ${props => props.color == 'green' ? '#708E55' : '#833832' };
  margin-bottom: 24px;
  font-weight: 300;
  @media (max-width: 575px) {
    font-size:22px;
  }
` 
const CalendarDays= styled.div`
  padding: 8px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  text-align: center;
  overflow: auto;
  -ms-overflow-style: none;
  margin-bottom: 24px;
  
  @media (max-width: 575px) {
    justify-content: end;
  }
  .day{
    font-size: 16px;
    letter-spacing: 1px;
    color: #96908A;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 4px 8px;
    position: relative;
    &.active{
      color: ${props => props.color == 'green' ? '#708E55' : '#833832' };
      &:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        background: ${props => props.color == 'green' ? '#708E55' : '#833832' };
        bottom: -8px;
        right: 0;
        z-index: 1;
      }
    }
    &:hover{
      color: #302D2A;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const CalendarDayContent= styled.div`
  background-color: white;
  padding: 24px;
  table{
    width: 100%;
    thead{
      tr{
        th{
          font-size: 20px;
          color: #302D2A;
          letter-spacing: 2px;
          font-weight: 300;
          padding: 8px;
          padding-bottom: 32px;
        }
      }
    }
    tbody{
      tr{
        td{
          padding: 8px;
          font-size: 14px;
          .button{
            cursor: pointer;
            padding: 4px;
            border: 1px solid #302D2A;
            text-align: center;
            line-height: 1;
            font-size: 18px;
            transition: all 0.3s ease-in-out;
            &:hover{
              background-color: #302D2A;
              color: white;
            }
          }
        }
      }
    }
  }
`

export default function ProgramCalendar({onUpdateScroll, illustrationLandscape, illustrationTiger}) {

  const Landscape = illustrationLandscape;
  const Tiger = illustrationTiger;

  let history = useHistory();
  const tempNames = ['tempMed', 'tempAlt', 'tmpFda']
  const daysTypes = ['fd', 'hdm']
  const [ selected, setSelected ] = useState('tempMed')
  const [ configDays, setConfigDays] = useState({ 
    tempMed: { fd: { day: 1 }, hdm: { day: 1 }, hdt: { day: 1 }},
    tempAlt: { fd: { day: 1 }, hdm: { day: 1 }, hdt: { day: 1 }},
    tmpFda: { fd: { day: 1 }, hdm: { day: 1 }, hdt: { day: 1 }},
    
  })
  

  const calendar = {
    tempMed: {
      id: 1,
      name: <FormattedMessage id='programs.ai.calendar.temporadamedia'/>,
      dates: <FormattedMessage id='programs.ai.calendar.meses.temporadamedia'/>,
      years: <FormattedMessage id='programs.ai.calendar.ano.temporadamedia'/>,
      fd: {
        name: <FormattedMessage id='programs.ai.calendar.fullday'/>,
        days: [{
          name: <FormattedMessage id='programs.ai.calendar.lunes'/>,
          id: 1,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.martes'/>,
            id: 2,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:45', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.miercoles'/>,
            id: 3,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.jueves'/>,
            id: 4,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkinglazoweber.titulo'/>, hour: '7:45', path: 'trekking-lazo-weber', code: 'lw'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.viernes'/>,
            id: 5,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.sabado'/>,
            id: 6,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:45', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.domingo'/>,
            id: 7,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '6:30' , path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
        }]
      },
      hdm: {
        name: <FormattedMessage id='programs.ai.calendar.halfday'/>,
        days: [{
          name: <FormattedMessage id='programs.ai.calendar.lunes'/>,
          id: 1,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorferrier.titulo'/>, hour: '8:00', path: 'trekking-mirador-ferrier', code: 'mf'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '15:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.martes'/>,
          id: 2,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '8:00', path: 'trekking-mirador-cuernos',code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '15:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.miercoles'/>,
          id: 3,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:00', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.jueves'/>,
          id: 4,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingchorrillopingo.titulo'/>, hour: '8:00', path: 'trekking-chorrillo-pingo', code: 'chp'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.viernes'/>,
          id: 5,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '8:00', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradortoro.titulo'/>, hour: '15:15', path: 'trekking-mirador-toro', code: 'mt'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.sabado'/>,
          id: 6,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '8:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '15:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.domingo'/>,
          id: 7,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:00', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
          ]
        }]
      },
    },
    tempAlt: {
      id: 2,
      name: <FormattedMessage id='programs.ai.calendar.temporadaalta'/>,
      dates: <FormattedMessage id='programs.ai.calendar.meses.temporadaalta'/>,
      years: <FormattedMessage id='programs.ai.calendar.ano.temporadaalta'/>,
      fd: {
        name: <FormattedMessage id='programs.ai.calendar.fullday'/>,
        days: [{
          name: <FormattedMessage id='programs.ai.calendar.lunes'/>,
          id: 1,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:30', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.martes'/>,
            id: 2,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:30', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:45', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.miercoles'/>,
            id: 3,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkinglazoweber.titulo'/>, hour: '7:30', path: 'trekking-lazo-weber', code: 'lw'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.jueves'/>,
            id: 4,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:30', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:45', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.viernes'/>,
            id: 5,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:30', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.sabado'/>,
            id: 6,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:30', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkinglazoweber.titulo'/>, hour: '7:30', path: 'trekking-lazo-weber', code: 'lw'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.domingo'/>,
            id: 7,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:30', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:45', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
        }]
      },
      hdm: {
        name: <FormattedMessage id='programs.ai.calendar.halfday'/>,
        days: [{
          name: <FormattedMessage id='programs.ai.calendar.lunes'/>,
          id: 1,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorferrier.titulo'/>, hour: '8:00', path: 'trekking-mirador-ferrier', code: 'mf'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '15:15', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.martes'/>,
          id: 2,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingchorrillopingo.titulo'/>, hour: '8:00', path: 'trekking-chorrillo-pingo', code: 'chp'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '9:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:00', path: 'trekking-mirador-cuernos',code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradortoro.titulo'/>, hour: '15:15', path: 'trekking-mirador-toro', code: 'mt'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.miercoles'/>,
          id: 3,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:00', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:15', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.jueves'/>,
          id: 4,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingchorrillopingo.titulo'/>, hour: '8:00', path: 'trekking-chorrillo-pingo', code: 'chp'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '9:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:00', path: 'trekking-mirador-cuernos',code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '15:15', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.viernes'/>,
          id: 5,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:00', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:15', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.sabado'/>,
          id: 6,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '8:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '9:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:00', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:15', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.domingo'/>,
          id: 7,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '15:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:15', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
          ]
        }]
      },
    },
    tmpFda: {
      id: 3,
      name: <FormattedMessage id='programs.ai.calendar.temporadafin'/>,
      dates: <FormattedMessage id='programs.ai.calendar.meses.temporadafin'/>,
      years: <FormattedMessage id='programs.ai.calendar.ano.temporadafin'/>,
      fd: {
        name: <FormattedMessage id='programs.ai.calendar.fullday'/>,
        days: [{
          name: <FormattedMessage id='programs.ai.calendar.lunes'/>,
          id: 1,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:30', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.martes'/>,
            id: 2,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:30', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.miercoles'/>,
            id: 3,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkinglazoweber.titulo'/>, hour: '7:30', path: 'trekking-lazo-weber', code: 'lw'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.jueves'/>,
            id: 4,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:30', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.viernes'/>,
            id: 5,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:30', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.sabado'/>,
            id: 6,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkinglazoweber.titulo'/>, hour: '7:30', path: 'trekking-lazo-weber', code: 'lw'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
          },{
            name: <FormattedMessage id='programs.ai.calendar.domingo'/>,
            id: 7,
            activities: [
              { name: <FormattedMessage id='expeditions.specialphotosafari.titulo'/>, hour: '5:30', path: 'specials-photo-safari', code: 'ps'},
              { name: <FormattedMessage id='expeditions.trekkingsenderogrey.titulo'/>, hour: '7:15', path: 'trekking-sendero-grey', code: 'sg'},
              { name: <FormattedMessage id='expeditions.trekkingvallefrances.titulo'/>, hour: '7:15', path: 'trekking-valle-frances', code: 'vf'},
              { name: <FormattedMessage id='expeditions.trekkingbasetorres.titulo'/>, hour: '7:30', path: 'trekking-base-torres', code: 'bt'},
              { name: <FormattedMessage id='expeditions.trekkingsenderocuernos.titulo'/>, hour: '7:30', path: 'trekking-sendero-cuernos',code: 'sc'},
              { name: <FormattedMessage id='expeditions.fulldaypaine.titulo'/>, hour: '8:00', path: 'full-day-paine', code: 'fdp'},
            ]
        }]
      },
      hdm: {
        name: <FormattedMessage id='programs.ai.calendar.halfday'/>,
        days: [{
          name: <FormattedMessage id='programs.ai.calendar.lunes'/>,
          id: 1,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradorferrier.titulo'/>, hour: '8:00', path: 'trekking-mirador-ferrier', code: 'mf'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '8:30', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '15:15', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:30', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.martes'/>,
          id: 2,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingchorrillopingo.titulo'/>, hour: '8:00', path: 'trekking-chorrillo-pingo', code: 'chp'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '8:30', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '9:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradortoro.titulo'/>, hour: '15:00', path: 'trekking-mirador-toro', code: 'mt'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:15', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '15:30', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.miercoles'/>,
          id: 3,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '8:30', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingchorrillopingo.titulo'/>, hour: '15:00', path: 'trekking-chorrillo-pingo', code: 'chp'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:15', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:30', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.jueves'/>,
          id: 4,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingchorrillopingo.titulo'/>, hour: '8:00', path: 'trekking-chorrillo-pingo', code: 'chp'},
            { name: <FormattedMessage id='expeditions.trekkingmiradortoro.titulo'/>, hour: '8:30', path: 'trekking-mirador-toro', code: 'mt'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '9:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:00', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '15:15', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '15:30', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.viernes'/>,
          id: 5,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '8:30', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:00', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:15', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:30', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.sabado'/>,
          id: 6,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingmiradortoro.titulo'/>, hour: '8:00', path: 'trekking-mirador-toro', code: 'mt'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '8:30', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '9:00', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcuernos.titulo'/>, hour: '15:00', path: 'trekking-mirador-cuernos', code: 'mcu'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:15',path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '15:30', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
            
          ]
        },{
          name: <FormattedMessage id='programs.ai.calendar.domingo'/>,
          id: 7,
          activities: [
            { name: <FormattedMessage id='expeditions.trekkingaonikenk.titulo'/>, hour: '8:00', path: 'trekking-aonikenk', code: 'ak'},
            { name: <FormattedMessage id='expeditions.trekkingcordonchacabuco.titulo'/>, hour: '8:30', path: 'trekking-cordon-chacabuco', code: 'cc'},
            { name: <FormattedMessage id='expeditions.trekkingplayasarmiento.titulo'/>, hour: '9:00', path: 'trekking-playa-sarmiento', code: 'ps'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '9:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingcampoesmeralda.titulo'/>, hour: '9:15', path: 'trekking-campo-esmeralda', code: 'ce'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '10:00', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '14:30', path: 'horse-riding-two-hours', code: 'th'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:00', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.specialescalada.titulo'/>, hour: '15:15', path: 'specials-escalada', code: 'es'},
            { name: <FormattedMessage id='expeditions.trekkingmiradorcondor.titulo'/>, hour: '15:15', path: 'trekking-mirador-condor',code: 'mc'},
            { name: <FormattedMessage id='expeditions.navigationsrioserrano.titulo'/>, hour: '15:30', path: 'navigations-rio-serrano', code: 'rs'},
            { name: <FormattedMessage id='expeditions.trekkinglagunaescondida.titulo'/>, hour: '15:30', path: 'trekking-laguna-escondida', code: 'lc'},
            { name: <FormattedMessage id='expeditions.horseridingtwohours.titulo'/>, hour: '16:30', path: 'horse-riding-two-hours', code: 'th'},
          ]
        }]
      },
    }
  }

  const goNext = () => {
    let index = tempNames.indexOf(selected)
    const lastItem = tempNames[tempNames.length - 1]
    if(lastItem === selected){
      return
    } 
    setSelected(tempNames[index + 1])
    onUpdateScroll()
  }

  const goPrev = () => {
    let index = tempNames.indexOf(selected)
    const firstItem = tempNames[0]
    if(firstItem === selected){
      return
    } 
    setSelected(tempNames[index - 1])
    onUpdateScroll()
  }

  const handleChangeRoute = (location, code) => {
    
    history.push(`/expeditions/expedition-${location}-${code}`)
  }
  
  return (
    <SectionWrapper
      id="programCalendar"
    >
      <Section>
        <SectionTitle><FormattedMessage id='programs.ai.calendar.titulo'/></SectionTitle>
        <Calendar>
          <CalendarHead>
              <div className="name">{calendar[selected].name}</div>
              <div className="date">
                <div className="date-range">
                {calendar[selected].dates}
                </div>
                <div className="date-years">
                {calendar[selected].years}
                </div>
              </div>
              <div className="control-prev" onClick={goPrev}></div>
              <div className="control-next" onClick={goNext}></div>
          </CalendarHead>
          <CalendarBody>
            { daysTypes.map((item) => 
              <CalendarSection key={item}>
                <CalendarSectionType color={item === 'fd' ? 'green' : 'red'}>
                  {calendar[selected][item].name}
                </CalendarSectionType>
                <CalendarDays color={item === 'fd' ? 'green' : 'red'}>
                  { calendar[selected][item].days.map((day,index) => 
                    <div
                      key={index}
                      className={configDays[selected][item].day === day.id ? 'day active' : 'day'}
                      onClick={() => setConfigDays((c) => ({ ...c, [selected]: { ...c[selected], [item]: { day: day.id } } }))}
                      >
                      <div>{day.name}</div>
                    </div>
                  )}
                </CalendarDays>
                <CalendarDayContent>
                  <table>
                    <thead>
                      <tr>
                        <th><FormattedMessage id='programs.ai.calendar.expedicion'/></th>
                        <th><FormattedMessage id='programs.ai.calendar.hora'/></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {calendar[selected][item].days.map((day,index) => 
                        configDays[selected][item].day === day.id ? 
                        day.activities.map((a, i) => 
                          <tr key={i}>
                            <td>{a.name}</td>
                            <td>{a.hour}</td>
                            <td style={{ width: 120, minWidth: 30 }}>
                              <div 
                                className="button"
                                onClick={() => handleChangeRoute(a.path, a.code)}
                              >
                                ›
                              </div>
                            </td>
                          </tr>
                        ) :
                        null
                      )}
                    </tbody>
                  </table>
                  
                </CalendarDayContent>
              </CalendarSection>
            )}
          </CalendarBody>
        </Calendar>
        
      </Section>
    
      <SectionIllusBottom
        data-scroll
        data-scroll-speed="-1" 
        data-scroll-target="#programCalendar"
      >
        <Landscape />
      </SectionIllusBottom>

      <SectionIllus
        data-scroll
        data-scroll-speed="-1" 
        data-scroll-target="#programCalendar"
      >
        <Tiger />
      </SectionIllus>
    </SectionWrapper>
  )
}
