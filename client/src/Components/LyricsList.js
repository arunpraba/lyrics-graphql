import React from 'react'
import { graphql } from 'react-apollo'
import LyricListItem from './LyricListItem'
import { likeLyric } from '../mutations'

const LyricsList = ({ lyrics, mutate }) => {
  const onLike = (id, likes) => {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    })
  }

  return lyrics.map(({ content, id, likes }) => (
    <LyricListItem
      key={id}
      icon={`${likes > 0 ? 'fas' : 'far'} fa-heart text-green-600`}
      content={content}
      likes={likes}
      onClick={() => onLike(id, likes)}
    />
  ))
}

export default graphql(likeLyric)(LyricsList)
