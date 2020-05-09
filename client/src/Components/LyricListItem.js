import React from 'react'

const LyricListItem = ({ icon, content, likes, onClick }) => (
  <div
    className="flex items-center justify-between bg-orange-100 mt-2 border-l-4 
                      border-green-500 text-green-700 p-2 cursor-pointer hover:bg-yellow-200"
  >
    <span className="font-bold flex-grow">{content}</span>
    <div className="flex flex-col items-center justify-center">
      <i
        className={`${icon} cursor-pointer px-3`}
        role="button"
        onClick={onClick}
      ></i>
      {likes > 0 && <span>{likes}</span>}
    </div>
  </div>
)

export default LyricListItem
