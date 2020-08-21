import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import { CommonLoading } from 'react-loadingg'

import api from '../../api'

import useReadUser from '../../hooks/useReadUser'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import UserSummary from '../../components/UserSummary'
import UserForm from '../../components/UserForm'

const test = false

export default function UserEDit({ params: { userId } }) {
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
  const [user] = useReadUser(setLoading, setError, userId)
  const [location, setLocation] = useLocation()
  test && console.log(location)
  useEffect(() => {
    setForm(user)
  }, [user])
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
      api.users.update(userId, form)
      setLoading(false)
      setLocation('/users/')
    } catch(error) {
      setLoading(loading)
      setError(error)
    }
  }
  return (
    <Layout title='Edit User' subtitle='Edit your user for a better experience'>
      {
        loading
        ? <CommonLoading color='#cb6ce6' />
        :
        <>
          <Hero firstName={form.firstName} />
          <main className='userEdit'>
            <div className='wrapper'>
              <div className='newUsers__content'>
                <UserSummary {...form} />
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
      {error && <h4>Oh! hubo un Error {error}</h4>}
    </Layout>
  )
}
