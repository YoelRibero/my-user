import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { TiEdit } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'
import { CommonLoading } from 'react-loadingg'

import api from '../../api'

import useReadUser from '../../hooks/useReadUser'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import UserSummary from '../../components/UserSummary'

const test = false

export default function UserDetail({ params: { userId } }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [user] = useReadUser(setLoading, setError, userId)
  const [location, setLocation] = useLocation()
  const handleDelete = () => {
    setLoading(true)
    try {
      api.users.remove(userId)
      setLoading(false)
      setLocation('/users/')
    } catch(error) {
      setLoading(true)
      setError(error)
    }
  }
  test && console.log(location)
  return (
    <Layout title='User Detail' subtitle='User detail where can edit and deleted user'>
      {
        loading
        ? <CommonLoading color='#cb6ce6' />
        :
        <>
          <Hero firstName={user.firstName} />
          <main className='userDetail'>
            <div className='wrapper'>
              <div className='userDetail__content'>
                <UserSummary {...user} />
                <section className='userDetail__actions'>
                  <Link href={`/user/${userId}/edit`}><TiEdit /></Link>
                  <button onClick={handleDelete}><MdDelete /></button>
                </section>
              </div>
            </div>
          </main>
        </>
      }
      {error && <h3>Ups! there was error {error}</h3>}
    </Layout>
  )
}
