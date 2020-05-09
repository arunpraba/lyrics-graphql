import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { addLyric } from '../mutations'

const LyricCreate = ({ mutate, songId }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    mutate({
      variables: { content, songId },
    })
      .then(({ data }) => {
        setLoading(false)
        setContent('')
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <form className="w-full mt-3" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-2 md:mb-0">
            <input
              className="appearance-none block w-full bg-green-100 text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Song Lyric..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="w-full md:flex md:items-center px-3">
            <button
              className="w-full bg-green-500 hover:bg-green-400 focus:outline-none text-white py-1 px-2 rounded"
              type="submit"
              disabled={content.length < 10}
            >
              {loading ? 'Loading...' : 'Add Lyric'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default graphql(addLyric)(LyricCreate)
