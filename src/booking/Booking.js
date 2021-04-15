import React, { useState } from "react";
import styled from 'styled-components'
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

const DPContainer = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  .label{
    width: 50%;
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
    }
  }
  .DateRangePickerInput_arrow + .DateInput{
    margin-left: -1px;
  }
  .DateInput_input__focused{
    border: 0;
  }
  .CalendarDay__selected{
    background: #833832;
    border: 1px double #833832;
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
  .CalendarDay__hovered{
    &_span,
    &_span:hover{
      background: #e8b6b1;
      border: 1px double #e8b6b1;
      color: #833832;
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

function Booking() {

  const [ startDate, setStartDate ] = useState(moment())
  const [ endDate, setEndDate ] = useState(null)
  const [ focusedInput, setFocusChange ] = useState(null)


  return (
    <div>
      <DPContainer>
        <div style={{ display: 'flex' }}>
          <div className="label">Llegada</div>
          <div className="label">Salida</div>
        </div>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) => { setStartDate(startDate), setEndDate(endDate)}}
          focusedInput={focusedInput} 
          onFocusChange={focusedInput => setFocusChange(focusedInput)}
          startDateId="startDateId"
          endDateId="endDateId"
          hideKeyboardShortcutsPanel={true}
          noBorder={true}
          startDatePlaceholderText={''}
          endDatePlaceholderText={''}
          numberOfMonths={1}
          openDirection="down"
          withFullScreenPortal={true} 
        />
      </DPContainer>
    </div>
  )
}

export default Booking

