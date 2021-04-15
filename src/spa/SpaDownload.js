import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Button } from '../styles/Button'

import {FormattedMessage} from 'react-intl'



const Section = styled.div`
  position: relative;
  z-index: 1;
  background-color: #F0EFEF;
  padding: 0px 0 120px 0;

  @media (max-width: 575px) {
    padding: 16px 24px 120px 24px;
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

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 575px) {
    text-align: center;
    font-size: 22px;
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


export default function SpaDownload({title, downloads}) {
  

  return (
    <Section id="spaDownload">
      <div id="spaDownload" data-scroll data-scroll-speed="1">
        <SectionHeader>
          <Title><FormattedMessage id="spa.descargas.titulo"/></Title>
        </SectionHeader>
        
        <Container>
          <Row data-scroll data-scroll-speed="1">
            <Col xl = "12" style = {{padding: 0 }} >
              <Actions>
                <Button 
                  black 
                  lg
                >
                  <FormattedMessage id="spa.descargas.pdf"/>
                </Button>
              </Actions>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
}
