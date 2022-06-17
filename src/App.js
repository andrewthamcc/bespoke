import { useState } from 'react'
import './App.scss'
import { Layout } from './layout'
import { MemberList } from './components'
import { mockMembers } from './mock-data'

function App() {
  const [members, setMembers] = useState(mockMembers)

  const handleRemove = (id) => {
    const updated = members.filter((m) => m.id !== id)
    setMembers(updated)
  }

  return (
    <div className="App">
      <Layout>
        <MemberList members={members} />
      </Layout>
    </div>
  )
}

export default App
