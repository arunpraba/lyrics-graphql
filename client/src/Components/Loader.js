import React from 'react'
import './Loader.css'

const Loader = () => (
  <div className="flex items-center justify-center">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Loader
