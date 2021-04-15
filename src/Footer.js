import React from 'react'
import styled from 'styled-components'
import ImgDeer from '../images/footer/deer.svg'
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Youtube from "./icons/Youtube";
import Chevron from "./icons/Chevron"
import Drive from "./icons/Drive";
import { Row } from 'styled-bootstrap-grid';

import {FormattedMessage} from 'react-intl'

const FooterSection = styled.div`
  display:   ${props => props.display === 'true' ? 'block' : 'none'};
`

const FooterMenu = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  position: relative;
  background-color: #333333;
  background-repeat: no-repeat;
  background-position: 50px 50px;
`


const Container = styled.div`
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 480px) {
    max-width: 320px;
  }
`

const Menu = styled.div`
  width: 50%;
  padding-right: 32px;
  padding-left: 16px;
  
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 50px 0 50px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 24px 0 24px;
  }

  .title{
    font-size: 16px;
    color: #FFF8F0;
    text-transform: uppercase;
  }
  nav{
    .nav{
      margin-top: 32px;
    }
    .nav-item{

      &-toTop{
        &:hover{
          a{
            background-color: #fff;
            svg{
              fill: #333333 !important;
            }
          }
        }
      }

      &-facebook{
        &:hover{
          a{
            background-color: #3b5998;
          }
        }
      }
      &-insta{
        &:hover{
          a{
            background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
          }
        }
      }
      &-ytb{
        &:hover{
          a{
            background-color: #c4302b;
          }
        }
      }
      &-drive{
        &:hover{
          a{
            background-color: #4688F4;
          }
        }
      }
      
      &:last-child{
        margin-left: auto;
        transform: rotate(180deg);
      }
      &:first-child{
        margin-left: 0px;
      }
      margin-left: 24px;
    }
    .nav-item-down{
      
      &:last-child{
        margin-left: auto;
      }
      &:first-child{
        margin-left: 0px;
      }
      margin-left: 24px;
    }
  }
  .contact{
    a {
      color: #FFF8F0;
      text-decoration: none;
    }
    margin-top: 160px;
    &-phone{
      font-size: 20px;
    }
    &-email{
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    nav{
      .nav{
        margin-top: 32px;
      }
      .nav-item{
        &:last-child{
          margin-left: -30px;
          transform: rotate(180deg);
        }
        &:first-child{
          margin-left: 0px;
        }
        margin-left: 24px;
        margin-bottom: 0px;
      }
      .nav-item-down{
        &:last-child{
          margin-left: auto;
        }
        &:first-child{
          margin-left: 0px;
        }
        margin-left: -123px;
        margin-top: 77px;
        margin-right: 150px;
      }
    }

    .contact{
        margin-top: 80px;
      }
  }
`



const NavItemIcon = styled.a`
  height: 48px;
  width: 48px;
  border-radius: 98px;
  color: #FFF8F0;
  border: 2px solid #FFF8F0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  transition: background 0.3s ease-in-out;
  &:hover{
    color: #ffffff;
  }
`

const MenuImage = styled.div`
  width: 50%;
  padding-right: 16px;
  padding-left: 16px;
  opacity: .5;

  @media (max-width: 1000px) {
      display: none;
      }
  @media (max-width: 480px) {
      display: none;
      }
`

const FooterBottom = styled.div`
  background: #302D2A;
  .content{
    padding: 32px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    color: #96908A;
    font-size: 14px;
  }
  .copyright{

  }
  .developer{

  }

  @media (max-width: 1000px) {
      .content{
      padding: 32px;
      
    }
  }

  @media (max-width: 480px) {
      .content{
      padding: 32px 15px;
      
    }
  }
`


export default function Footer(props, {location}) {

  const handleGotoTop = () => {
    if(props.paretnRef.current !== null){
      props.paretnRef.current.scrollTo('top', 0)
    }
    else {
      window.scrollTo(0, 0);
    }
  } 

  return (
    <FooterSection display={location === '/gallery' || location === '/expeditions' || location === '/covid' ? 'false' : 'true'}>
      <FooterMenu>
        <Container>
          <Row>
            <MenuImage>
              <img src={ImgDeer}/>
            </MenuImage>
            <Menu>
              <div className="title">
                <FormattedMessage id='footer.titulo'/>
              </div>
              <nav>
                <ul className="nav">
                  <li className="nav-item nav-item-facebook">
                    <NavItemIcon href="https://www.facebook.com/RioSerranoPatagonia/" target="_blank">
                      <Facebook/>
                    </NavItemIcon>
                  </li>
                  <li className="nav-item nav-item-insta">
                    <NavItemIcon href="https://www.instagram.com/rioserranohotelspa/" target="_blank">
                      <Instagram/>
                    </NavItemIcon>
                  </li>
                  <li className="nav-item-down nav-item-ytb">
                    <NavItemIcon href="https://www.youtube.com/channel/UCizA_Jf_2EXbcHmuFCEakCA" target="_blank">
                      <Youtube/>
                    </NavItemIcon>
                  </li>
                  <li className="nav-item-down nav-item-drive">
                    <NavItemIcon href="https://drive.google.com/drive/folders/1lIUzV6Ul71p2Vl19I-nBRQ82c1v8-juk" target="_blank">
                      <Drive/>
                    </NavItemIcon>
                  </li>
                  <li className="nav-item nav-item-toTop" style={{ cursor: 'pointer' }}>
                    <NavItemIcon onClick={handleGotoTop}>
                      <Chevron/>
                    </NavItemIcon>
                  </li>
                </ul>
              </nav>
              <div className="contact">
                <div className="contact-phone">
                  <a href="tel:+56612224148">+56 61 2224148</a>
                </div>
                <div className="contact-email" >
                  <a href="mailto:reservas@rioserrano.com">reservas@rioserrano.com</a>
                </div>
              </div>
            </Menu>
          </Row>
        </Container>
      </FooterMenu> 
      <FooterBottom>
        <Container>
          <div className="content">
            <FormattedMessage id="footer.derechos"/>
          </div>
        </Container>
      </FooterBottom>
    </FooterSection>
  )
}
