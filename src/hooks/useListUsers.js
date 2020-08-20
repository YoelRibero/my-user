import { useState, useEffect } from 'react'

import api from '../api'

export default function useListUsers(setLoading = false, setError = null) {
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
  }, [setLoading, setError])
  return [users]
}
