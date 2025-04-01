'use client';

import Image from 'next/image'
import './Header.scss'
import headerLogo from "./../../public/images/header-logo.png"
import { headerList } from '../../data'
import { useEffect, useState } from 'react'
import Menu from '../Menu/Menu';

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpened]);


  return (
    <header className='header'>
        <div className="container">
            <div className="header__inner">
                 <Image 
                    src={headerLogo}
                    alt="header-logo"
                    className='header__logo'
                    width={150}
                    height={70}
                />
                <nav className="header__nav">
                    <ul className="header__list">
                        {headerList.map((item) => {
                            return (
                                <li key={item.title} className="header__item">
                                    <a href={item.link} className="header__link">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="header__button-block">
                  <button className='header__button'></button>
                </div>
                <div 
                  className={`header__burger ${menuOpened ? "active" : ""}`}
                  onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
            <Menu menuOpened={menuOpened} toggleMenu={toggleMenu}/>
        </div>
    </header>
  )
}
