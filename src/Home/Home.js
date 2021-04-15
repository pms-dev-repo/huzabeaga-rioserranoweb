import React, { useState, useEffect, useMemo } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import HomeHeader from "./HomeHeader";
import HomePrograms from "./HomePrograms";
import HomeExpeditions from "./HomeExpeditions";
import HomeGastronomy from "./HomeGastronomy";
import HomeRooms from "./HomeRooms";
import HomeHistory from "./HomeHistory";
import HomeInstagram from "./HomeInstagram";
import styled from 'styled-components'

import { isSafari, isSafarimobile } from 'react-device-detect';

import imgBgTop from '../../images/home/header-bg-top@2x.jpg'
import imgBgBottom from '../../images/home/header-bg-bottom@2x.png'

import programsAiImg from '../../images/home/programs-all-inclusive.jpg'
import programsFbImg from '../../images/home/programs-full-board.jpg'

import expeditionsIllus from '../../images/home/birds_pattern.png'
import expeditionsImg from '../../images/home/expeditions_image@2x.jpg'

import RomSuperior from '../../images/home/room_superior.jpg'
import RoomStandarPlus from '../../images/home/room_standar_plus.jpg'
import RoomStandar from '../../images/home/room_standar.jpg'
import RoomSectionBg from '../../images/home/rooms_pattern.png'

import ChefDish from '../../images/home/chef_dish_icon.svg'
import ChefImage from '../../images/home/chef-image.jpg'
import ChefFoodA from '../../images/home/slider-food-1.jpg'
import ChefFoodB from '../../images/home/slider-food-2.jpg'
import ChefFoodC from '../../images/home/slider-food-3.jpg'
import ChefFoodD from '../../images/home/slider-food-4.jpg'
import ChefFoodE from '../../images/home/slider-food-5.jpg'
import ChefFoodF from '../../images/home/slider-food-6.jpg'
import ChefFoodG from '../../images/home/slider-food-7.jpg'

import HistorySlideA from '../../images/home/history/history-slide-1.jpg'
import HistorySlideB from '../../images/home/history/history-slide-2.jpg'
import HistorySlideC from '../../images/home/history/history-slide-3.jpg'
import HistorySlideD from '../../images/home/history/history-slide-4.jpg'
import HistorySlideE from '../../images/home/history/history-slide-5.jpg'
import HistorySlideF from '../../images/home/history/history-slide-6.jpg'
import HistorySlideG from '../../images/home/history/history-slide-7.jpg'

import HistoryVid from '../../images/home/history/video.jpg'


import VidMobileEscalada from '../../videos/mobile-escalada.mp4'
import VidMobileCabalgata from '../../videos/mobile-cabalgata.mp4'
import VidMobileHiking from '../../videos/mobile-hiking.mp4'
import VidMobileNavegation from '../../videos/mobile-navegation.mp4'
import VidMobilePaine from '../../videos/mobile-paine.mp4'

import VidMobileEscaladaW from '../../videos/mobile-escalada.webm'
import VidMobileCabalgataW from '../../videos/mobile-cabalgata.webm'
import VidMobileHikingW from '../../videos/mobile-hiking.webm'
import VidMobileNavegationW from '../../videos/mobile-navegation.webm'
import VidMobilePaineW from '../../videos/mobile-paine.webm'


const Wrapper = styled.div``

export default function Home(props){
  
  const [ imgBgTopLoaded, setImgBgTopLoaded ] = useState(true)
  const [ imgBgBottomLoaded, setImgBgBottomLoaded ] = useState(true)

  const [ programsImgAiLoaded, setProgramsImgAiLoaded ] = useState(true)
  const [ programsImgFbLoaded, setProgramsImgFbLoaded ] = useState(true)

  const [ expeditionsIllusLoaded, setExpeditionsIllusLoaded] = useState(true)
  const [ expeditionsImgLoaded, setExpeditionsImgLoaded] = useState(true)

  const [ roomSuperiorLoaded, setRoomSuperiorLoaded] = useState(true)
  const [ roomStandarLoaded, setRoomStandarLoaded] = useState(true)
  const [ roomStandarPlusLoaded, setRoomStandarPlusLoaded] = useState(true)
  const [ roomBg, setRoomBg] = useState(true)

  const [ chefDishLoaded, setChefDishLoaded] = useState(true)
  const [ chefLoaded, setChefLoaded] = useState(true)
  const [ chefFoodALoaded, setChefFoodALoaded] = useState(true)
  const [ chefFoodBLoaded, setChefFoodBLoaded] = useState(true)
  const [ chefFoodCLoaded, setChefFoodCLoaded] = useState(true)
  const [ chefFoodDLoaded, setChefFoodDLoaded] = useState(true)
  const [ chefFoodELoaded, setChefFoodELoaded] = useState(true)
  const [ chefFoodFLoaded, setChefFoodFLoaded] = useState(true)
  const [ chefFoodGLoaded, setChefFoodGLoaded] = useState(true)



  const [ historySlideALoaded, setHistorySlideALoaded] = useState(true)
  const [ historySlideBLoaded, setHistorySlideBLoaded] = useState(true)
  const [ historySlideCLoaded, setHistorySlideCLoaded] = useState(true)
  const [ historySlideDLoaded, setHistorySlideDLoaded] = useState(true)
  const [ historySlideELoaded, setHistorySlideELoaded] = useState(true)
  const [ historySlideFLoaded, setHistorySlideFLoaded] = useState(true)
  const [ historySlideGLoaded, setHistorySlideGLoaded] = useState(true)
  const [ historyVidLoaded, setHistoryVidLoaded] = useState(true)

  const [ vidMEscaladaLoaded, setVidMEscaladaLoaded] = useState(true)
  const [ vidMCabalgataLoaded, setVidMCabalgataLoaded] = useState(true)
  const [ vidMHikingLoaded, setVidMHikingLoaded] = useState(true)
  const [ vidMNavegationLoaded, setVidMNavegationLoaded] = useState(true)
  const [ vidMPaineLoaded, setVidMPaineLoaded] = useState(true)

  const [ vidMEscaladaWLoaded, setVidMEscaladaWLoaded] = useState(isSafari === true ? false : true)
  const [ vidMCabalgataWLoaded, setVidMCabalgataWLoaded] = useState(isSafari === true ? false : true)
  const [ vidMHikingWLoaded, setVidMHikingWLoaded] = useState(isSafari === true ? false : true)
  const [ vidMNavegationWLoaded, setVidMNavegationWLoaded] = useState(isSafari === true ? false : true)
  const [ vidMPaineWLoaded, setVidMPaineWLoaded] = useState(isSafari === true ? false : true)


  useEffect(() => {
    if(
      props.refMain.current !== undefined && 
      imgBgTopLoaded === false  &&
      imgBgBottomLoaded === false &&
      programsImgAiLoaded === false &&
      programsImgFbLoaded === false &&
      expeditionsIllusLoaded === false &&
      expeditionsImgLoaded === false &&
      chefDishLoaded === false &&
      chefLoaded === false &&
      chefFoodALoaded === false &&
      chefFoodBLoaded === false &&
      chefFoodCLoaded === false &&
      chefFoodDLoaded === false &&
      chefFoodELoaded === false &&
      chefFoodFLoaded === false &&
      chefFoodGLoaded === false &&
      roomSuperiorLoaded === false &&
      roomStandarLoaded === false &&
      roomStandarPlusLoaded === false &&
      roomBg === false &
      historySlideALoaded === false &
      historySlideBLoaded === false &
      historySlideCLoaded === false &
      historySlideDLoaded === false &
      historySlideELoaded === false &
      historySlideFLoaded === false &
      historySlideGLoaded === false &
      historyVidLoaded === false &
      vidMEscaladaLoaded === false &&
      vidMCabalgataLoaded === false &&
      vidMHikingLoaded === false &&
      vidMNavegationLoaded === false &&
      vidMPaineLoaded === false &&
      vidMEscaladaWLoaded === false &&
      vidMCabalgataWLoaded === false &&
      vidMHikingWLoaded === false &&
      vidMNavegationWLoaded === false &&
      vidMPaineWLoaded === false
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
    imgBgTopLoaded, 
    imgBgBottomLoaded, 
    programsImgAiLoaded, 
    programsImgFbLoaded, 
    expeditionsIllusLoaded, 
    expeditionsImgLoaded,
    chefDishLoaded,
    chefLoaded,
    chefFoodALoaded,
    chefFoodBLoaded,
    chefFoodCLoaded,
    chefFoodDLoaded,
    chefFoodELoaded,
    chefFoodFLoaded,
    chefFoodGLoaded,
    roomSuperiorLoaded,
    roomStandarLoaded,
    roomStandarPlusLoaded,
    roomBg,
    historySlideALoaded,
    historySlideBLoaded,
    historySlideCLoaded,
    historySlideDLoaded,
    historySlideELoaded,
    historySlideFLoaded,
    historySlideGLoaded,
    historyVidLoaded,
    vidMEscaladaLoaded,
    vidMCabalgataLoaded,
    vidMHikingLoaded,
    vidMNavegationLoaded,
    vidMPaineLoaded,
    vidMEscaladaWLoaded,
    vidMCabalgataWLoaded,
    vidMHikingWLoaded,
    vidMNavegationWLoaded,
    vidMPaineWLoaded
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

  return useMemo(() => {
    return (
      <Wrapper>
        <div style={{ display: 'none' }}>
          <img src={imgBgTop} onLoad={(e) => setTimeout(() => setImgBgTopLoaded(false) , 2000)  } />
          <img src={imgBgBottom} onLoad={(e) => setTimeout(() =>setImgBgBottomLoaded(false) , 2000)  } />
          <img src={programsAiImg} onLoad={(e) => setTimeout(() => setProgramsImgAiLoaded(false) , 2000)  } />
          <img src={programsFbImg} onLoad={(e) => setTimeout(() => setProgramsImgFbLoaded(false) , 2000)  } />
          <img src={expeditionsIllus} onLoad={(e) => setTimeout(() => setExpeditionsIllusLoaded(false) , 2000)  } />
          <img src={expeditionsImg} onLoad={(e) => setTimeout(() => setExpeditionsImgLoaded(false) , 2000)  } />
          <img src={ChefDish} onLoad={(e) => setTimeout(() => setChefDishLoaded(false) , 2000)  } />
          <img src={ChefImage} onLoad={(e) => setTimeout(() => setChefLoaded(false) , 2000)  } />
          <img src={ChefFoodA} onLoad={(e) => setTimeout(() => setChefFoodALoaded(false) , 2000)  } />
          <img src={ChefFoodB} onLoad={(e) => setTimeout(() => setChefFoodBLoaded(false) , 2000)  } />
          <img src={ChefFoodC} onLoad={(e) => setTimeout(() => setChefFoodCLoaded(false) , 2000)  } />
          <img src={ChefFoodD} onLoad={(e) => setTimeout(() => setChefFoodDLoaded(false) , 2000)  } />
          <img src={ChefFoodE} onLoad={(e) => setTimeout(() => setChefFoodELoaded(false) , 2000)  } />
          <img src={ChefFoodF} onLoad={(e) => setTimeout(() => setChefFoodFLoaded(false) , 2000)  } />
          <img src={ChefFoodG} onLoad={(e) => setTimeout(() => setChefFoodGLoaded(false) , 2000)  } />
          <img src={RomSuperior} onLoad={(e) => setTimeout(() => setRoomSuperiorLoaded(false) , 2000)  } />
          <img src={RoomStandarPlus} onLoad={(e) => setTimeout(() => setRoomStandarLoaded(false) , 2000)  } />
          <img src={RoomStandar} onLoad={(e) => setTimeout(() => setRoomStandarPlusLoaded(false) , 2000)  } />
          <img src={RoomSectionBg} onLoad={(e) => setTimeout(() => setRoomBg(false) , 2000)  } />
          <img src={HistorySlideA} onLoad={(e) => setTimeout(() => setHistorySlideALoaded(false) , 2000)  } />
          <img src={HistorySlideB} onLoad={(e) => setTimeout(() => setHistorySlideBLoaded(false) , 2000)  } />
          <img src={HistorySlideC} onLoad={(e) => setTimeout(() => setHistorySlideCLoaded(false) , 2000)  } />
          <img src={HistorySlideD} onLoad={(e) => setTimeout(() => setHistorySlideDLoaded(false) , 2000)  } />
          <img src={HistorySlideE} onLoad={(e) => setTimeout(() => setHistorySlideELoaded(false) , 2000)  } />
          <img src={HistorySlideF} onLoad={(e) => setTimeout(() => setHistorySlideFLoaded(false) , 2000)  } />
          <img src={HistorySlideG} onLoad={(e) => setTimeout(() => setHistorySlideGLoaded(false) , 2000)  } />
          <img src={HistoryVid} onLoad={(e) => setTimeout(() => setHistoryVidLoaded(false) , 2000)  } />

          <video onLoadStart={(e) => setTimeout(() => setVidMEscaladaLoaded(false) , 2000) }>
            <source src={VidMobileEscalada} type='video/mp4'></source>
          </video>

          <video onLoadStart={(e) => setTimeout(() => setVidMCabalgataLoaded(false) , 2000) }>
            <source src={VidMobileCabalgata} type='video/mp4'></source>
          </video>

          <video onLoadStart={(e) => setTimeout(() => setVidMHikingLoaded(false) , 2000) }>
            <source src={VidMobileHiking} type='video/mp4'></source>
          </video>

          <video onLoadStart={(e) => setTimeout(() => setVidMNavegationLoaded(false) , 2000) }>
            <source src={VidMobileNavegation} type='video/mp4'></source>
          </video>

          <video onLoadStart={(e) => setTimeout(() => setVidMPaineLoaded(false) , 2000) }>
            <source src={VidMobilePaine} type='video/mp4'></source>
          </video>

          <video src={VidMobileEscaladaW}  onLoadedData={(e) => setTimeout(() => setVidMEscaladaWLoaded(false) , 2000) }/>
          <video src={VidMobileCabalgataW}  onLoadedData={(e) => setTimeout(() => setVidMCabalgataWLoaded(false) , 2000) }/>
          <video src={VidMobileHikingW}  onLoadedData={(e) => setTimeout(() => setVidMHikingWLoaded(false) , 2000) }/>
          <video src={VidMobileNavegationW}  onLoadedData={(e) => setTimeout(() => setVidMNavegationWLoaded(false) , 2000) }/>
          <video src={VidMobilePaineW}  onLoadedData={(e) => setTimeout(() => setVidMPaineWLoaded(false) , 2000) }/>
        </div>
  
        <HomeHeader 
          setShowModal={props.setShowModal}
          imgBgTop={imgBgTop}
          imgBgBottom={imgBgBottom}
        />
        <HomePrograms
          images={[programsAiImg, programsFbImg]}
          onChangeRoute={props.onChangeRoute}
        />
        <HomeExpeditions 
          bgImage={expeditionsImg}
          bgIllus={expeditionsIllus}
          onChangeRoute={props.onChangeRoute}
        />
        <HomeRooms 
          roomSuperiorImg={RomSuperior}
          roomStandarImg={RoomStandarPlus}
          roomStandarPlusImg={RoomStandar}
          roomBgImg={RoomSectionBg}
          onChangeRoute={props.onChangeRoute}
        />
        <HomeGastronomy 
          ChefDish={ChefDish}
          ChefImage={ChefImage}
          SliderImages={[
            ChefFoodA, 
            ChefFoodB, 
            ChefFoodC, 
            ChefFoodD,
            ChefFoodE,
            ChefFoodF,
            ChefFoodG
          ]}
        />
        <HomeHistory 
          HistoryVid={HistoryVid}
          slides={[
            HistorySlideA,
            HistorySlideB,
            HistorySlideC,
            HistorySlideD,
            HistorySlideE,
            HistorySlideF,
            HistorySlideG
          ]}
        />
        <HomeInstagram />
      </Wrapper>
    )
  }, [])
}
