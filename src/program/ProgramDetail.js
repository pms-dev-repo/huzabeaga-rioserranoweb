import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';




const Section = styled.div`
  position: relative;
  z-index: 2;
  background-color: #F0EFEF;
  padding: 60px 0 120px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 16px 0 80px 0;
  }

  @media (max-width: 575px) {
    padding: 80px 24px 40px 24px;
  }
`

const SectionHeader = styled.div`
  max-width: 1050px;
  padding: 24px;
  margin: auto;
  margin-bottom: 72px;

  @media (max-width: 575px) {
    padding: 0;
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
    letter-spacing: 8px; 
    font-weight: 300; 
    margin-bottom: 16px;
  }
  .card-text{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 2;
    letter-spacing: .4px;
  }
`
const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 16px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 575px) {
    font-size: 22px;
    letter-spacing: 8px;
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
  color: #96908A;
  max-width: 470px;

  @media (max-width: 575px) {
    margin: 24px 0 24px 0;
  }
`

const SectionIllus = styled.div`
 position: absolute;
  right: 2%;
  opacity: .20;
  font-size: 500px;
  top: 10%;
  line-height: 0;

  @media (max-width: 575px) {
    opacity: 0.05;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: 700px;
  position: relative;
  flex: auto;
  overflow: hidden;

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

export default function ProgramDetail({title, text, videoCover, illustration}) {
  
  const DynamicComponent = illustration;
  return (
    <Section id="programDetail">
      <Container fluid>
        <Row>
          <Col xl="12" style={{padding: 0}}>
            <ImageWrapper data-scroll data-scroll-speed="1.5">
              <Image style={{backgroundImage: `url(${videoCover})`}}></Image>
            </ImageWrapper>
          </Col>
          
        </Row>
      </Container>
    </Section>
  );
}
