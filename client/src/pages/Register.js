import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : e.target.name === 'username'
      ? setUsername(e.target.value)
      : setPassword(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    console.log(name)
    console.log(username)
    console.log(password)
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md m-auto mt-12 p-5 shadow-lg">
      <div className="py-3">
        <label htmlFor="name" className="block font-bold text-lg mb-1">
          Name
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="py-3">
        <label htmlFor="username" className="block font-bold text-lg mb-1">
          Username
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
      </div>
      <div className="py-3">
        <label htmlFor="password" className="block font-bold text-lg mb-1">
          Password
        </label>
        <input
          className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button className="bg-teal-300 hover:bg-teal-400 text-teal-800 font-bold py-2 px-4 rounded-l">
        Register
      </button>
    </form>
  )
}

export default Register
