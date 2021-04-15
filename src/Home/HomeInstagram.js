import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import INSAUrl from '../../images/home/insta-1.jpg'
import INSBUrl from '../../images/home/insta-2.jpg'
import INSCUrl from '../../images/home/insta-3.jpg'
import INSDUrl from '../../images/home/insta-4.jpg'
import INSEUrl from '../../images/home/insta-5.jpg'
import SectionBg from '../../images/home/puma_pattern.svg'
import axios from 'axios'

import {FormattedMessage} from 'react-intl'

const InsatgramIcon = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <defs><clipPath id="a"><rect width="24" height="24" fill="none"/></clipPath></defs><g clipPath="url(#a)"><rect width="24" height="24" fill="rgba(255,255,255,0)"/><path d="M13,18H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0h8a5.006,5.006,0,0,1,5,5v8A5.006,5.006,0,0,1,13,18ZM5,1.75A3.271,3.271,0,0,0,1.75,5v8A3.271,3.271,0,0,0,5,16.25h8A3.271,3.271,0,0,0,16.25,13V5A3.271,3.271,0,0,0,13,1.75ZM9,13.5a4.5,4.5,0,0,1,0-9h.01a4.5,4.5,0,0,1-.01,9ZM9,6.25A2.75,2.75,0,1,0,11.75,9,2.754,2.754,0,0,0,9,6.25Zm4.75-1a1,1,0,1,1,1-1A1,1,0,0,1,13.75,5.25Z" transform="translate(3 3)"/></g>
    </svg>
  )
}


const Section = styled.section`
  padding-top: 170px;
  position: relative;
  background-color: #FFF8F0;
  @media (max-width: 480px) {
    padding-top: 80px;
  }
`
const BgImage = styled.img`
  position: absolute;
  left: 0;
  top: 15%;
  opacity: .25;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
   
  }
`

const Container = styled.div`
  max-width: 1432px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 480px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`
const Content = styled.div`
  ${props => props.flex ? 'display: flex' : ''}
  @media(max-width: 1000px){
    ${props => props.flex ? 'flex-direction: column' : ''}
  }
`

const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 15px;
  text-align: center;
  color: #302D2A;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 32px;
    letter-spacing: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
    letter-spacing: 8px;
    margin-bottom: 0px;
  }
`
const Text = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  max-width: 800px;
  margin: auto;
  letter-spacing: 1.5px;
  line-height: 1.75;
  margin-bottom: 100px;
  @media (max-width: 480px) {
    margin: 24px 0 24px 0;
  }
`

const Grid = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 768px){
    padding: 0 15px;
  }

  @media (max-width: 480px){
    padding: 0 24px;
  }
`

const GridContainer = styled.ul`
  position: relative;
  width: 100%;
  height: 718px;
  padding: 0;
  margin: 0;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
const GridBlock = styled.li`
  position: relative;
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  a{
    display: block;
    width: 100%;
    img{
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.4);
      transition: transform 1.5s;
      
      @media (max-width: 768px){
        position: static;
        height: auto;
        object-fit: initial;
      }
    }
    .info{
      position: absolute;
      bottom: 0;
      display: flex;
      width: 100%;
      &-icon{
        font-size: 24px;
        line-height: 40px;
        width: 40px;
        height: 40px;
        text-align: center;
        background-color: #FFF8F0;
        color: #302D2A;
        transition: all 0.9s ease;
      }
      &-account{
        font-weight: 600;
        line-height: 40px;
        margin-left: 15px;
        letter-spacing: .3px;
        /* text-transform: uppercase; */
        color: #fff;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  &:hover{
    img{
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
      }
      .info{
        &-icon{
          background-color: transparent;
          transition: all 0.9s ease;
          svg{
            fill: white;
          }
        }
        
      }
    }
  @media (min-width: 769px){
    position: absolute;
    width: 25%;
    height: 359px;
    &:nth-child(1){
      top: 0;
      left: 0;
    }
    &:nth-child(2){
      top: 0;
      left: 50%;
    }
    &:nth-child(3){
      top: 0;
      left: 75%;
    }
    &:nth-child(4){
      top: 50%;
      left: 50%;
    }
    &:nth-child(5){
      top: 50%;
      left: 75%;
    }
  }
`
const GridBigBlock = styled(GridBlock)`
  @media (min-width: 769px){
      width: 50%;
      height: 718px;
  }
`



export default function HomeGastronomy() {

  useEffect(() => {
    axios('https://www.instagram.com/rioserranohotelspa/')
    .then(({data}) => {
      data = data.split("window._sharedData = ")[1].split("<\/script>")[0];
      data = JSON.parse(data.substr(0, data.length - 1));
      data = data.entry_data.ProfilePage || data.entry_data.TagPage;
      data = data[0].graphql.user || data[0].graphql.hashtag;
      const prevArray = data.edge_owner_to_timeline_media.edges.filter((item, index) => index < 5 && item)
      setPhotos(prevArray)
    })
  }, [])

  const [photos, setPhotos] = useState(null)

  return (
    <Section id="instagram">
      <BgImage 
        src={SectionBg}
        data-scroll
        data-scroll-speed="-2" 
        data-scroll-target="#instagram"
      />
      <Container>
        <Content>
          <Title>
            <FormattedMessage id='home.instagram.titulo'/>
          </Title>
          <Text>
            @rioserranohotelspa
          </Text>
        </Content>
      </Container>
      <Grid>
        <GridContainer>
        {
          photos !== null && 
          photos.map((photo, index) =>
            index === 0 ?  
              <GridBigBlock key={photo.node.id}>
                <a href={`https://www.instagram.com/p/${photo.node.shortcode}`} target='_blank'>
                  <img src={photo.node.display_url}/>
                  <div className="info">
                    <div className="info-icon">
                      <InsatgramIcon />
                    </div>
                  </div>
                </a>
              </GridBigBlock> :
              <GridBlock key={photo.node.id}>
              <a href={`https://www.instagram.com/p/${photo.node.shortcode}`} target='_blank'>
                  <img src={photo.node.display_url}/>
                  <div className="info">
                    <div className="info-icon">
                      <InsatgramIcon />
                    </div>
                  </div>
                </a>
            </GridBlock>
            
          )
        }
        </GridContainer>
      </Grid>
    </Section>
  )
}
