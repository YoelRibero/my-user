import React from 'react'

export default function Search({ setQuery, query, title }) {
  return (
    <div className='search'>
      <h4>{title}</h4>
      <input
        onChange={e => setQuery(e.target.value)}
        type='text'
        value={query}
      />
    </div>
  )
}
