import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import SpaImage from '../../images/spa/spa_gym@2x.jpg'
import Gym from '../illustrations/Gym'


const Section = styled.div`
  position: relative;
  /* z-index: 2; */
  background-color: #F0EFEF;
  padding: 120px 0 120px 0;
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
  right: 0;
  opacity: .20;
  font-size: 85vw;
  bottom: 5%;
  transform: translateY(50%);
  line-height: 0;
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
`

export default function SpaMassage() {
  

  return (
    <Section id="spaGym">
      <SectionIllus
        data-scroll
        data-scroll-speed="-0.5" 
        data-scroll-target="#spaGym"
      >
        <Gym />
      </SectionIllus>
      <Container fluid>
        <Row>
          <Col xl="8" col>
            <ImageWrapper data-scroll data-scroll-repeat>
              <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <Image style={{backgroundImage: `url(${SpaImage})`}}></Image>
              </div>
            </ImageWrapper>
          </Col>
          <Col xl="4" col>
            <Card
              data-scroll
              data-scroll-speed="1" 
              data-scroll-target="#spaGym"
            >
              <div className="card-title">
              Gimnasio Equipado
              </div>
              <div className="card-text">
                Donec imperdiet, dolor nec imperdiet tincidunt, dui dui congue dolor. Morbi rutrum id nisl eget pulvinar. 
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
