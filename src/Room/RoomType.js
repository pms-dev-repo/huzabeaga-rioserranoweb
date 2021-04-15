import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';


const Section = styled.div`
  position: relative;
  /* z-index: 2; */
  background-color: #F0EFEF;
  padding: 120px 0 120px 0;

  @media (max-width: 768px) {
    padding: 120px 0 120px 0;
  }

  @media (max-width: 575px) {
    padding: 70px 24px 140px 24px;
  }
`
const SectionIllus = styled.div`
  position: absolute;
  right: 5%;
  opacity: .10;
  font-size: 300px;
  top: 25%;

  @media (max-width: 575px) {
    display: none;
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
    bottom: 100px;
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
    bottom: -60px;
    left: 0;
    margin: 0 -15px 0 0;
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

export default function RoomType({title, text, image, cardTitle, cardText, illustration}) {

  const Illustration_ = illustration

  return (
    <Section id="roomType">
      <SectionIllus 
         data-scroll
         data-scroll-speed="-1" 
         data-scroll-target="#roomType"
      >
        <Illustration_ />
      </SectionIllus>
      <Container fluid>
        <Row>
          <Col xl="8" md="6"  sm="12" style = {{padding: 0 }}>
            <ImageWrapper data-scroll data-scroll-repeat>
              <div data-scroll data-scroll-speed="-1.5" style={{ height: '100%'}}>
                <Image style={{backgroundImage: `url(${image})`}}></Image>
              </div>
            </ImageWrapper>
          </Col>
          <Col xl="4" md="6"  sm="12" style = {{padding: 0 }}>
            <Card
              data-scroll
              data-scroll-speed="0.5" 
            >
              <div className="card-title">
              {cardTitle}
              </div>
              <div className="card-text">
                {cardText}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
