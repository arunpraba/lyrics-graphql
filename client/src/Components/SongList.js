import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Loader from './Loader'

const SongList = ({ data: { loading, songs } }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        songs.map(({ id, title }) => (
          <div
            key={id}
            className="bg-orange-100 border-l-4 border-green-500 text-green-700 p-2"
          >
            <p className="font-bold">{title}</p>
          </div>
        ))
      )}
    </>
  )
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
