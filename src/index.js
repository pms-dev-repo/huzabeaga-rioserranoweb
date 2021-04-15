import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import custom from '../scss/custom.scss'
import { routesConfig } from './routes/routesConfig'
import Menu from './Menu'
import Header from './Header'
import Loading from './loading/Loading'
import Footer from "./Footer";
import styled from 'styled-components'
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Bookingmodal from './booking/Bookingmodal'
import CovidModal from './covid/CovidModal'
import { CSSTransition } from 'react-transition-group';

//Imports para lenguajes
import {IntlProvider, addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import locale_pt from 'react-intl/locale-data/pt'
import locale_zh from 'react-intl/locale-data/zh'
import messages_es from "./lang/entries/es.json"
import messages_en from "./lang/entries/en.json"
import messages_pt from './lang/entries/pt.json'
import messages_zh from './lang/entries/zh.json'
import {LanguageContext} from './LanguageContext'

import moment from 'moment'
import 'moment/locale/es'
import 'moment/locale/pt'
import 'moment/locale/zh-cn'

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

const messages = {
  'es': messages_es,
  'en': messages_en,
  'pt': messages_pt,
  'zh': messages_zh
};


function MainRouter ({lang}){
  
  const [ intTop, setInitTop ] = useState('')
  const [ position, setPosition ] = useState(0)
  const [ direction, setDirection ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ showModal, setShowModal ] = useState(false)
  const [ showCovidModal, setShowCovidModal ] = useState(false)
  const [ selectedRoom, setSelectedRoom] = useState(null)

  

  const ref = useRef(null)
  const refMain = useRef(null)
  let history = useHistory();

  useLayoutEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    if(history.location.pathname === '/' && loading === false){
      setShowCovidModal(true)
    }
  }, [ loading])


  useEffect(() => {
    if(history.location.pathname && showModal){
      setShowModal(false)
    }
    setLoading(true)
  }, [history.location.pathname])

  const onChangeRoute = (location, state) => {
    state ? history.push(location, {...state}) : history.push(location)
  }

  const onSetShowModal = (visible, roomId) => {
    setSelectedRoom(roomId)
    setShowModal(visible)
  }

  return (
    <React.Fragment>
      <CSSTransition
        in={loading}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
      <Loading />
    </CSSTransition>
      {!loading &&
        <Menu 
          onChangeRoute={onChangeRoute} 
          setShowModal={setShowModal} 
        />
      }
      {intTop === '' ? 
        null : 
        <Header 
          initTop={intTop} 
          position={position} 
          direction={direction} 
          onChangeRoute={onChangeRoute} 
          setShowModal={setShowModal}
          showCovidModal={showCovidModal}
          loading={loading}
        />
      }
      <div 
        id="mainScroll" 
        ref={refMain} 
        style={{ opacity: loading ? 0 : 1, transition: !loading && 'opacity 0.25s ease-in' }}
      >
        <Switch>
          {routesConfig.map(({exact, component : C, path}, index) => (
              <Route 
                key={index}
                exact
                path={path}
                render={(props) => 
                  <C 
                    setPosition={setPosition} 
                    setInitTop={setInitTop} 
                    setShowModal={onSetShowModal}
                    paretnRef={ref} 
                    refMain={refMain} 
                    setDirection={setDirection}
                    onChangeRoute={onChangeRoute}
                    onSetLoading={setLoading}
                    lang={lang}
                    {...props} 
                  />
                }
              />
            ))}
            <Route path="*" render={() => <div>Error</div> } />
          </Switch>
          {
           (history.location.pathname !== '/expeditions' && history.location.pathname !== '/gallery'  && history.location.pathname !== '/covid') &&
            <Footer paretnRef={ref}  location={history.location.pathname} />
          }
      </div>
      <Bookingmodal visible={showModal} onShowModal={setShowModal} selectedRoom={selectedRoom}/> 
      <CovidModal visible={showCovidModal} onShowModal={setShowCovidModal}/> 
    </React.Fragment>
  )
}


function App() {

  addLocaleData([...locale_en, ...locale_es, ...locale_pt, ...locale_zh]);
  const cacheLang = localStorage.getItem('cacheLang')

  const [lang, setLang] = useState(cacheLang === null ? 'es' : cacheLang)

  function toggleLang(lng) {
    setLang(lng)
  }
  
  useEffect(() => {
    localStorage.setItem('cacheLang', lang)
  }, [lang])

  return (
    <ThemeProvider
      theme={{}}
    >
      <GridThemeProvider
        gridTheme={{
          breakpoints: {
            xl: 1400,
            lg: 992,
            md: 769,
            sm: 576,
            xs: 575,
          },
          row: {
            padding: 16,
          },
          col: {
            padding: 8,
          },
          container: {
            padding: 16,
            maxWidth: { 
              xl: 1360,
              lg: 960,
              md: 720,
              sm: 540,
              xs: 540,
            },
          },
        }}
      >
        <LanguageContext.Provider value={{lang, toggleLang}}>
          <IntlProvider locale={lang} messages={messages[lang]}>
            <Router>
              <Switch>
                <MainRouter lang={lang}/>
              </Switch>
            </Router>
          </IntlProvider>
        </LanguageContext.Provider>
      </GridThemeProvider>
    </ThemeProvider>
  )
}

ReactDOM.render( <App /> , document.getElementById('app'));