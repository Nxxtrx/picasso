import React, {useState, useEffect} from 'react'
import { postApi } from 'shared/api/postApi'
import PostsList from 'widgets/postsList'

const Posts = () => {

  return (
    <section className='posts'>
      <PostsList />
    </section>
  )
}

export default Posts