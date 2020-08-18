import React, { useState, useEffect } from 'react'

import api from '../api'

export default function useReadUsers(setLoading, setError) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    setLoading(true)
    try {
      api.users.list()
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
    } catch(error) {
      setLoading(true)
      setError(error)
    }
  }, [])
  return [users]
}
