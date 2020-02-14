import React, { useContext, useEffect } from 'react'
import PostContext from '../context/post/postContext'
import { Link } from 'react-router-dom'

const Index = () => {
  const postContext = useContext(PostContext)
  const { posts, loading, getPosts } = postContext

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  } else
    return posts.map(({ id, title, body }) => (
      <div key={id} className="flex items-center justify-center w-full py-8">
        <div className="overflow-hidden rounded max-w-xl w-full shadow-lg leading-normal">
          <div className="block group p-4">
            <p className="font-bold text-lg mb-1">{title}</p>
            <p className="mb-2">{body}</p>
            <div className="inline-flex">
              <Link
                to={`/posts/${id}`}
                id={id}
                title={title}
                body={body}
                className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))
}

export default Index
