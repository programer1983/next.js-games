import { useTheme } from '../Context/ThemeProvider'
import './Menu.scss'

export default function Menu({menuOpened, toggleMenu}) {
  
    const {isDarkMode} = useTheme()
    
  const handleMenu = () => {
        toggleMenu()
    }   
  
  
  return (
    <section className={`mobile__menu ${isDarkMode ? "light__bg" : ""} ${menuOpened ? 'mobile__none' : 'mobile__menu'}`}>
        <div className="container">
            <div className="mobile__inner">
                <nav className='mobile__nav'>
                    <ul className='mobile__list'>
                        <li onClick={handleMenu} className='mobile__item'><a className="mobile__link" href="#hero">Home</a></li>
                        <li onClick={handleMenu} className='mobile__item'><a className="mobile__link" href="#geyms">About</a></li>
                        <li onClick={handleMenu} className='mobile__item'><a className="mobile__link" href="#">Services</a></li>
                        <li onClick={handleMenu} className='mobile__item'><a className="mobile__link" href="#footer">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
