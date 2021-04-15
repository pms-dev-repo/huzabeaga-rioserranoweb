import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';



const Section = styled.div`
  position: relative;
  z-index: 2;
  background-color: #F0EFEF;
  padding: 16px 0 60px 0;
  /* overflow: hidden; */

  @media (max-width: 575px) {
    padding: 16px 24px 40px 24px;
  }

`

const SectionHeader = styled.div`
  max-width: 1050px;
  padding: 24px;
  margin: auto;
  margin-bottom: 72px;

  @media (max-width: 575px) {
    margin-bottom: 0px;
    padding: 0px;
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
`
const SectionIllus = styled.div`
  position: absolute;
  left: -2%;
  opacity: .20;
  font-size: 600px;
  top: 10%;
  line-height: 0;

  @media (max-width: 575px) {
    left: -35%;
    opacity: 0.05;
  }
`

const Card = styled.div`
  /* max-width: 470px;
  float: right;  */
  text-align: center; 
  padding: 24px;
 /*  position: absolute; 
  bottom: 40px;
  background-color: #302D2A;
  right: -100px;
  z-index: 1;
  padding: 48px; */

  @media (max-width: 575px) {
    padding: 16px;
  }
  .card-icon{
    font-size: 30px;
    margin-bottom: 8px;
    color: #9F3223;
  }
  .card-title{
    font-size: 14px;
    color: #96908A; 
    letter-spacing: 2px; 
    font-weight: 800; 
    margin-bottom: 13px;
  }
  .card-text{
    font-size: 14px;
    color: #96908A; 
    letter-spacing: 0.4px; 
    font-weight: 400; 
    line-height: 1.75
  }
`

export default function ProgramDetail({title, illustration, recomendations}) {
  
  const DynamicComponent = illustration;
  return (
    <Section>
      <div id="programRecomendation" data-scroll data-scroll-speed="2">
      <SectionHeader>
      <Title>{title}</Title>
      </SectionHeader>
      <SectionIllus
        data-scroll
        data-scroll-speed="-1" 
        data-scroll-target="#programRecomendation"
      >
        <DynamicComponent />
      </SectionIllus>
      <Container data-scroll data-scroll-speed="1">
        <Row>
          {recomendations.map((item, index) => {
            const Icon = item.icon
            return (
              <Col style = {{padding: 0}}
                key={index}
                xl="3" 
                sm="6"
              >
                <Card>
                  <div className="card-icon">
                    < Icon />
                  </div>
                  <div className="card-title">{item.title}</div>
                  <div className="card-text">{item.text}</div>
                </Card>
              </Col>
            )
          })}
         
        </Row>
      </Container>
      </div>
    </Section>
  );
}
