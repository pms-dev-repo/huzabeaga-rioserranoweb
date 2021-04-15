import React, { Fragment, useEffect, useState, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import SpaHeader from './SpaHeader'
import SpaEnviorenment from './SpaEnviorenment'
import SpaPool from './SpaPool'
import SpaMassage from './SpaMassage'
import SpaSlider from './SpaSlider'
import SpaGym from './SpaGym'
import SpaDownload from './SpaDownload'


import SpaHeaderBg from '../../images/spa/spa_header@2x.jpg'
import SpaEnviorenmentBg from '../../images/spa/spa_enviroment@2x.jpg'
import SpaMassageBg from '../../images/spa/spa_massage@2x.jpg'
import SpaPoolBg from '../../images/spa/spa_pool@2x.jpg'

import Gal1 from '../../images/spa/gallery/galeria1.jpg'
import Gal2 from '../../images/spa/gallery/galeria2.jpg'
import Gal3 from '../../images/spa/gallery/galeria3.jpg'
import Gal4 from '../../images/spa/gallery/galeria4.jpg'
import Gal5 from '../../images/spa/gallery/galeria5.jpg'
import Gal6 from '../../images/spa/gallery/galeria6.jpg'
import Gal7 from '../../images/spa/gallery/galeria7.jpg'

function Spa(props) {

  const [ headerBgLoaded, setHaderBgLoaded ] = useState(true)
  const [ envBgLoaded, setEnvBgLoaded ] = useState(true)
  const [ massageBgLoaded, setMassageBgLoaded ] = useState(true)
  const [ poolBgLoaded, setPoolBgLoaded ] = useState(true)

  const [ gal1BgLoaded, setGal1BgLoaded ] = useState(true)
  const [ gal2BgLoaded, setGal2BgLoaded ] = useState(true)
  const [ gal3BgLoaded, setGal3BgLoaded ] = useState(true)
  const [ gal4BgLoaded, setGal4BgLoaded ] = useState(true)
  const [ gal5BgLoaded, setGal5BgLoaded ] = useState(true)
  const [ gal6BgLoaded, setGal6BgLoaded ] = useState(true)
  const [ gal7BgLoaded, setGal7BgLoaded ] = useState(true)

  useEffect(() => {
    if(
      props.refMain.current !== undefined && 
      headerBgLoaded === false &&
      envBgLoaded === false &&
      massageBgLoaded === false &&
      poolBgLoaded === false &&
      gal1BgLoaded === false &&
      gal2BgLoaded === false &&
      gal3BgLoaded === false &&
      gal4BgLoaded === false &&
      gal5BgLoaded === false &&
      gal6BgLoaded === false &&
      gal7BgLoaded === false
    ){
      props.onSetLoading(false)
      handleScroll()
    };
    return () => {
      props.setInitTop(0)
      props.setPosition(0)
      props.setDirection(null)
      if(props.paretnRef.current !== null){
        props.paretnRef.current.destroy()
        props.paretnRef.current = null;
        props.refMain.current.style = ""
      }
    }
  },[
    headerBgLoaded,
    envBgLoaded,
    massageBgLoaded,
    poolBgLoaded,
    gal1BgLoaded,
    gal2BgLoaded,
    gal3BgLoaded,
    gal4BgLoaded,
    gal5BgLoaded,
    gal6BgLoaded,
    gal7BgLoaded
  ])


  useEffect(() => {
    if(props.paretnRef.current !== null){
      props.paretnRef.current.update()
    }
  }, [props.lang])

  const handleScroll = () => {
    props.setInitTop(0)
    props.setPosition(0)
    props.setDirection(null)
    if(props.paretnRef.current !== null){
      props.paretnRef.current.destroy()
      props.paretnRef.current = null;
      props.refMain.current.style = ""
    }
    props.paretnRef.current = new LocomotiveScroll({
      el: props.refMain.current,
      smooth: true,
      smoothMobile: false,
      getDirection: true
    })
    props.paretnRef.current.on('scroll', (obj) => {
      props.setPosition(obj.scroll.y)
      props.setDirection(obj.direction)
    })  
  }

  return (
    <Fragment>
      <div style={{ display: 'none' }}>
        <img src={SpaHeaderBg} onLoad={(e) => setTimeout(() => setHaderBgLoaded(false) , 2000)  } />
        <img src={SpaEnviorenmentBg} onLoad={(e) => setTimeout(() => setEnvBgLoaded(false) , 2000)  } />
        <img src={SpaMassageBg} onLoad={(e) => setTimeout(() => setMassageBgLoaded(false) , 2000)  } />
        <img src={SpaPoolBg} onLoad={(e) => setTimeout(() => setPoolBgLoaded(false) , 2000)  } />
        <img src={Gal1} onLoad={(e) => setTimeout(() => setGal1BgLoaded(false) , 2000)  } />
        <img src={Gal2} onLoad={(e) => setTimeout(() => setGal2BgLoaded(false) , 2000)  } />
        <img src={Gal3} onLoad={(e) => setTimeout(() => setGal3BgLoaded(false) , 2000)  } />
        <img src={Gal4} onLoad={(e) => setTimeout(() => setGal4BgLoaded(false) , 2000)  } />
        <img src={Gal5} onLoad={(e) => setTimeout(() => setGal5BgLoaded(false) , 2000)  } />
        <img src={Gal6} onLoad={(e) => setTimeout(() => setGal6BgLoaded(false) , 2000)  } />
        <img src={Gal7} onLoad={(e) => setTimeout(() => setGal7BgLoaded(false) , 2000)  } />
      </div>

      <SpaHeader 
        image={SpaHeaderBg}
      />
      <SpaSlider
        images={[
          Gal1,
          Gal2,
          Gal3,
          Gal4,
          Gal5,
          Gal6,
          Gal7
        ]}
      />
      <SpaEnviorenment image={SpaEnviorenmentBg}/>
      <SpaMassage image={SpaMassageBg}/>
      <SpaPool image={SpaPoolBg}/>

      <SpaDownload />
    </Fragment>
  )
}

function propsAreEqual(prev, curr) {
  if(prev.lang !== curr.lang) 
    return false
  else
    return true
}


export default memo(Spa, propsAreEqual)