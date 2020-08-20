import { useState, useEffect } from 'react'

import api from '../api'

export default function useListUsers(setLoading = false, setError = null, id = '') {
  const [user, setUsers] = useState([])
  useEffect(() => {
    setLoading(true)
    try {
      api.users.read(id)
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
    } catch(error) {
      setLoading(true)
      setError(error)
    }
  }, [setLoading, setError, id])
  return [user]
}
