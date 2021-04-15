import React, { Fragment, useLayoutEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import ProgramHeader from './ProgramHeader'
import ProgramSlider from './ProgramSlider'
import ProgramDetail from './ProgramDetail'
import ProgramRecomendation from './ProgramRecomendation'
import ProgramDownloads from './ProgramDownloads'


export default function Program(props) {

  useLayoutEffect(() => {
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
    return () => {
      props.setInitTop(0)
      props.setPosition(0)
      props.setDirection(null)
    }
  }, [])

  return (
    <Fragment>
      <ProgramHeader />
      <ProgramSlider />
      <ProgramDetail />
      <ProgramRecomendation />
      <ProgramDownloads />
    </Fragment>
  )
}
