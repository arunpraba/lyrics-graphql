import React from 'react'
import NavButton from './NavButton'

const ErrorPage = () => (
  <>
    <NavButton to="/" exact icon="home" />
    <p className="text-6xl">Something went wrong</p>
  </>
)

export default ErrorPage
