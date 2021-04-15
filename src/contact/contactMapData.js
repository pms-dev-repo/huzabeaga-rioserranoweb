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

import React from "react";
import {FormattedMessage} from 'react-intl'


export const markers = [
  {
    id: 1,
    name: <FormattedMessage id="contact.map.ubicacion1"/>,
    position: {
      lat: -51.2333868,
      lng: -72.9792131,
    },
    active: true,
    image: ContactImg1
  },
  {
    id: 2,
    name: <FormattedMessage id="contact.map.ubicacion2"/>,
    position: {
      lat: -51.0000369,
      lng: -73.0000305,
    },
    active: false,
    image: ContactImg2
  },
  {
    id: 3,
    name: <FormattedMessage id="contact.map.ubicacion3"/>,
    position: {
      lat: -50.9428809,
      lng: -72.9484999,
    },
    active: false,
    image: ContactImg3
    
  },{
    id: 4,
    name: <FormattedMessage id="contact.map.ubicacion4"/>,
    position: {
      lat: -53.164961,
      lng: -70.9117921,
    },
    active: false,
    image: ContactImg4

  },{
    id: 5,
    name: <FormattedMessage id="contact.map.ubicacion5"/>,
    position: {
      lat: -51.1,
      lng: -73.066667,
    },
    active: false,
    image: ContactImg5

  },{
    id: 6,
    name: <FormattedMessage id="contact.map.ubicacion6"/>,
    position: {
      lat: -51.6707283,
      lng: -72.5258355,
    },
    active: false,
    image: ContactImg6

  },{
    id: 7,
    name: <FormattedMessage id="contact.map.ubicacion7"/>,
    position: {
      lat: -53.0055,
      lng: -70.8424,
    },
    active: false,
    image: ContactImg7

  },{
    id: 8,
    name: <FormattedMessage id="contact.map.ubicacion8"/>,
    position: {
      lat: -51.7263000,
      lng: -72.5062000
    },
    active: false,
    image: ContactImg8

  },{
    id: 9,
    name: <FormattedMessage id="contact.map.ubicacion9"/>,
    position: {
      lat: -53.1638329,
      lng: -70.9170683
    },
    active: false,
    image: ContactImg9

  },{
    id: 10,
    name: <FormattedMessage id="contact.map.ubicacion10"/>,
    position: {
      lat: -50.337969,
      lng: -72.2647981
    },
    active: false,
    image: ContactImg10
  },
]