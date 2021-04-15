import Home from "../home/Home"

import ProgramAI from "../program/ProgramAI"
import ProgramFB from "../program/ProgramFB"
import ProgramLI from "../program/ProgramLI"

import Expeditions from '../expedition/Expeditions'
import ExpeditionEscaladaES from '../expedition/Expedition'
import ExpeditionPhotoSafariPS from '../expedition/Expedition'
import ExpeditionHrTh from '../expedition/Expedition'
import ExpeditionHrPn from '../expedition/Expedition'
import ExpeditionHkBt from '../expedition/Expedition'
import ExpeditionHkCc from '../expedition/Expedition'
import ExpeditionHkMf from '../expedition/Expedition'
import ExpeditionHkChP from '../expedition/Expedition'
import ExpeditionHkCP from '../expedition/Expedition'
import ExpeditionHkSS from '../expedition/Expedition'
import ExpeditionHkLC from '../expedition/Expedition'
import ExpeditionHkMC from '../expedition/Expedition'
import ExpeditionHkMT from '../expedition/Expedition'
import ExpeditionHkMCu from '../expedition/Expedition'
import ExpeditionHkAK from '../expedition/Expedition'
import ExpeditionHkPS from '../expedition/Expedition'
import ExpeditionHkSG from '../expedition/Expedition'
import ExpeditionHkSC from '../expedition/Expedition'
import ExpeditionHkCE from '../expedition/Expedition'
import ExpeditionHkVF from '../expedition/Expedition'
import ExpeditionNvGG from '../expedition/Expedition'
import ExpeditionNvRS from '../expedition/Expedition'
import ExpeditionFDP from '../expedition/Expedition'
import ExpeditionLW from '../expedition/Expedition'


import RoomSuperior  from '../room/RoomSuperior'
import RoomStandard from '../room/RoomStandard'
import RoomPlus from '../room/RoomPlus'

import Spa from '../spa/Spa'

import Gallery from '../gallery/Gallery'

import Covid from '../covid/Covid'

import Contact from '../contact/Contact'

export const routesConfig = [
  {
    component: Home,
    path: '/',
  },
  {
    component: ProgramAI,
    path: '/program-all-inclusive',
  },
  {
    component: ProgramFB,
    path: '/program-full-board',
  },
  {
    component: ProgramLI,
    path: '/program-lorem',
  },
  {
    component: Expeditions,
    path: '/expeditions',
  },
  {    
    component: ExpeditionEscaladaES,
    path: '/expeditions/expedition-:key-es',
  },
  {
    component: ExpeditionPhotoSafariPS,
    path: '/expeditions/expedition-:key-ps',
  },
  {
    component: ExpeditionHrTh,
    path: '/expeditions/expedition-:key-th',
  },
  {
    component: ExpeditionHrPn,
    path: '/expeditions/expedition-:key-pn',
  },
  {
    component: ExpeditionHkBt,
    path: '/expeditions/expedition-:key-bt',
  },
  {
    component: ExpeditionHkCc,
    path: '/expeditions/expedition-:key-cc',
  },
  {
    component: ExpeditionHkMf,
    path: '/expeditions/expedition-:key-mf',
  },
  {
    component: ExpeditionHkChP,
    path: '/expeditions/expedition-:key-chp',
  },
  {
    component: ExpeditionHkCP,
    path: '/expeditions/expedition-:key-cp',
  },
  {
    component: ExpeditionHkSS,
    path: '/expeditions/expedition-:key-ss',
  },
  {
    component: ExpeditionHkLC,
    path: '/expeditions/expedition-:key-lc',
  },
  {
    component: ExpeditionHkMC,
    path: '/expeditions/expedition-:key-mc',
  },
  {
    component: ExpeditionHkMT,
    path: '/expeditions/expedition-:key-mt',
  },
  {
    component: ExpeditionHkMCu,
    path: '/expeditions/expedition-:key-mcu',
  },
  {
    component: ExpeditionHkAK,
    path: '/expeditions/expedition-:key-ak',
  },
  {
    component: ExpeditionHkPS,
    path: '/expeditions/expedition-:key-ps',
  },
  {
    component: ExpeditionHkSG,
    path: '/expeditions/expedition-:key-sg',
  },
  {
    component: ExpeditionHkSC,
    path: '/expeditions/expedition-:key-sc',
  },
  {
    component: ExpeditionHkCE,
    path: '/expeditions/expedition-:key-ce',
  },
  {
    component: ExpeditionHkVF,
    path: '/expeditions/expedition-:key-vf',
  },
  {
    component: ExpeditionNvGG,
    path: '/expeditions/expedition-:key-gg',
  },
  {
    component: ExpeditionNvRS,
    path: '/expeditions/expedition-:key-rs',
  },
  {
    component: ExpeditionFDP,
    path: '/expeditions/expedition-:key-fdp',
  },
  {
    component: ExpeditionLW,
    path: '/expeditions/expedition-:key-lw',
  },
  {
    component: Spa,
    path: '/spa',
  },
  {
    component: RoomSuperior,
    path: '/room-superior',
  },
  {
    component: RoomPlus,
    path: '/room-standar-plus',
  },
  {
    component: RoomStandard,
    path: '/room-standar',
  },
  {
    component: Gallery,
    path: '/gallery',
  },
  {
    component: Covid,
    path: '/covid',
  },
  {
    component: Contact,
    path: '/contact',
  }
]
