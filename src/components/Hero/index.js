import React from 'react'
import HeroImage from '../../assets/images/hero.png'

export default function Hero({ firstName }) {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__content">
          <img src={HeroImage} alt="Hero"/>
          {
            firstName && <h1>{firstName}</h1>
          }
        </div>
        
      </div>
    </section>
  )
}
