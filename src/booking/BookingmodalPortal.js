import React, { useState, useEffect, useContext, useRef } from 'react'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import moment from 'moment'
import 'react-dates/initialize'
/* import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates' */
import {  isInclusivelyBeforeDay, DayPickerRangeController } from 'react-dates'
import {LanguageContext} from '../LanguageContext'
import {FormattedMessage} from 'react-intl'
import {isMobile,isTablet} from 'react-device-detect';

const DPContainer = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 32px;
  .formItem{
    width: 50%;
    cursor: pointer;
    margin-left: -1px;
    @media (max-width: 400px) {
      width: 100%;
    }
  }

  .formInput{
    padding: 8px;
    border: 1px solid #302D2A;
    cursor: pointer;
    color: #302D2A;
    transition: all .2s ease-in-out;
    margin-bottom:16px;
    &:hover{
      background-color: #ececec;
    }
  }

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
    @media (max-width: 1200px) {
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
  font-weight: 400 ;
  height: 74px;
  width: 240px;
  background-color: #833832;
  font-size: 16px;
  letter-spacing: 3px;
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

const ButtonRoom = styled.a`
  cursor: pointer;
  font-weight: 400 ;
  height: 48px;
  width: 100%;
  background-color: #833832;
  font-size: 16px;
  letter-spacing: 3px;
  color: #fff;
  text-transform: uppercase ;
  display: flex ;
  justify-content: center;
  align-items: center;
  /* margin-top: 24px; */
  transition: all 0.45s;
  &:hover, &:focus{
    color: #fff;
    background-color: #5a150f
  }
`

function Bookingmodal({ selectedRoom, type}) {  

  const [ visible, setVisible ] = useState(false)
  const [ startDate, setStartDate ] = useState()
  const [ endDate, setEndDate ] = useState()
  const [ focusedInput, setFocusChange ] = useState('startDate')

  const {lang} = useContext(LanguageContext)

  const containerRef = useRef(null)

  useEffect(() => {
    if(moment().valueOf() < moment("2020-12-20").valueOf()) {
      setStartDate(moment("2020-12-20"))
      setEndDate(moment("2020-12-20").add(1, 'day'))
    }
    else {
      setStartDate(moment())
      setEndDate(moment().add(1, 'day'))
    }
  }, []);

  useEffect(() => {
    if(endDate !== null){
      setVisible(false)
    }
  }, [endDate])

  useEffect(() => {
    setStartDate((c) => moment(c).locale(lang))
    setEndDate((c) => moment(c).locale(lang))
  }, [lang])
  
  
  return (

    <div className="Pmodal-content" 
      style={{ 
        padding: selectedRoom === undefined ? 24 : 0, 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'rgba(255,255,255,1)', 
        width: '100%',
        flexDirection: selectedRoom === undefined ? null : 'column', 
        marginTop: selectedRoom === undefined ? null : 16, 
      }}>
      {selectedRoom === undefined && 
        <div className="Pmodal-title" style={{ fontSize: 18, color: '#302D2A', letterSpacing: 2, textTransform: 'uppercase', margin: 0}}>
          <FormattedMessage id='calendar.titulo'/>
        </div>
      }
     
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', width: '100%', marginLeft: 32, marginRight: 32  }}>
        <DPContainer>
          <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
            <div className="formItem" onClick={() => setVisible(true)}>
              <div className="label">
                <FormattedMessage id='calendar.llegada'/>
              </div>
              <div className="formInput">
                { moment(startDate).format('ddd DD MMM').valueOf()  }
              </div>
            </div>

            <div className="formItem" onClick={() => setVisible(true)}>
              <div className="label">
                <FormattedMessage id='calendar.salida'/>
              </div>
              <div className="formInput">
                { endDate !==null ? moment(endDate).format('ddd DD MMM').valueOf(): '-' }
              </div>
            </div>
          </div>

          <Modal 
            open={visible} 
            styles={{ overlay: { width: '100%'} }}
            onClose={() => setVisible(false)} 
            blockScroll={false}
            focusTrapped={true}
            center
            showCloseIcon={true}
            classNames={{
              overlay: 'Poverlay',
              modal: 'PmodalCalendar',
              closeButton: 'PcloseButton',
              closeIcon: 'PcloseIcon',
              transitionEnter: 'PtransitionEnter',
              transitionEnterActive: 'PtransitionEnterActive',
              transitionExit: 'PtransitionExit',
              transitionExitActive: 'PtransitionExitActive',
            }}
          >
            <div
              style={{ padding: 32 }}
              ref={containerRef}
            >
              <DayPickerRangeController
                startDate={startDate}
                endDate={endDate}
                onDatesChange={(e) => { 
                  setStartDate(e.startDate), 
                  setEndDate(e.endDate),
                  containerRef.current.focus()
                }}
                focusedInput={focusedInput} 
                onFocusChange={focusedInput => setFocusChange(focusedInput || 'startDate')}
                hideKeyboardShortcutsPanel={true}
                noBorder={true}
                numberOfMonths={isMobile ? 1 : 2}
                minDate={startDate}
                isOutsideRange={day => isInclusivelyBeforeDay(day, moment("2020-12-19"))}
              />
            </div>
          </Modal>
        </DPContainer>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: selectedRoom === undefined ? null : '100%' }}>

      {
        selectedRoom ? 
        <ButtonRoom 
          href={`https://bookings.ihotelier.com/bookings.jsp?hotelid=99498&roomtypeid=${selectedRoom}&currency=${lang === 'es' ? 'CLP' : 'USD'}&languageid=${lang}_${lang}&datein=${moment(startDate).format('MM/DD/YYYY')}&dateout=${moment(endDate).format('MM/DD/YYYY')}`} target='_blank'>
          <FormattedMessage id='button.reservar'/>  
        </ButtonRoom> :
        <Button href={`https://bookings.ihotelier.com/bookings.jsp?hotelid=99498&currency=${lang === 'es' ? 'CLP' : 'USD'}&languageid=${lang}_${lang}&datein=${moment(startDate).format('MM/DD/YYYY')}&dateout=${moment(endDate).format('MM/DD/YYYY')}`} target='_blank'>
          <FormattedMessage id='button.reservar'/>
        </Button>  
      }

      </div>
    </div>
  )
}

export default Bookingmodal
