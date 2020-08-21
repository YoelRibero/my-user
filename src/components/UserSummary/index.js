import React from 'react'
import { Link } from 'wouter'
import { Hero, UserImage, SocialNetwork } from './styles'
import avatarProfile from '../../assets/images/profile-avatar.jpg'
import { heroImageUser } from '../../services/heroImageUser'

import useLazyLoad from '../../hooks/useLazyLoad'

export default function UserSummary({ avatarUrl, firstName, id, jobTitle, jobRelated, lastName, preferColor, twitter, clickable = true }) {
  const [show, ref] = useLazyLoad()
  return (
    <article className='user__summary' ref={ref}>
      {
        show &&
        <Link href={clickable ? `/user/${id}` : '#'}>
          <div className='user__container'>
            <Hero background={preferColor} className='user__hero'>
              <img src={heroImageUser(jobRelated)} alt='Hero User'/>
            </Hero>
            <UserImage borderColor={preferColor} className='user__image'>
              <img src={avatarUrl || avatarProfile} alt={firstName} />
            </UserImage>
            <section className='user__description'>
              <h3 className='user__name'>{firstName || 'First Name'} {lastName || 'Last Name'}</h3>
              <div className='user__job'>{jobTitle || 'Job Title'}</div>
              <SocialNetwork color={preferColor} className='user__socialNetwork'>@{twitter || 'twitter'}</SocialNetwork>
            </section>
          </div>
        </Link>
      }
    </article>
  )
}
