import { Routes, Route, Navigate } from 'react-router'
import Post from 'pages/post/ui'
import Posts from 'pages/posts/ui'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/posts/:id' element={<Post />}/>
      <Route path='*' element={<Navigate to={'/posts'} replace />} />
    </Routes>
  )
}

export default AppRouter