import React, { useState, Fragment, memo, useContext } from "react";
import { useHistory } from "react-router-dom";
import { push as MenuComponent } from 'react-burger-menu';
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import { FormattedMessage } from 'react-intl'
import { LanguageContext } from './LanguageContext'
import LogoWithe from '../images/logo-white.svg'
import MenuBurguer from './icons/MenuBurguer'
import Close from './icons/Close'
import Calendar from './icons/Calendar'
import Covid from './icons/Covid'
import BackArrow from './icons/BackArrow'


const MenuButton = styled.div`
  @media (min-width: 1001px) {
    display: none
  }
`

const MenuWrapper= styled(MenuComponent)`
  display: flex;
  transition: all 0.4s ease 0s !important;
  > div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    padding: 0;
    nav{
      height: 100%;
      padding: 0;
      display: flex;
      align-items: center;
    }
  }
`

const MenuContent= styled.div`
  width: 100%;
  &:focus{
    outline: 0;
  }
`

const MenuLanguages= styled.div`
  padding: 0 160px; 
  width: 100%;
`

const MenuLinksWrapper= styled.div`
  width: 100%;
`

const MenuContainerLinks= styled.div`
  width: 100%;
  padding: 16px 48px;
  /* height: 410px; */
  display: flex;
  flex-direction: row;
  overflow: hidden;
`

const MenuLinks= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition-duration: 250ms !important;
  transform:${props =>  props.showMenu ? 'translate3d( 0px, 0px, 0px)' : 'translate3d( -100%, 0px, 0px)' };
  flex: 1 0 auto;
` 
const MenuSubLinks= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition-duration: 250ms !important;
  transform:${props =>   props.showSubMenu ? 'translate3d( -100%, 0px, 0px)' : 'translate3d( 100%, 0px, 0px)' };
  flex: 1 0 auto;
` 
const Link= styled.div`
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    color: #908275;
  }
  & ~ & {
    margin-top: 24px;
  }
  transition: opacity 0.15s, visibility 0.15s;

  &.link-enter {
    opacity: 0;
  }
  &.link-enter-done {
    opacity: 1;
  }
  &.link-exit-active {
    opacity: 0;
  }
  &.link-exit-done {
    opacity: 0;
  }
`

const BackButton =  styled(Link)`
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  margin-left: -24px;
  line-height: 1;
  .back-arrow{
    line-height: 1;
    margin-right: 8px;
  }
`

function Menu({onChangeRoute, setShowModal}) {

  let history = useHistory();

  const [ menuOpen, setMenuOpen ] = useState(false)
  const [ showSubMenu, setShowSubMenu ] = useState(false)
  const [ showMenu, setShowMenu ] = useState(true)
  const [ subMenu, setSubMenu ] = useState(undefined)

  const { toggleLang } = useContext(LanguageContext)


  const menuConfig = [{
    name: "Home",
    path: '/',
  },{
    name: <FormattedMessage id='menu.programas'/>,
    submenu: [{
      name: <FormattedMessage id='menu.programas.allInclusive'/>,
      path: '/program-all-inclusive',
    },{
      name: <FormattedMessage id='menu.programas.fullBoard'/>,
      path: '/program-full-board',
    }]
  },{
    name: <FormattedMessage id='menu.expediciones'/>,
    submenu: [{
      name: <FormattedMessage id='menu.expediciones.hiking'/>,
      path: '/expeditions',
      state: { 
        key: 0
      }
    },{
      name: <FormattedMessage id='menu.expediciones.fullDayPaine'/>,
      path: '/expeditions',
      state: { 
        key: 1
      }
    },{
      name: <FormattedMessage id='menu.expediciones.horseRiding'/>,
      path: '/expeditions',
      state: { 
        key: 2
      }
    },{
      name: <FormattedMessage id='menu.expediciones.navigation'/>,
      path: '/expeditions',
      state: { 
        key: 3
      }
    },{
      name: <FormattedMessage id='menu.expediciones.specials'/>,
      path: '/expeditions',
      state: { 
        key: 4
      }
    }]
  },{
    name: <FormattedMessage id='menu.habitaciones'/>,
    submenu: [{
      name: <FormattedMessage id='menu.habitaciones.superior'/>,
      path: '/room-superior',
    },{
      name: <FormattedMessage id='menu.habitaciones.estandarPlus'/>,
      path: '/room-standar-plus',
    },{
      name: <FormattedMessage id='menu.habitaciones.estandar'/>,
      path: '/room-standar',
    }]
  },{
    name: <FormattedMessage id='menu.spa'/>,
    path: '/spa',
  },{
    name: <FormattedMessage id='menu.galeria'/>,
    path: '/gallery',
  },{
    name: <FormattedMessage id='menu.contacto'/>,
    path: '/contact',
  },{
    name: <FormattedMessage id='menu.language'/>,
    submenu: [{
      name: <FormattedMessage id='menu.language.es'/>,
      type: 'language',
      language: {
        value: 'es'
      }
    },{
      name: <FormattedMessage id='menu.language.us'/>,
      type: 'language',
      language: {
        value: 'en'
      }
    },{
      name: <FormattedMessage id='menu.language.pt'/>,
      type: 'language',
      language: {
        value: 'pt'
      }
    },{
      name: <FormattedMessage id='menu.language.zh'/>,
      type: 'language',
      language: {
        value: 'zh'
      }
    }]
  }
]

  return (
    <MenuButton>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: 80,
          zIndex: 5,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(255, 255, 255, 0) 100%)'
        }}
      >
        <img 
          className="header-menu-logo-img" 
          width="auto" 
          height="auto" 
          alt="logo-rioserrano" 
          src={LogoWithe}
          onClick={() => onChangeRoute('/')}
        />
      </div>
      <div 
        className="navbar-header"
        style={{ right: !menuOpen ? 8 :  -48, fontSize: 32, color: '#fff'  }}
        onClick={() => setMenuOpen(true)}
      >
        <MenuBurguer />
      </div>

      <div 
        className="navbar-header"
        style={{ fontSize: 32, color: '#fff', top: 66  }}
        onClick={() => setShowModal(true)}
      >
        <Calendar />
      </div>

      <div 
        className="navbar-header"
        style={{ fontSize: 38, color: '#fff', top: 116 , height: 70 , backgroundColor: 'rgba(131,56,50,0.5)'  }}
        onClick={() => history.push('/covid')}
      >
        <Covid />
      </div>
      
      <div 
        className="navbar-header navbar-header--close"
        style={{ right: !menuOpen ? -48 :  16, zIndex: 1101, fontSize: 32, color: '#fff' }}
        onClick={() => (setMenuOpen(false))}
      >
        <Close />
      </div>

      <MenuWrapper 
        width={ '100%' }
        isOpen={ menuOpen }
        customBurgerIcon={ false }
        customCrossIcon={ false }
        disableOverlayClick
        onStateChange={({isOpen}) => !isOpen ? (setShowMenu(true), setShowSubMenu(false)) : null}
        right
      >
        <MenuContent>
          <MenuLinksWrapper>
              <MenuContainerLinks>
                <MenuLinks showMenu={showMenu}>
                  {menuConfig.map((item, index) => {
                    const timeOut = (index + 1) * 75;
                    return(
                      <CSSTransition
                        in={menuOpen}
                        timeout={timeOut}
                        classNames="link"
                        key={index}
                        unmountOnExit
                      >
                        <Link 
                          key={index}
                          onClick={() => 
                            item.submenu ? 
                            (setShowSubMenu(true), setShowMenu(false), setSubMenu(index)) :
                            (setMenuOpen(false), onChangeRoute(item.path))
                          }>
                          {item.name}
                        </Link>
                      </CSSTransition>
                    )
                  })}
                </MenuLinks>
                  
                <MenuSubLinks showSubMenu={showSubMenu}>
                  <BackButton onClick={() => (setShowMenu(true), setShowSubMenu(false))}>
                    <div className="back-arrow">
                      <BackArrow />
                    </div>
                    <FormattedMessage id='menu.volver'/>
                  </BackButton>
                  {(subMenu !== undefined && menuConfig[subMenu].submenu ) &&
                    menuConfig[subMenu].submenu.map((item, index) => 
                      <Link 
                        key={index}
                        onClick={() =>
                          item.type === undefined ? 
                          (setMenuOpen(false), onChangeRoute(item.path, item.state)) :
                          (setMenuOpen(false), toggleLang(item.language.value)) 

                        }>
                        {item.name}
                      </Link>
                  )}
                </MenuSubLinks>
              </MenuContainerLinks>
          </MenuLinksWrapper>
        </MenuContent>
      </MenuWrapper>
    </MenuButton>
  )
}

function propsAreEqual() {
  return true
}


export default memo(Menu, propsAreEqual)

