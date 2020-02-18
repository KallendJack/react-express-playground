import React, { useContext, useEffect } from 'react'
import PostContext from '../context/post/postContext'
import AuthContext from '../context/auth/authContext'
import PostsComponent from '../components/PostsComponent'

const Index = () => {
  const postContext = useContext(PostContext)
  const authContext = useContext(AuthContext)
  const { posts, loading, getPosts } = postContext
  const { loadUser } = authContext

  useEffect(() => {
    loadUser()
    getPosts()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  } else return <PostsComponent posts={posts} />
}

export default Index
