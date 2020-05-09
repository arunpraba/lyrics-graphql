import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import App from './App'
import SongCreate from './Components/SongCreate'
import SongDetails from './Components/SongDetails'
import ErrorPage from './Components/ErrorPage'

const Router = () => {
  return (
    <div
      className="h-full bg-gray-900 border border-green-400 
                mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                rounded overflow-y-scroll shadow sm:shadow-md md:shadow-lg 
                lg:shadow-xl xl:shadow-2xl p-4"
    >
      <div className="app-title mb-4 border-green-500 text-center text-green-500 rounded-full p-1">
        <span className="text-5xl text-center flex-auto">Lyrics</span>
      </div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={SongCreate} />
        <Route path="/error" exact component={ErrorPage} />
        <Route path="/:id" exact component={SongDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Router
