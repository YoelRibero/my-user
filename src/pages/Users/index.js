import React, { useState } from 'react'

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
              <div className='users__content'>
                {
                  users.map(user => 
                    <UserSummary key={user.id} {...user} />
                  )
                }
              </div>
            </>
          }
        </div>
      </main>
    </Layout>
  )
}
