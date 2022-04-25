import React, { memo } from 'react'

const UserCard = ({ user, onViewDetailsClicked }) => {
  return (
    <div className="container bg-white mb-4 shadow-md rounded overflow-hidden">
      <img
        src={user?.pic}
        className="w-full h-auto object-cover object-center"
        alt="user-pic"
      />
      <div className="container px-6 py-4">
        <div className="font-bold mb-2 text-2xl">{user?.name}</div>
        <div>{`${user?.email} - ${user?.phone}`}</div>
      </div>
      <button
        className="py-4 px-8 bg-orange-600 hover:bg-orange-500  text-white font-bold rounded-sm"
        onClick={() => onViewDetailsClicked(user)}
        type="button">
        View Details
      </button>
    </div>
  )
}

export default memo(UserCard)
