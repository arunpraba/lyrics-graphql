import React from 'react'
import { graphql } from 'react-apollo'
import NavButton from './NavButton'
import Loader from './Loader'
import LyricCreate from './LyricCreate'
import LyricsList from './LyricsList'
import { fetchSong } from '../queries'

const SongDetails = ({ data: { error, loading, song }, history }) => {
  if (error) {
    history.push('/error')
  }
  return (
    <>
      <NavButton to="/" exact icon="home" />
      {loading ? (
        <Loader />
      ) : (
        song && (
          <>
            <h1 className="text-2xl text-green-500 border-b-4 border-green-300">
              {song.title}
            </h1>
            <LyricsList lyrics={song.lyrics} />
            <LyricCreate songId={song.id} />
          </>
        )
      )}
    </>
  )
}

export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.match.params.id } }),
})(SongDetails)
