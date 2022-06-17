import { useState } from 'react'
import './App.scss'
import { Layout } from './layout'
import { ActivityFilter, MemberList, Search } from './components'
import { mockMembers } from './mock-data'

function App() {
  const [members, setMembers] = useState(mockMembers)
  const [activityMembers, setActivityMembers] = useState(null)

  const handleFilter = (activity) => {
    if (activity === 'all') {
      setMembers(mockMembers)
      setActivityMembers(null)
      return
    }

    const filteredMembers = mockMembers.filter((m) =>
      m.last_activity.find((last) => last === activity)
    )

    setActivityMembers(filteredMembers.length)
    setMembers(filteredMembers)
  }

  const handleSearch = (searchTerm) => {
    if (!searchTerm) setMembers(mockMembers)

    const searchedMembers = mockMembers.filter((m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMembers(searchedMembers)
  }

  const handleDelete = (id) => {
    const updated = members.filter((m) => m.id !== id)
    setMembers(updated)
  }

  return (
    <div className="App">
      <Layout>
        <div className="container">
          <Search handleSearch={handleSearch} />
          <ActivityFilter
            handleActivityFilter={handleFilter}
            activityMembers={activityMembers}
          />
          <MemberList members={members} handleDelete={handleDelete} />
        </div>
      </Layout>
    </div>
  )
}

export default App
