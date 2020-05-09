import React from 'react'
import NavButton from './NavButton'

const ErrorPage = () => {
  return (
    <>
      <NavButton to="/" exact icon="home" />
      <p className="text-6xl">Something went wrong</p>
    </>
  )
}

export default ErrorPage
