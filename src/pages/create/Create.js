import { useState, useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import Select from 'react-select'

// styles
import './Create.css'

const categories = [
  { value: 'romance', label: 'Romance' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'gore', label: 'Gore' },
  { value: 'fantasy', label: 'Fantasy' },
]
export default function Create() {
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])

  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  //const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

// create user values for react-select
    useEffect(() => {
        if(documents) {
        setUsers(documents.map(user => {
            return { value: {...user, id: user.id}, label: user.displayName }
        }))
        }
    }, [documents])


  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(name, details,category.value, assignedUsers)
  }

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Story</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            required 
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea 
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details} 
          ></textarea>
        </label>
        
        <label>
          <span>Tags:</span>
           <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>By:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>

        <button className="btn">Add Story</button>

        {formError && <p className="error">{formError}</p>}

      </form>
    </div>
  )
}