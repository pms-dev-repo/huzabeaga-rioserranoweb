import React, { useState, useRef, useLayoutEffect, useEffect, useContext } from 'react'
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Select from 'react-select';
import styled from 'styled-components'
import LogoWithe from './icons/LogoWhite'
import LogoDark from './icons/LogoDark'
import HeaderSubMenu from './HeaderSubMenu'

import Advice from './icons/Advice'

import {LanguageContext} from './LanguageContext'
import {FormattedMessage} from 'react-intl'


const Header_ = styled.header`
  @media (max-width: 1000px) {
    display: none;
  }
  .reserva{
    height: 96px;
  }

  .button-covid{
    background-color: #833832;
    color: white;
    width: 240px;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 24px;
    transition: all 0.5s ease;
    :hover{
      background-color: #5a150f;
      cursor: pointer;
    }
    p{
      font-size: 14px;
      margin-bottom: 0;
      margin-left: 10px;
    }

  }
`


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: 30,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    minWidth: 120,
    padding: "2px",
    boxShadow: '0 0 0 1px #fff' ,
    cursor: 'pointer',
    color: '#fff',
    '&:hover, &:focus': {
      boxShadow: '0 0 0 1px #C3C0BD',
      backgroundColor: 'white',
      color: '#302D2A',
    }
  }),
  placeholder: provided => ({
    ...provided,
    color: 'inherit',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'inherit',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: "2px"
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' :"#302D2A",
    cursor: 'pointer',
    backgroundColor: state.isSelected ? "#7d2e27" : 'white',
    textAlign: 'left',
    '&:hover, &:focus': {
      backgroundColor: state.isSelected ? "#7d2e27" : '#e4e7e7',
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "2px",
    color: 'inherit',
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
    '&:hover, &:focus': {
      color: 'inherit',
    },
    'svg': {
      width: 15,
    }
  })
};

const customStylesDark = {
  control: (provided, state) => ({
    ...provided,
    minHeight: 30,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    width: 120,
    padding: "2px",
    boxShadow:'0 0 0 1px #6f6f6f', 
    cursor: 'pointer',
    '&:hover, &:focus': {
      boxShadow: '0 0 0 1px #302D2A',
      backgroundColor: '#302D2A',
      color: '#fff'
    }
  }),
  placeholder: provided => ({
    ...provided,
    color: 'inherit',
    '&:hover, &:focus': {
      color:  'inherit'
    }
  }),
  singleValue: provided => ({
    ...provided,
    color: '#inherit',
    '&:hover, &:focus': {
      color:  '#inherit'
    }
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: "2px",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' :"#302D2A",
    backgroundColor: state.isSelected ? "#7d2e27" : 'white',
    cursor: 'pointer',
    textAlign: 'left',
    '&:hover, &:focus': {
      backgroundColor: state.isSelected ? "#7d2e27" : '#e4e7e7',
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "2px",
    color: 'inherit',
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
    '&:hover, &:focus': {
      color: 'inherit',
    },
    'svg': {
      width: 15,
      color: 'inherit',
    }
  })
};

function Header ({ position, direction, onChangeRoute, startTransition, setShowModal, showCovidModal, loading}) {

  let history = useHistory();

  const options = [
    { value: 'es', label: <FormattedMessage id='menu.language.es'/> },
    { value: 'en', label: <FormattedMessage id='menu.language.us'/> },
    { value: 'pt', label: <FormattedMessage id='menu.language.pt'/>},
    { value: 'zh', label: <FormattedMessage id='menu.language.zh'/> },
  ];
  
  const cacheLang = localStorage.getItem('cacheLang')
  const lng = options.filter(item => item.value === cacheLang)

  const offset = 500
  const {toggleLang} = useContext(LanguageContext)

  const menuConfig = [{
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
    },
  ]

  useLayoutEffect(() => {
    if(direction === undefined && position === 0){
      setInitHeadroomClass('headroom animated headroom--not-top headroom--not-bottom headroom--pinned')
    }
    
  }, [])


  return (
    <Header_ >
      <nav 
        className={
          loading ? 'headroom animated headroom--unpinned' :
          startTransition !== undefined && startTransition === true ? 'headroom animated headroom--unpinned' :
          direction === null && position === 0 ?
          'headroom animated headroom--not-top headroom--not-bottom headroom--pinned' :
          direction === 'up' ?
          'headroom animated headroom--pinned' : 
          'headroom animated headroom--unpinned'
        }
        >
          
        <div className={direction === 'down' && position < offset ? "header" : position > offset ? "header header--dark" : 'header'}>
          <div className="container">
            <div onClick={() => onChangeRoute('/')}>
                {
                  direction === 'down'  && position < offset ? 
                  <div className="header-menu-logo-img white" > <LogoWithe /> </div>: 
                  position > offset ? 
                  <div className="header-menu-logo-img dark" > <LogoDark /> </div> : 
                  <div className="header-menu-logo-img white" > <LogoWithe /> </div>
                }
              
            </div>
              <ul className="header-menu">
                { menuConfig.map((item, index) => 
                  item.submenu ? 
                  <HeaderSubMenu 
                    key={index}
                    name={item.name} 
                    submenu={item.submenu}
                    onChangeRoute={onChangeRoute}
                  /> :
                  <li
                    key={index}
                    className=" header-menu-item"
                  >
                    <div 
                      onClick={() => onChangeRoute(item.path)}>
                      {item.name}
                    </div>
                  </li>
                )}
                <li  style={{ 
                  display: 'inline-block',
                  padding: '1em',
                  position: 'relative',
                  cursor: 'pointer'
                 }} /* className=" header-menu-item" */>
                  <Select
                    styles={direction === 'down' && position < offset ? customStyles : position > offset ? customStylesDark : customStyles}
                    defaultValue={lng.length > 0 ? lng : options[0]}
                    onChange={(c) => toggleLang(c.value)}
                    options={options}
                    isSearchable={false}
                  />
                </li>
              </ul>
            
              <div className="reserva" style={{
                display: direction === 'down' && position < offset ? "none" : position > offset ? "flex" : "none",
                opacity : direction === 'down' && position < offset ? 0 : position > offset ? 1 : 0,
              }}
              onClick={() => setShowModal(true)}> 
                <FormattedMessage id="button.reservar"/>
              </div>
          <div>

            </div>
          </div>
        </div>

        {
          (history.location.pathname !== '/covid' && !showCovidModal) && (history.location.pathname !== '/covid') ?
          <div className="button-covid" onClick={() => history.push('/covid')} >
            <Advice/>
            <p><FormattedMessage id="covid.button.menu" /></p>
          </div> :
          null
        }
        
      </nav>
    </Header_>
  )
}

export default Header