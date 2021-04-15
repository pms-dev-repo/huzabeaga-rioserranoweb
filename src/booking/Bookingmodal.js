import React, { useState, useEffect, useContext, useRef } from 'react'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import moment from 'moment'
import 'react-dates/initialize'
import {  isInclusivelyBeforeDay, DayPickerRangeController } from 'react-dates'
import { LanguageContext } from '../LanguageContext'
import { FormattedMessage } from 'react-intl'
import { isMobile} from 'react-device-detect';

const DPContainer = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  .label{
    /* width: 50%; */
    font-size: 14px;
    color: #302D2A;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .DateRangePickerInput_arrow{
    display: none;
  }
  .DateRangePickerInput{
    width: 100%;
  }
  .DateRangePicker{
    width: 100%;
    
  }
 
  .DateInput {
    width: 180px;
    border: 1px solid #302D2A;
    
    input{
      height: 48px;
      border: 0;
      font-size: 14px;
      font-weight: 600;
      transition: all .25s;
      cursor: pointer;
      &:hover{
        background-color: #e4e7e7;
      }
    }
    @media (max-width: 999px) {
      width: 130px;
    }
  }
  .DateRangePickerInput_arrow + .DateInput{
    margin-left: -1px;
  }
  .DateInput_input__focused{
    border: 0;
  }
  .CalendarDay__selected{
    background: #833832 !important;
    border: 1px double #833832 !important;
    color: #fff;
    &_span{
      background: #a2544c;
      border: 1px double #a2544c;
      color: #fff;
    }
    &:active, &:hover{
      background: #833832;
      border: 1px double #833832;
      color: #fff;
    }
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected::hover{
    &_span,
    &_span:hover{
      background: #e8b6b1;
      border: 1px double #e8b6b1;
      color: #833832;
    }
  }

`

const Button = styled.a`
  cursor: pointer;
  font-weight: 600 ;
  height: 48px;
  width: 360px;
  background-color: #833832;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase ;
  display: flex ;
  justify-content: center;
  align-items: center;
  transition: all 0.45s;
  &:hover, &:focus{
    color: #fff;
    background-color: #5a150f
  }
  @media (max-width: 999px) {
    width: 260px;
  }
`

function Bookingmodal({visible, onShowModal, selectedRoom}) {  

  const [ startDate, setStartDate ] = useState()
  const [ endDate, setEndDate ] = useState()
  const [ focusedInput, setFocusChange ] = useState('startDate')

  const {lang} = useContext(LanguageContext)

  useEffect(() => {
    if(visible) setFocusChange('startDate')
  }, [visible]);

  useEffect(() => {
    if(moment().valueOf() < moment("2021-10-01").valueOf()) {
      setStartDate(moment("2021-10-01"))
      setEndDate(moment("2021-10-01").add(1, 'day'))
    }
    else {
      setStartDate(moment())
      setEndDate(moment().add(1, 'day'))
    }
  }, []);
  
  useEffect(() => {
    setStartDate((c) => moment(c).locale(lang))
    setEndDate((c) => moment(c).locale(lang))
  }, [lang])
  
  return (
    <Modal 
      open={visible} 
      styles={{ overlay: { width: '100%'} }}
      onClose={() => onShowModal(false)} 
      blockScroll={false}
      focusTrapped={false}
      center
      classNames={{
        overlay: 'Poverlay',
        modal: 'Pmodal',
        closeButton: 'PcloseButton',
        closeIcon: 'PcloseIcon',
        transitionEnter: 'PtransitionEnter',
        transitionEnterActive: 'PtransitionEnterActive',
        transitionExit: 'PtransitionExit',
        transitionExitActive: 'PtransitionExitActive',
      }}
    >
      <div className="Pmodal-content">
        <div className="Pmodal-title">
          <FormattedMessage id='calendar.titulo'/>
        </div>
        <div className="Pmodal-text">
          <div><FormattedMessage id='calendar.bajada.1'/></div> 
          <div><FormattedMessage id='calendar.bajada.2'/></div>
          <div><FormattedMessage id='calendar.bajada.3'/></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          
        <DPContainer>
        <DayPickerRangeController
          startDate={startDate}
          endDate={endDate}
          onDatesChange={(e) => { setStartDate(e.startDate), setEndDate(e.endDate)}}
          focusedInput={focusedInput} 
          onFocusChange={focusedInput => setFocusChange(focusedInput || 'startDate')}
          hideKeyboardShortcutsPanel={true}
          noBorder={true}
          numberOfMonths={isMobile ? 1 : 2}
          minDate={startDate}
          isOutsideRange={day => isInclusivelyBeforeDay(day, moment("2021-09-30"))}
        />
      </DPContainer>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>

        {
          selectedRoom ? 
          <Button href={`https://bookings.ihotelier.com/bookings.jsp?hotelid=99498&roomtypeid=${selectedRoom}&currency=${lang === 'es' ? 'CLP' : 'USD'}&languageid=${lang}_${lang}&datein=${moment(startDate).format('MM/DD/YYYY')}&dateout=${moment(endDate).format('MM/DD/YYYY')}`} target='_blank'>
            <FormattedMessage id='button.reservar'/>  
          </Button> :
          <Button href={`https://bookings.ihotelier.com/bookings.jsp?hotelid=99498&currency=${lang === 'es' ? 'CLP' : 'USD'}&languageid=${lang}_${lang}&datein=${moment(startDate).format('MM/DD/YYYY')}&dateout=${moment(endDate).format('MM/DD/YYYY')}`} target='_blank'>
            <FormattedMessage id='button.reservar'/>
          </Button>  
        }

        </div>
      </div>
    </Modal>
  )
}

export default Bookingmodal
