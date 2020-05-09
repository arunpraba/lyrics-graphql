import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import NavButton from './NavButton'
import { addSong } from '../mutations'
import { fetchSongs } from '../queries'

const SongCreate = ({ mutate, history }) => {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    mutate({
      variables: { title },
      refetchQueries: [{ query: fetchSongs }],
    })
      .then(() => {
        setLoading(false)
        setTitle('')
        history.push('/')
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <NavButton to="/" exact icon="home" />
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-green-700 text-xs font-bold mb-2"
              htmlFor="grid-song"
            >
              Song Title
            </label>
            <input
              className="appearance-none block w-full bg-green-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-song"
              type="text"
              placeholder="Song title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full md:flex md:items-center px-3">
            <button
              className="w-full bg-green-500 hover:bg-green-400 focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={title.length < 5}
            >
              {loading ? 'Loading...' : 'Add Song'}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default graphql(addSong)(SongCreate)
