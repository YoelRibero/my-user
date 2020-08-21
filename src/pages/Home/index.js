import React from 'react'
import { Link } from 'wouter'

import hero from '../../assets/images/hero.png'
import Layout from '../../components/Layout'

export default function Home() {
  return (
    <Layout title='Home' subtitle='This is the home from MyUser'>
      <main className='home'>
        <div className='wrapper'>
          <section className='home__content'>
            <div className='home__info'>
              <div className='home__info--description'>
                <h2>Print your user card</h2>
                <p>The easiest way to manage your user</p>
              </div>
              <Link href='/users' className='btn btn-primary'>View Users</Link>
            </div>
            <div className='home__image'>
              <img src={hero} alt='Hero'/>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
