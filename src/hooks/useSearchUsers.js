import { useState, useEffect } from 'react'

export default function useSearchUsers(users) {
  const [query, setQuery] = useState('')
  const [filteredUsers, setFilteresUsers] = useState(users)
  useEffect(() => {
    const usersResult = users.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase()))
    setFilteresUsers(usersResult)
  }, [users, query])
  return { query, setQuery, filteredUsers }
}
