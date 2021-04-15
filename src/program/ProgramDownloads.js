import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { ButtonLink } from '../styles/Button'



const Section = styled.div`
  position: relative;
  z-index: 2;
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
  right: -2%;
  opacity: .20;
  font-size: 600px;
  top: 10%;
  line-height: 0;

  @media (max-width: 1000px) {
    right: 0;

  }

  @media (max-width: 575px) {
    right: -90%;
    opacity: 0.05;
    display: none;
  }
`

const Actions = styled.div`
margin-left: 200px;
  a + a {
    margin-left: 24px;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      a  {
        margin-left: 0;
    }
      a + a{
        margin-left: 0;
        margin-top: 40px;
    }
  }

  @media (max-width: 575px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      a  {
        margin-left: 0;
        font-size: 12px;
        
    }
      a + a{
        margin-left: 0;
        margin-top: 20px;
    }
  }
`


export default function ProgramDetail({title, illustration, downloads}) {
  
  const Illustration_ = illustration


  return (
    <Section id="programDownload">
      <div id="programDownload" data-scroll data-scroll-speed="1">
        <SectionHeader>
          <Title>{title}</Title>
        </SectionHeader>
        <SectionIllus
          data-scroll
          data-scroll-speed="-1" 
          data-scroll-target="#programDownload"
        >
          <Illustration_ />
        </SectionIllus>
        <Container>
          <Row data-scroll data-scroll-speed="1">
            <Col xl = "12" style = {{padding: 0 }} >
              <Actions>
                { downloads.map((item, index) => 
                  <ButtonLink 
                    key={index}
                    black 
                    lg
                    download
                    href={item.path}
                  >
                    {item.name}
                  </ButtonLink>
                ) }
              </Actions>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
}
