import React from 'react'
import { graphql } from 'react-apollo'
import NavButton from './NavButton'
import { fetchSong } from '../queries'
import Loader from './Loader'

const SongDetails = ({ data: { error, loading, song }, history }) => {
  if (error) {
    history.push('/error')
  }
  return (
    <>
      <NavButton to="/" exact icon="home" />
      {loading ? <Loader /> : song ? <h1>{song.title}</h1> : ''}
    </>
  )
}

export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.match.params.id } }),
})(SongDetails)
