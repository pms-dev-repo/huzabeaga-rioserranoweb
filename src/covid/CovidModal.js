import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import 'react-dates/initialize'
import { LanguageContext } from '../LanguageContext'
import { FormattedMessage } from 'react-intl'
import { isMobile} from 'react-device-detect';

const Button = styled.div`
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

function Bookingmodal({visible, onShowModal}) {  

  let history = useHistory();

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
        modal: 'PmodalCovid',
        closeButton: 'PcloseButton',
        closeIcon: 'PcloseIcon',
        transitionEnter: 'PtransitionEnter',
        transitionEnterActive: 'PtransitionEnterActive',
        transitionExit: 'PtransitionExit',
        transitionExitActive: 'PtransitionExitActive',
      }}
    >
      <div className="PmodalCovid-content">
        <div className="PmodalCovid-title">
          <FormattedMessage id='covid.modal.tittle'/>
        </div>
        <div className="PmodalCovid-text">
          <FormattedMessage id='covid.modal.text1'/>
        </div>
        <div className="PmodalCovid-text">
          <FormattedMessage id='covid.modal.text2'/>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <Button onClick={() => { 
            history.push('/covid')
            onShowModal(false)
          }}>
          <FormattedMessage id='covid.modal.button'/>
          </Button>  
        </div>

      </div>
    </Modal>
  )
}

export default Bookingmodal
