import React, { Fragment, useLayoutEffect, useState, useEffect, memo } from 'react'
import {FormattedMessage} from 'react-intl'
import LocomotiveScroll from 'locomotive-scroll'
import ExpeditionHeader from './ExpeditionHeader'
import ExpeditionSlider from './ExpeditionSlider'
import ExpeditionVideo from './ExpeditionVideo'
import ExpeditionDetail from './ExpeditionDetail'
import ExpeditionDownload from './ExpeditionDownload'
import { expeditions } from './expeditionsConfig'

function Expedition(props) {

  const [ content, setContent ] = useState(null)

  const [ headerImageLoaded, setHeaderImageLoaded] = useState(true)
  const [ coverImageLoaded, setCoverImageLoaded] = useState(true)
  const [ deatilImage, setDeatilImage] = useState(true)

  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      headerImageLoaded === false  &&
      coverImageLoaded === false  &&
      deatilImage === false 
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
    content,
    headerImageLoaded,
    coverImageLoaded,
    deatilImage
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


  useLayoutEffect(() => {
    setContent(() => expeditions[props.match.params.key.replace(/\-/g, "")])
  }, [])

  return (
   content !== null ? 
    <Fragment>
       <div style={{ display: 'none' }}>
        <img src={content.headerImage} onLoad={(e) => setTimeout(() => setHeaderImageLoaded(false) , 2000)  } />
        <img src={content.videoImage} onLoad={(e) => setTimeout(() => setCoverImageLoaded(false) , 2000)  } />
        <img src={content.deatilImage} onLoad={(e) => setTimeout(() => setDeatilImage(false) , 2000)  } />
      </div>

      <ExpeditionHeader 
        title={content.headerTitle}
        text={content.headerText}
        image={content.headerImage}
      />
      <ExpeditionSlider
        title={content.videoTitle}
        icons={content.icons}
        text={content.videoText}
        image={content.videoImage}
        sliderImages={content.sliderImages}
      />
      <ExpeditionDetail 
        title={content.detailTitle}
        text={content.detailText}
        illustration={content.detailIllustration}
        image={content.deatilImage}
        cardText={content.detailCardText}
      />
      <ExpeditionVideo 
        videoH1={content.videoH1}
        videoCode={content.videoCode}
        videoCover={content.videoCover}
      />

      <ExpeditionDownload 
        title={<FormattedMessage id="text.descargas"/>}
        illustration={content.downloadIllustration}
        downloads={content.downloads}
      />

    </Fragment>:
    null
  )
}

function propsAreEqual(prev, curr) {
  if(prev.lang !== curr.lang) 
    return false
  else
    return true
}

export default memo(Expedition, propsAreEqual)