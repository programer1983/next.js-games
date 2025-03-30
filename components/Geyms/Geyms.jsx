import Link from 'next/link'
import { geymData } from '../../data'
import './Geyms.scss'

export default function Geyms() {
  return (
    <div className='geyms'>
         <div className="container">
            <h2 className='geyms__title'>Available games</h2>
            <div className="geyms__inner">
                {geymData[0]?.results?.map((geym) => (
                  <div 
                      key={geym.slug} 
                      className="geym__item" 
                      data-aos="flip-left"
                    >
                    <Link href={`/geyms/${geym.slug}`}>
                       <div className="geym__image">
                          <img className='geym__img' src={geym.background_image} alt='image-geym' />
                       </div>
                       <div className="geym__info">
                          <h2>{geym.name}</h2>
                          <div className="geym__info-detail">
                            <h3>Genres:<span>{geym.genres[0]?.name}</span></h3>
                            <p>Ratings:<span>{geym.ratings_count}</span></p>
                          </div>
                       </div>
                    </Link>
                  </div>
                ))}
            </div>
         </div>
    </div>
  )
}
