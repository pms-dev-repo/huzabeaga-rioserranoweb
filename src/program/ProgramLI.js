import React, { Fragment, useState, useEffect, memo } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import ProgramHeader from './ProgramHeader'
import ProgramSlider from './ProgramSlider'
import ProgramDetail from './ProgramDetail'
import ProgramRecomendation from './ProgramRecomendation'
import ProgramDownloads from './ProgramDownloads'

// imagen de fondo
import HeaderBg from '../../images/program/program-all-inclusive-header@2x.jpg'

// imagenes de slider
import SIAUrl from '../../images/program/gallery/program-gallery1.jpg'
import SIBUrl from '../../images/program/gallery/program-gallery2.jpg'
import SICUrl from '../../images/program/gallery/program-gallery3.jpg'

//imagenes para detalle
import VideoCoverImage from '../../images/program/program-all-inclusive-video-cover@2x.jpg';
import BirdOpenWings from '../illustrations/BirdOpenWings'

// imagenes recomendaciones
import WollCap from '../icons/WollCap';
import Pants from '../icons/Pants';
import Jacket from '../icons/Jacket';
import Boots from '../icons/Boots';
import BirdResting from '../illustrations/BirdResting'

//imagenes para descargas
import CougarWalking from '../illustrations/CougarWalking'


function ProgramLI(props) {
  const [ headerImageLoaded, setPeaderImageLoaded] = useState(true)
  const [ coverImageLoaded, setCoverImageLoaded] = useState(true)

  const [ programSlideALoaded, setProgramSlideALoaded] = useState(true)
  const [ programSlideBLoaded, setProgramSlideBLoaded] = useState(true)
  const [ programSlideCLoaded, setProgramSlideCLoaded] = useState(true)

  useEffect(() => {
    if(
      props.refMain.current !== undefined &&
      headerImageLoaded === false  &&
      coverImageLoaded === false  &&
      programSlideALoaded === false  &&
      programSlideBLoaded === false  &&
      programSlideCLoaded === false  
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
    programSlideALoaded,
    programSlideBLoaded,
    programSlideCLoaded
  ])


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
        <img src={HeaderBg} onLoad={(e) => setTimeout(() => setPeaderImageLoaded(false) , 2000)  } />
        <img src={VideoCoverImage} onLoad={(e) => setTimeout(() => setCoverImageLoaded(false) , 2000)  } />
        <img src={SIAUrl} onLoad={(e) => setTimeout(() => setProgramSlideALoaded(false) , 2000)  } />
        <img src={SIBUrl} onLoad={(e) => setTimeout(() => setProgramSlideBLoaded(false) , 2000)  } />
        <img src={SICUrl} onLoad={(e) => setTimeout(() => setProgramSlideCLoaded(false) , 2000)  } />
      </div>

      <ProgramHeader 
        title="lorem ipsum"
        text="
          Hotel Rio Serrano tiene a su disposición diversos programas 
          para satisfacer los más variados gustos e intereses  en la Patagonia Chilena, 
          que le permitirán maximizar el valor de su tiempo con nosotros. 
          Revise las opciones que le ofrecemos abajo y comience a planificar su viaje por 
          la Patagonia hoy mismo."
        image={SICUrl}
      />
      <ProgramSlider 
        list={[
          'Alojamiento en habitación seleccionada.',
          'Traslado IN/OUT desde Punta Arenas, Puerto Natales y Cerro Castillo a Hotel Río Serrano*',
          'Welcome drink.',
         ' Desayuno Buffet, Almuerzo y Cena (Acompañado de bebestibles: Jugos, Aguas, Gaseosas o Vino de la casa por copa).',
          'Entradas al Parque Nacional Torres del Paine.',
          'Expediciones con guía Bilingüe (Expediciones del Hotel).',
          'Bar Abierto (Excepto licores Premium).',
          'WIFI en habitación y áreas comunes.',
          'Acceso a SPA con piscina temperada.',
        ]}
        sliderImages={[
          HeaderBg,
          SIAUrl
        ]}
        firstText="
          El programa lorem ipsum otorga a nuestros pasajeros la comodidad de optar por la variada gama de trekkings y 
          actividades que tendrán acceso gracias a nuestros transfer a los puntos de interés, todas las comidas, consumos en nuestro Bar, 
          Descuento en 1 relajante masaje y además los transfer desde y hacia Punta Arenas y Puerto Natales.
        "
        secondText="
          Nuestros programas lorem ipsum, están diseñados para satisfacer los más variados gustos e intereses en la Patagonia Chilena,
          que le permitirán maximizar el valor de su tiempo con nosotros y disfrutar en profundidad cada rincón del Parque Nacional Torres del Paine 
          y sus alrededores. 
        "
      />
      <ProgramDetail 
        title="DETALLES DEL PROGRAMA"
        text="
          Mauris consectetur ante et ligula sodales luctus. Aliquam scelerisque, odio id euismod lacinia, 
          dolor risus fermentum justo, eget interdum massa ante vitae neque.
        "
        videoCover={VideoCoverImage}
        illustration={CougarWalking}
      />
      <ProgramRecomendation 
        title="Ropa recomendada"
        illustration={BirdOpenWings}
        recomendations={[{
            icon: WollCap,
            title: 'Cabeza:',
            text: 'Gorro de lana, cuello de polar, anteojos para sol con protección UV y bloqueador solar.'
          },{
            icon: Pants,
            title: 'Piernas:',
            text: 'Calzas de fibra de secado rápido, pantalón repelente al agua (Gore-tex), shorts para cuando hace calor.'
          },{
            icon: Jacket,
            title: 'Parte Superior:',
            text: 'Camiseta de secado rápido, chaqueta de polar o leece, chaqueta repelente al agua, guantes.'
          },{
            icon: Boots,
            title: 'Pies:',
            text: 'Calcetines de polar o polipropileno y zapatos de trekking.'
          }
        ]}
      />
      <ProgramDownloads 
        title="Descargas"
        illustration={CougarWalking}
        downloads={[
          { name:'PDF informativo'},
          { name: 'Bases y condiciones'}
        ]}
      />
    </Fragment>
  )
}


function propsAreEqual() {
  return true
}


export default memo(ProgramLI, propsAreEqual)