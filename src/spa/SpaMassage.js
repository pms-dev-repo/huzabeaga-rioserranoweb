import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
/* import SpaImage from '../../images/spa/spa_massage@2x.jpg' */
import Owl from '../illustrations/Owl'

import {FormattedMessage} from 'react-intl'

const Section = styled.div`
  position: relative;
  /* z-index: 2; */
  background-color: #F0EFEF;
  padding: 40px 0 120px 0;

  @media (max-width: 768px) {
    padding: 0 0 120px 0;
  }

  @media (max-width: 575px) {
    padding: 0 24px 280px 24px;
  }
`

const SectionHeader = styled.div`
  max-width: 748px;
  padding: 24px;
  margin: auto;
  margin-bottom: 72px;
`


const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  color: #302D2A;
  text-transform: uppercase;
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
`

const SectionIllus = styled.div`
  position: absolute;
  right: 4%;
  opacity: .20;
  font-size: 450px;
  top: 10%;
  line-height: 0;

  @media (max-width: 575px) {
    opacity: 0.05;
  }
`

const Card = styled.div`
  max-width: 470px;
  float: right; 
  text-align: left; 
  position: absolute; 
  bottom: 40px;
  background-color: #302D2A;
  left: -100px;
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
    bottom: 40px;
    right: 15px;
    left:15px;
    margin: 0 0 0 auto;
    .card-title{
      font-size: 32px;
    }
    .card-text{
      margin-left: 0px;
    }
  }

  @media (max-width: 575px) {
    bottom: -190px;
    left: 0;
    margin: 0 -15px -15px 0;
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

export default function SpaMassage({image}) {
  

  return (
    <Section id="spaMassage">
      <SectionIllus
        data-scroll
        data-scroll-speed="-1" 
        data-scroll-target="#spaMassage"
      >
        <Owl />
      </SectionIllus>
      <Container fluid>
        <Row>
          <Col xl="8" md="6"  sm="12" style = {{padding: 0}}>
            <ImageWrapper data-scroll data-scroll-repeat>
              <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <Image style={{backgroundImage: `url(${image})`}}></Image>
              </div>
            </ImageWrapper>
          </Col>
          <Col xl="4" md="6"  sm="12" style = {{padding: 0}}>
            <Card
              data-scroll
              data-scroll-speed="1" 
              data-scroll-target="#spaMassage"
            >
              <div className="card-title">
                <FormattedMessage id="spa.massage.titulo"/>
              </div>
              <div className="card-text">
                <FormattedMessage id="spa.massage.bajada"/>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
