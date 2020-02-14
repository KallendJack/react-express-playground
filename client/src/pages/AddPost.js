import React, { useState, useContext } from 'react'
import PostContext from '../context/post/postContext'
import uuid from 'uuid'

const Add = props => {
  const postContext = useContext(PostContext)
  const { addPost } = postContext
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onChange = e => {
    e.target.name === 'title'
      ? setTitle(e.target.value)
      : setBody(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()

    const newPost = {
      id: uuid(),
      title,
      body
    }

    await addPost(newPost)
    props.history.push('/posts')
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md m-auto mt-12 p-5 shadow-lg">
      <div className="py-3">
        <label htmlFor="title" className="block font-bold text-lg mb-1">
          Title
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
      </div>
      <div className="py-3">
        <label htmlFor="body" className="block font-bold text-lg mb-1">
          Body
        </label>
        <textarea
          className="mb-2 bg-gray-200 appearance-none border-2
            border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight
            focus:outline-none focus:bg-white focus:border-teal-500"
          name="body"
          value={body}
          onChange={onChange}
        ></textarea>
      </div>
      <button className="bg-teal-300 hover:bg-teal-400 text-teal-800 font-bold py-2 px-4 rounded-l">
        Add
      </button>
    </form>
  )
}

export default Add
