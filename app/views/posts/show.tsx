import React from 'react'
import { Layout } from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'

type ContentProps = {
  id: string
  body: string
  createdAt: string
  updatedAt: string
  postsPath: string
  editPostPath: string
}

export default function PostsShow() {
  const {
    body,
    editPostPath,
    postsPath,
  } = useContent<ContentProps>()

  return (
    <Layout>
      <p>
        <strong>Body:</strong>
        {body}
      </p>
      <a href={ editPostPath } data-sg-visit>Edit</a>
      <a href={ postsPath } data-sg-visit>Back</a>
    </Layout>
  )
}
