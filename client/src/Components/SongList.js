import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import Loader from './Loader'
import NavButton from './NavButton'
import { deleteSong } from '../mutations'
import { fetchSongs } from '../queries'

const SongList = ({ data: { loading, songs, refetch }, mutate }) => {
  const onSongDelete = (id) => {
    mutate({ variables: { id } }).then(() => {
      refetch()
    })
  }

  return (
    <>
      <NavButton to="/create" icon="plus" />
      {loading ? (
        <Loader />
      ) : songs.length > 0 ? (
        songs.map(({ id, title }) => (
          <div
            key={id}
            className="flex items-center justify-between bg-orange-100 mt-2 border-l-4 
                      border-green-500 text-green-700 p-2 cursor-pointer hover:bg-yellow-200"
          >
            <Link to={id} className="font-bold flex-grow">
              {title}
            </Link>
            <i
              className="fas fa-times text-red-600 cursor-pointer py-2 pl-4 pr-2"
              role="button"
              onClick={() => onSongDelete(id)}
            ></i>
          </div>
        ))
      ) : (
        <p>Click + button create a song</p>
      )}
    </>
  )
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList))
