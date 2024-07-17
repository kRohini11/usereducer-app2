"use client"
import postsAction from '@/actions/postsAction'
import { appCtx } from '@/context/appContect'
import React, { useContext } from 'react'

const Posts = () => {
  const { state, dispatch } = useContext(appCtx)
  const fnPosts = () => {
    postsAction(dispatch)
  }
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={fnPosts}>Get Posts</button>
      <h2>{state?.posts?.[1]?.title}</h2>
    </div>
  )
}

export default Posts
