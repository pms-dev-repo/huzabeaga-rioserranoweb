import React, { Fragment, useEffect, useState, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import ContactHeader from './ContactHeader'
import ContactDetail from './ContactDetail'
import ContactMap from './ContactMap'

import ContactImg1 from '../../images/contact/minimap/contact-rioserrano-hotel.jpg'
import ContactImg2 from '../../images/contact/minimap/contact-macizo-paine.jpg'
import ContactImg3 from '../../images/contact/minimap/contact-base-torres.jpg'
import ContactImg4 from '../../images/contact/minimap/contact-rioserrano-oficinas.jpg'
import ContactImg5 from '../../images/contact/minimap/contact-lago-pehoe.jpg'
import ContactImg6 from '../../images/contact/minimap/contact-aero-natales.jpg'
import ContactImg7 from '../../images/contact/minimap/contact-aero-p-arenas.jpg'
import ContactImg8 from '../../images/contact/minimap/contact-puerto-natales.jpg'
import ContactImg9 from '../../images/contact/minimap/contact-punta-arenas.jpg'
import ContactImg10 from '../../images/contact/minimap/contact-el-calafate.jpg'



import HeaderBg from '../../images/contact/contact-header@2x.jpg'
import CoverImg from '../../images/contact/contact-detail@2x.jpg'

function Contact(props) {

  const [ headerImageLoaded, setHeaderImageLoaded] = useState(true)
  const [ coverImageLoaded, setCoverImageLoaded] = useState(true)
  const [ contactImage1, setContactImage1] = useState(true)
  const [ contactImage2, setContactImage2] = useState(true)
  const [ contactImage3, setContactImage3] = useState(true)
  const [ contactImage4, setContactImage4] = useState(true)
  const [ contactImage5, setContactImage5] = useState(true)
  const [ contactImage6, setContactImage6] = useState(true)
  const [ contactImage7, setContactImage7] = useState(true)
  const [ contactImage8, setContactImage8] = useState(true)
  const [ contactImage9, setContactImage9] = useState(true)
  const [ contactImage10, setContactImage10] = useState(true)


  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      headerImageLoaded === false  &&
      coverImageLoaded === false  &&
      contactImage1 === false  &&
      contactImage2 === false  &&
      contactImage3 === false  &&
      contactImage4 === false  &&
      contactImage5 === false  &&
      contactImage6 === false  &&
      contactImage7 === false  &&
      contactImage8 === false  &&
      contactImage9 === false  &&
      contactImage10 === false  
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
  }, [
    headerImageLoaded,
    coverImageLoaded,
    contactImage1,
    contactImage2,
    contactImage3,
    contactImage4,
    contactImage5,
    contactImage6,
    contactImage7,
    contactImage8,
    contactImage9,
    contactImage10
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
        <img src={HeaderBg} onLoad={(e) => setTimeout(() => setHeaderImageLoaded(false) , 2000)  } />
        <img src={CoverImg} onLoad={(e) => setTimeout(() => setCoverImageLoaded(false) , 2000)  } />
        <img src={ContactImg1} onLoad={(e) => setTimeout(() => setContactImage1(false) , 2000)  } />
        <img src={ContactImg2} onLoad={(e) => setTimeout(() => setContactImage2(false) , 2000)  } />
        <img src={ContactImg3} onLoad={(e) => setTimeout(() => setContactImage3(false) , 2000)  } />
        <img src={ContactImg4} onLoad={(e) => setTimeout(() => setContactImage4(false) , 2000)  } />
        <img src={ContactImg5} onLoad={(e) => setTimeout(() => setContactImage5(false) , 2000)  } />
        <img src={ContactImg6} onLoad={(e) => setTimeout(() => setContactImage6(false) , 2000)  } />
        <img src={ContactImg7} onLoad={(e) => setTimeout(() => setContactImage7(false) , 2000)  } />
        <img src={ContactImg8} onLoad={(e) => setTimeout(() => setContactImage8(false) , 2000)  } />
        <img src={ContactImg9} onLoad={(e) => setTimeout(() => setContactImage9(false) , 2000)  } />
        <img src={ContactImg10} onLoad={(e) => setTimeout(() => setContactImage10(false) , 2000)  } />
      </div>
      <ContactHeader image={HeaderBg}/>
      <ContactDetail image={CoverImg}/>
      <ContactMap />
    </Fragment>
  )
}

function propsAreEqual(prev, curr) {
  if(prev.lang !== curr.lang) 
    return false
  else
    return true
}

export default memo(Contact, propsAreEqual)