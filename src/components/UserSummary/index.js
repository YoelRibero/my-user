import React from 'react'
import { Link } from 'wouter'
import { Hero, UserImage, SocialNetwork } from './styles'

import photography from '../../assets/images/professions/photography.jpg'
import construction from '../../assets/images/professions/construction.jpg'
import programming from '../../assets/images/professions/programming.jpg'
import gastronomy from '../../assets/images/professions/gastronomy.jpg'
import singer from '../../assets/images/professions/singer.jpg'

import useLazyLoad from '../../hooks/useLazyLoad'

const heroImageUser = profession => {
  switch (profession) {
    case 'photografy':
      return photography
    case 'construction':
      return construction
    case 'programming':
      return programming
    case 'gastronomy':
      return gastronomy
    case 'singer':
      return singer
    default:
      return photography
  }
}

export default function UserSummary({ avatarUrl, firstName, id, jobTitle, jobRelated, lastName, preferColor, twitter }) {
  const [show, ref] = useLazyLoad()
  return (
    <article className='user__summary' ref={ref}>
      {
        show &&
        <div className='user__container'>
          <Link href={`user/${id}`}>
            <Hero background={preferColor} className='user__hero'>
              <img src={heroImageUser(jobRelated)} alt='Hero User'/>
            </Hero>
            <UserImage borderColor={preferColor} className='user__image'>
              <img src={avatarUrl} alt={firstName} />
            </UserImage>
            <section className='user__description'>
              <h3 className='user__name'>{firstName} {lastName}</h3>
              <div className='user__job'>{jobTitle}</div>
              <SocialNetwork color={preferColor} className='user__socialNetwork'>@{twitter}</SocialNetwork>
            </section>
          </Link>
        </div>
      }
    </article>
  )
}
