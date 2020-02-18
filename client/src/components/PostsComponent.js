import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const PostsComponent = ({ posts }) => {
  let ref = useRef([])

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      duration: 1,
      stagger: 0.1
    })
    // eslint-disable-next-line
  }, [])

  return posts.map(({ id, title, body }) => (
    <div
      ref={element => {
        ref.current[id] = element
      }}
      key={id}
      className="flex items-center justify-center w-full py-8 opacity-0 test"
    >
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

export default PostsComponent
