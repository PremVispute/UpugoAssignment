import React, { useState, useEffect } from 'react'
import usersApiSdk from '../api/usersApiSdk'
import UserCard from '../components/Cards/UserCard'
import Container from '../components/Container'
import Header from '../components/Header'
import Spinner from '../components/Loaders/Spinner'
import UserDetailsModal from '../components/Modals/UserDetailsModal'

const Home = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    // fetch users from api on first render only
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    // set loading state
    setLoading(true)
    try {
      // try to hit the api endpoint
      const _users = await usersApiSdk.getAll()
      if (!users) window?.alert('Something went wrong when fetching users')
      setUsers(_users || [])
    } catch (err) {
      console.error(err, 'fetchUsers')
      window?.alert('There was an error fetching users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-4xl font-bold mb-8">Users</h1>
        {loading ? (
          <div className="flex justify-center align-middle ">
            <Spinner />
          </div>
        ) : (
          <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {users?.length > 0 ? (
              users.map((user) => (
                <div key={user?.id}>
                  <UserCard
                    user={user}
                    onViewDetailsClicked={setSelectedUser}
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-xl">{`No Users Found :(`}</div>
            )}
          </div>
        )}
        <UserDetailsModal
          visible={!!selectedUser}
          user={selectedUser}
          onDismiss={() => setSelectedUser(null)}
        />
      </Container>
    </div>
  )
}

export default Home
