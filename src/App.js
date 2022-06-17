import { useState } from 'react'
import './App.scss'
import { Layout } from './layout'
import { MemberList, Search } from './components'
import { mockMembers } from './mock-data'

function App() {
  const [members, setMembers] = useState(mockMembers)

  const handleSearch = (searchTerm) => {
    if (!searchTerm) setMembers(mockMembers)

    const searchedMembers = mockMembers.filter((m) => m.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setMembers(searchedMembers)
  }

  const handleRemove = (id) => {
    const updated = members.filter((m) => m.id !== id)
    setMembers(updated)
  }

  return (
    <div className="App">
      <Layout>
        <div className="container">
          <Search handleSearch={handleSearch} />
          <MemberList members={members} />
        </div>
      </Layout>
    </div>
  )
}

export default App
