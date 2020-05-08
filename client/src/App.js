import React from 'react'
import SongList from './Components/SongList'

function App() {
  return (
    <div
      className="h-full bg-gray-900 border border-green-400 
                mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                rounded overflow-y-scroll shadow sm:shadow-md md:shadow-lg 
                lg:shadow-xl xl:shadow-2xl p-4"
    >
      <div className="app-title mb-4 border-green-500 text-center text-green-500 rounded-full p-1">
        <span className="text-4xl text-center flex-auto">Lyrics</span>
      </div>
      <SongList />
    </div>
  )
}

export default App
