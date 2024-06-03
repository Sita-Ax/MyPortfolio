import React from 'react'

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !date) return

    addPost({ id: Date.now().toString(), title, date })
    setTitle('')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <button type='submit'>Add Post</button>
    </form>
  )
}

export default AddPost
