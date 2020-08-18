import React from 'react'
import HERO_IMAGE_USER from '../../assets/images/backgroundPhoto.jpg'
import useLazyLoad from '../../hooks/useLazyLoad'

export default function UserSummary({ avatarUrl, firstName, jobTitle, lastName, twitter }) {
  const [show, ref] = useLazyLoad()
  return (
    <article className='user__summary' ref={ref}>
      {
        show &&
        <div className='user__container'>
          <section className='user__hero'>
            <img src={HERO_IMAGE_USER} alt='Hero Image User'/>
          </section>
          <section className='user__image'>
            <img src={avatarUrl} alt={firstName} />
          </section>
          <section className='user__description'>
            <h3 className='user__name'>{firstName} {lastName}</h3>
            <div className='user__job'>{jobTitle}</div>
            <div className='user__socialNetwork'>@{twitter}</div>
          </section>
        </div>
      }
    </article>
  )
}
