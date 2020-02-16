import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'

import PostState from './context/post/PostState'
import AuthState from './context/auth/AuthState'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <PostState>
        <Router>
          <Header />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/add" component={AddPost} />
          <Route exact path="/posts/:id" component={Post} />
        </Router>
      </PostState>
    </AuthState>
  )
}

export default App
