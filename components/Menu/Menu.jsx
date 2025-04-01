import './Menu.scss'

export default function Menu({menuOpened}) {
  return (
    <section className={menuOpened ? 'mobile__none' : 'mobile__menu'}>
        <div className="container">
            <div className="mobile__inner">
                <nav className='mobile__nav'>
                    <ul className='mobile__list'>
                        <li className='mobile__item'><a className="mobile__link" href="#">Home</a></li>
                        <li className='mobile__item'><a className="mobile__link" href="#">About</a></li>
                        <li className='mobile__item'><a className="mobile__link" href="#">Services</a></li>
                        <li className='mobile__item'><a className="mobile__link" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
