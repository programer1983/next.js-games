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



  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

 
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };


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
                <div className='header__button-buttons'>
                    <div
                        className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}
                        onClick={toggleTheme}
                        style={{
                          marginRight: '70px',
                          padding: '10px',
                          backgroundColor: '#fff',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          transform: `translateX(${isDarkMode ? '0' : '50px'})`, 
                    }}
                  >
                      {isDarkMode ? '🌙' : '🌞'}
                  </div>
                  <div 
                      className={`header__burger ${menuOpened ? "active" : ""}`}
                      onClick={toggleMenu}
                    >
                        <span></span>
                    </div>
                </div>
            </div>
            <Menu menuOpened={menuOpened} toggleMenu={toggleMenu}/>
        </div>
    </header>
  )
}
