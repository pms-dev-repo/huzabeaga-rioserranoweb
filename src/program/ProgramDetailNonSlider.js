import React from "react";
import styled, { css } from 'styled-components'
import {FormattedMessage} from 'react-intl'

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  overflow: hidden;
  padding: 120px 0;
  @media (max-width: 480px) {
    padding: 80px 0 0 0;
  }
`


const Section = styled.div`
  color: white;
  text-align: center;
  z-index: 2;

`



const SectionHeader = styled.div`
  max-width: 1050px;
  padding: 24px;
  margin: auto;
  margin-bottom: 72px;

  @media (max-width: 575px) {
    padding: 0;
    margin-bottom: 50px;
  }
`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 16px;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 22px;
    letter-spacing: 8px;
    text-align: center;
    line-height: 1.6;
  }
`

const SectionContent = styled.div`
  > div + div{
      margin-top: 96px;
      @media (max-width: 575px) {
      margin-top: 20px;
    }
  }
  
`

const SectionIncludes = styled.div`
  max-width: 720px;
  margin: auto;
  @media (max-width: 575px) {
    max-width: 324px;
    padding: 0px 20px 70px 20px;
  }
  .title{
    font-size: 40px;
    color: #FFFFFF;
    letter-spacing: 10px;
    font-weight: 300;
    margin-bottom: 32px;
    @media (max-width: 575px) {
    font-size: 28px;
    text-align: left;
    letter-spacing: 0.4px;
  }
  }
  .list{
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    @media (max-width: 1000px) {
    padding: 0px 40px;
    }
    @media (max-width: 575px) {
    padding: 0px;
    }
    li {
      text-align: left;
      padding-left: 1em;
      text-indent: -1em;
      font-size: 14px;
      color: #ffffff;
      line-height: 1.25;
      letter-spacing: .3;
      @media (max-width: 575px) {
        line-height: 1.5;
    
  }
    }

    li:before {
      content: '›';
      padding-right: 5px;
      font-size: 1.5em;
    }
  }
`


const SectionBgImage = styled.div`
  background-image: ${props => props.image && css ? `url(${props.image})` : null };
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* opacity: .75; */
  z-index: -1;
  transition: background-image 0.2s ease-in-out;
`

const SectionGradient = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
  @media (max-width: 575px) {
    height: 100%;
    overflow: hidden;
  }
`

function ProgramHeader({title, includes, notIncludes, image}){
  return(
    <SectionWrapper id="detailProgram2">
      
      <Section>
        <SectionHeader>
          <Title>{title}</Title>
        </SectionHeader>

        <SectionContent>
          <SectionIncludes>
            <div className="title">
            <FormattedMessage id="programs.fb.detallePrograma.includes.title"/>
            </div>
            <ul className="list">
              { includes.map((text, index) => 
                <li key={index}>{text}</li>
              )}
            </ul>
          </SectionIncludes>
          <SectionIncludes>
          <div className="title">
            <FormattedMessage id="programs.fb.detallePrograma.notIncludes.title"/>
          </div>
          <div style={{ fontSize: 14, color: '#96908A', lineHeight: 2, letterSpacing: .3 }}>
            <ul className="list">
              { notIncludes.map((text, index) => 
                <li key={index}>{text}</li>
              )}
            </ul>
          </div>
          </SectionIncludes>
        </SectionContent>

        <SectionBgImage
          image={image}
          data-scroll 
          data-scroll-speed="-1.5" 
          data-scroll-call="dynamicBackground" 
          data-scroll-repeat
        />
        <SectionGradient 
          data-scroll 
          data-scroll-speed="-1.5" 
          data-scroll-call="dynamicBackground" 
          data-scroll-repeat
        />
      </Section >
    </SectionWrapper>
  )
}

export default ProgramHeader