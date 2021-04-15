import React, { useState } from 'react';
import styled, { css } from 'styled-components' 
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { ButtonGhost } from '../styles/ButtonBlack'
import { Button } from '../styles/Button'
import Modal from 'react-responsive-modal'
import {FormattedMessage} from 'react-intl'

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

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 12.5px;
  color: #96908A;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 16px;

  @media (max-width: 575px) {
    font-size: 22px;
    letter-spacing: 8px;
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

const ContactWhite = styled.div`
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
  max-width: 500px;
  float: right;
  text-align: left;
  margin-top: 160px;
  padding-right: 16px;
  padding-left: 16px;
  color: #96908A;

  @media (max-width: 1400px) {
    max-width: 420px;
    padding-right: 10%;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    padding-left: 0;
  }

  @media (max-width: 575px) {
    max-width: 500px;
    padding-right: 0px;
  }
`

const SectionIllus = styled.div`
  position: absolute;
  top: 80%;
  opacity: .25;
  font-size: 600px;
  line-height: 0;
  z-index: -1;
`


const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  flex: auto;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
    margin-top: 50px;
  }

  @media (max-width: 575px) {
    height: 400px;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: scale(1.25);
`
const ContactInfo = styled.div`
  max-width: 330px;
  margin: 0 36px;
  .title{
      font-size: 14px;
      color: #302D2A;
  }
  .phone-number{
      font-size: 30px;
      color: #833832;
      margin: 24px 0;
  }

  .contact-list {
      font-size: 14px;
      color: #833832;
    span{
      color: #302D2A;
    }
  }

  .emergency {
    margin: 24px 0;
    .message{
      font-size: 14px;
      color: #302D2A;
    }
    .phone-number{
      margin: 0;
      font-size: 20px;
      color: #833832;
    }
  }

  button {
    margin: 0;
  }

`

const ContactForm = styled.form`
  width: 320px;
  max-width: 320px;
  .form-group{
    color:#96908A;
    text-transform: uppercase;
    margin-bottom: 16px;
    label{
      font-size: 14px;
    }
    .form-control {
      border: 1px solid #96908A;
      border-radius: 0;
      font-size: 14px;
      &:focus{
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
        border: 1px solid #302D2A;
      }
    }
  }
  .form-actions{
    button + button {
      margin-left: 24px;
    }
  }

  @media (max-width: 999px) {
    .form-group{
      color:#ffffff;
      .form-control {
        border: 1px solid transparent;
        &:focus{
          box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
          border: 1px solid transparent;
        }
      }
    }
    .form-actions{
      button {
        background-color: #7d2e27;
        &:hover{
          background-color: #5a150f;
        }
      }
    }
  }
`


export default function ContactDetail({image}) {
  
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  const [ visible, setVisible ] = useState(false)

  return (
    <Section id="contactDetail">
      <Container fluid>
        <ContactWhite 
          data-scroll
          data-scroll-speed="1.5" 
          data-scroll-target="#contactDetail"
        />
        <Row>
          <Col xl="5" md="6"  sm="12" style = {{padding: 0 }}>
            <CajaText 
               data-scroll
               data-scroll-speed="1.5" 
               data-scroll-target="#contactDetail"
            >
               <Title>
                <FormattedMessage id="contact.detail.titulo"/>
              </Title>
              <ContactInfo>
                <div className="title"> <FormattedMessage id="contact.detail.subtitulo"/></div>
                <div className="phone-number">+(56-61) 22-20878</div>
                <div className="contact-list">
                  <div><span><FormattedMessage id="contact.detail.web"/></span> www.rioserrano.com</div>
                  <div><span><FormattedMessage id="contact.detail.email"/></span> reservas@rioserrano.com</div>
                </div>
                <div className="emergency">
                  <div className="message"><FormattedMessage id="contact.detail.numero"/></div>
                  <div className="phone-number">+59 9 3372 0869</div>
                </div>

                {/* <ButtonGhost type="button" onClick={() => setVisible(true)}>
                  <FormattedMessage id="contact.detail.boton"/>
                </ButtonGhost>  */}

              </ContactInfo>
              
              {/* <Text>
                <FormattedMessage id="contact.detail.bajada"/>
              </Text> */}
            </CajaText>
          </Col>
          <Col xl="7" md="6" sm="12" style = {{padding: 0 }}>
            <ImageWrapper data-scroll data-scroll-repeat>
              <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <Image style={{backgroundImage: `url(${image})`}}></Image>
              </div>
            </ImageWrapper>
          </Col>
        </Row>

        <Modal 
          open={visible} 
          styles={{ overlay: { width: '100%'} }}
          onClose={() => setVisible(false)} 
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
              <FormattedMessage id='contact.modal.titulo'/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
              <ContactForm>
                <div className="form-group">
                  <label><FormattedMessage id='contact.modal.nombre'/></label>
                  <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label><FormattedMessage id='contact.modal.mail'/></label>
                  <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                  <label><FormattedMessage id='contact.modal.telefono'/></label>
                  <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label><FormattedMessage id='contact.modal.mensaje'/></label>
                  <textarea className="form-control"/>
                </div>
                <div className="form-actions">
                  <Button black><FormattedMessage id='contact.modal.enviar'/></Button>
                  <Button black><FormattedMessage id='contact.modal.borrar'/></Button>
                </div>
              </ContactForm>
            </div>
          
          </div>
        </Modal>
      </Container>
    </Section>
  );
}