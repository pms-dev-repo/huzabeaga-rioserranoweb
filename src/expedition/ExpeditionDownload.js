import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Button } from '../styles/Button'



const Section = styled.div`
  position: relative;
  z-index: 1;
  background-color: #F0EFEF;
  padding: 0px 0 120px 0;

  @media (max-width: 1000px) {
    padding: 100px 24px 120px 24px;
  }

  @media (max-width: 575px) {
    padding: 50px 24px 120px 24px;
  }
`

const SectionHeader = styled.div`
  max-width: 1050px;
  padding: 24px;
  margin: auto;
  margin-bottom: 32px;

  @media (max-width: 575px) {
    padding: 0;
  }

`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  color: #302D2A;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: 575px) {
    font-size: 22px;
    text-align: center;
  }
`

const SectionIllus = styled.div`
  position: absolute;
  right: -5%;
  opacity: .20;
  font-size: 400px;
  top: 10%;
  line-height: 0;

  @media (max-width: 575px) {
    display: none;
  }
`

const Actions = styled.div`
margin-left: 200px;
  button + button {
    margin-left: 24px;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      button  {
        margin-left: 0;
    }
      button + button{
        margin-left: 0;
        margin-top: 40px;
    }
  }

  @media (max-width: 575px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      button  {
        margin-left: 0;
        font-size: 12px;
        
    }
      button + button{
        margin-left: 0;
        margin-top: 20px;
    }
  }
`


export default function ExpeditionDownload({title, illustration, downloads}) {
  
  const Illustration_ = illustration

  return (
    <Section id="expeditionDownload">
      <div id="expeditionDownload" data-scroll data-scroll-speed="1">
        <SectionHeader>
          <Title>{title}</Title>
        </SectionHeader>
        <SectionIllus
          data-scroll
          data-scroll-speed="-1" 
          data-scroll-target="#expeditionDownload"
        >
          <Illustration_ />
        </SectionIllus>
        <Container>
          <Row data-scroll data-scroll-speed="1">
            <Col xl = "12" style = {{padding: 0 }} >
              <Actions>
                { downloads.map((item, index) => 
                  <Button 
                    key={index}
                    black 
                    lg
                  >
                    {item.name}
                  </Button>
                ) }
              </Actions>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
}
