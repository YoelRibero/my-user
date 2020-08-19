import React, { useState } from 'react'
import { Link } from 'wouter'

import { FiPlus } from 'react-icons/fi'
import useReadUsers from '../../hooks/useReadUsers'
import { CommonLoading } from 'react-loadingg'
import Layout from '../../components/Layout'
import UserSummary from '../../components/UserSummary'

export default function Users() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [users] = useReadUsers(setLoading, setError)
  return (
    <Layout title='List of Users' subtitle='List of users page'>
      <main className='users'>
        <div className='wrapper'>
          {
            loading
            ? <CommonLoading color='#cb6ce6' />
            :
            <>
              <div className='users__actions'>
                <section className='users__actions--new'>
                  <Link to='/users/new'><FiPlus /></Link>
                </section>
                <section className='users__actions--search'>
                  <div className='search'>
                    <h4>Filter Users</h4>
                    <input type='text' />
                  </div>
                </section>
              </div>
              <div className='users__content'>
                {
                  users.map(user => 
                    <UserSummary key={user.id} {...user} />
                  )
                }
              </div>
            </>
          }
          {error && <h4>Oh! hubo un Error {error}</h4>}
        </div>
      </main>
    </Layout>
  )
}
