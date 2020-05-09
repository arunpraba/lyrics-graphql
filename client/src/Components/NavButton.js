import React from 'react'
import { NavLink } from 'react-router-dom'

const NavButton = ({ icon, ...rest }) => {
  return (
    <div className="flex flex-row mb-5">
      <NavLink
        {...rest}
        activeClassName="bg-green-600"
        className="bg-green-500 mr-4 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 focus:outline-none rounded"
      >
        <i className={`fas fa-${icon}`}></i>
      </NavLink>
    </div>
  )
}

export default NavButton
