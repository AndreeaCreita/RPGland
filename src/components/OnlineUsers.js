import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import Avatar from './Avatar'

// styles
import './OnlineUsers.css'

export default function OnlineUsers() {
  const { isPending, error, documents } = useCollection('users')
  const { user } = useAuthContext()
  return (
    <div className="user-list">
         <div className="user">
          <Avatar src={user.photoURL} />
          <p> {user.displayName}</p>  
        </div> 
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          <Avatar src={user.photoURL} />
          <span>{user.displayName}</span>
          
        </div>
      ))}
    </div>
  )
}