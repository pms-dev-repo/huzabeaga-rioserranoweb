import React, { useState } from 'react'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import Chevron from './icons/Chevron'


function Submenu ({submenu, onChangeRoute}) {
  return (
    <ul className="submenu">
      {submenu.map((item, index) => 
        <li className="submenu-item" key={index} onClick={() => item.state ? onChangeRoute(item.path, item.state) : onChangeRoute(item.path)}>
          <div>{item.name}</div>
        </li>
      )}
    </ul>
  )
}

function HeaderSubMenu({name, submenu, onChangeRoute}) {
  const [ showMenu, setShowMenu ] = useState(false)
  return (
    <li className="header-menu-item" onMouseLeave={() => setShowMenu(false)}>
      <div onMouseEnter={() => setShowMenu(true)} className="header-menu-item-name">
        {name}
        <CSSTransition
          in={showMenu}
          timeout={300}
          classNames="header-menu-item-arrow"
        >
          <span className="header-menu-item-arrow" style={{ fontSize: 14, marginLeft: 4 }}>
            <Chevron />
          </span>
        </CSSTransition>
        
        <div className="header-submenu-container">
          <CSSTransition
            in={showMenu}
            timeout={300}
            classNames="submenu"
            unmountOnExit
          >
            <Submenu submenu={submenu} onChangeRoute={onChangeRoute}/>
          </CSSTransition>
        </div>
      </div>
    </li>
  )
}

export default HeaderSubMenu




