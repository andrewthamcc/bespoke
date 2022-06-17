import { useState } from 'react'
import './search.scss'

export const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  return (
    <div className="member-search">
      <label htmlFor="search">Search Members:</label>
      <input
        id="search"
        name="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          handleSearch(e.target.value)
        }}
      />
    </div>
  )
}
