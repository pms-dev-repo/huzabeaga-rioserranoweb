import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
/* import DetailImage from '../../images/spa/spa_enviroment@2x.jpg' */
import Spa from '../illustrations/Spa'

import {FormattedMessage} from 'react-intl'

const Section = styled.div`
  position: relative;
  z-index: 2;
  background-color: #F0EFEF;
  padding: 40px 0 240px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 120px 0 120px 0;
  }

  @media (max-width: 575px) {
    padding: 0 24px 120px 24px;
  }
`

const SectionHeader = styled.div`
  max-width: 650px;
  padding: 24px;
  margin: auto;
  margin-bottom: 72px;

  @media (max-width: 575px) {
    padding: 50px 0 0 0;
  }
`

const Card = styled.div`
  max-width: 470px;
  float: right; 
  text-align: left; 
  position: absolute; 
  bottom: 40px;
  background-color: #302D2A;
  right: -100px;
  z-index: 1;
  padding: 48px;
  .card-title{
    font-size: 35px;
    color: #FFFFFF; 
    letter-spacing: 10px; 
    font-weight: 300; 
    margin-bottom: 16px;
  }
  .card-text{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 2;
    letter-spacing: .3px;
    margin-left: 48px;
  }

  @media (max-width: 768px) {
    bottom: -450px;
    left: 15px;
    margin: 0 150px 0 0;
    .card-title{
      font-size: 32px;
    }
    .card-text{
      margin-left: 0px;
    }
  }

  @media (max-width: 575px) {
    bottom: -650px;
    left: 0;
    right: 0;
    margin: 0 0 70px 0;
    .card-title{
      font-size: 22px;
      margin-left: -30px;
      line-height: 1.2;
    }
    .card-text{
      margin-left: -30px;
      line-height: 1.8;
    }
  }
`
const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 575px) {
    font-size: 22px;
  }
`
const Text = styled.p`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-left: 80px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  color: #833832;

  @media (max-width: 575px) {
    margin: 24px 0 24px 0;
  }
`

const SectionIllus = styled.div`
 position: absolute;
  left: -10%;
  opacity: .20;
  font-size: 900px;
  top: 10%;
  line-height: 0;

  @media (max-width: 575px) {
    opacity: 0.05;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 540px;
  position: relative;
  flex: auto;
  overflow: hidden;
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: scale(1.25);

  @media (max-width: 575px) {
    height: 320px;
  }
`

export default function SpaEnviorenment({image}) {
  

  return (
    <Section id="spaEnvironment">
      <SectionIllus
        data-scroll
        data-scroll-speed="-1" 
        data-scroll-target="#spaEnvironment"
      >
        <Spa />
      </SectionIllus>
      <Container fluid>
        <Row>
          <Col xl="4" md="6"  sm="12" style = {{padding: 0 }}>
            <Card 
              data-scroll
              data-scroll-speed="1" 
              data-scroll-target="#spaEnvironment"
            >
              <div className="card-title">
                <FormattedMessage id="spa.environment.ambiente.titulo"/>
              </div>
              <div className="card-text">
                <FormattedMessage id="spa.environment.ambiente.bajada"/>
              </div>
            </Card>
          </Col>
          <Col xl="8" md="6"  sm="12" style = {{padding: 0 }}>
            <ImageWrapper data-scroll data-scroll-repeat>
              <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <Image style={{backgroundImage: `url(${image})`}}></Image>
              </div>
            </ImageWrapper>
          </Col>
          
        </Row>
      </Container>
    </Section>
  );
}
