import React from "react";
import styled, { css } from 'styled-components' 


import {FormattedMessage} from 'react-intl'

const Section = styled.div`
  height: calc(100vh - 0px);
  position: relative;
  margin-bottom: 0px;
  color: #ffffff;
  text-align: left;
  z-index: 0; 
  @media (max-width: 768px) {
   /*  height: 768px; */
    height: calc(100vh - 0px);
    background-position-x: -150px;
  }

  @media (max-width: 575px) {
    /* height: 640px; */
    height: calc(100vh - 0px);
    background-position-x: -150px;
  }
`


const SectionHeader = styled.div`
  max-width: 700px;
  padding: 24px;
  margin: auto;
  position: absolute;
  bottom: 40px;
  transform: translate(-40% , 0px);
  left: 32%;
  z-index: 1;

  @media (max-width: 1000px) {
    transform: translate(-0% , 0px);
    left: 0;
    padding: 15px;
    bottom: 10px;
  }

  @media (max-width: 575px) {
    transform: translate(-0% , 0px);
    left: 0;
    padding: 15px 24px;
    bottom: 10px;
  }
`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 7.5px;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 22px;
    letter-spacing: 8px;
    text-align: left;
  }
`
const Text = styled.p`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 80px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  color: #ffffff;

  @media (max-width: 575px) {
    text-align: left;
    margin-left: 0px;
  }
`

const SectionBgImage = styled.div`
  background-image: ${props => props.image && css ? `url(${props.image})` : null };
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  height: calc(100vh - 0px);
`


const SectionGradient = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(255, 255, 255, 0) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45vh;
`

export default function ContactHeader({image}){
  return(
    <Section id="headerExpedition">
      <SectionHeader>
        <Title>
          <FormattedMessage id="contact.header.titulo"/>
        </Title>
      </SectionHeader>
      <SectionBgImage image={image} data-scroll data-scroll-speed="-3" data-scroll-position="top" data-scroll-target="#headerExpedition"/>
      <SectionGradient />
    </Section>
  )
}
