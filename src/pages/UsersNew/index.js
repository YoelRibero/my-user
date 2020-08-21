import React, { useState } from 'react'
import { useLocation } from 'wouter'
import api from '../../api'

import { CommonLoading } from 'react-loadingg'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import UserSummary from '../../components/UserSummary'
import UserForm from '../../components/UserForm'

const test = false

export default function UsersNew() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: '',
    jobTitle: '',
    jobRelated: '',
    preferColor: '',
    twitter: '',
  })
  const [location, setLocation] = useLocation()
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    try {
      api.users.create(form)
      setLoading(false)
      setLocation('/users/')
    } catch (error) {
      setLoading(true)
      setError(error)
    }
  }
  test && console.log(location)
  return (
    <Layout title='New User' subtitle='Create new user'>
      {
        loading
        ? <CommonLoading color='#cb6ce6' />
        :
        <>
          <Hero firstName={form.firstName} />
          <main className='newUsers'>
            <div className='wrapper'>
              <div className='newUsers__content'>
                <UserSummary clickable={false} {...form} />
                <UserForm
                  error={error}
                  form={form}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </main>
        </>
      }
      {error && <h3>Ups! there was error {error}</h3>}
    </Layout>
  )
}
