import React from 'react'
import { MdNotifications, MdAccountCircle } from 'react-icons/md'
import upUgoLogo from '../assets/images/logo.png'

const menuItemClass =
  'hover:bg-slate-200 cursor-pointer px-3 flex flex-col justify-center'

const Header = () => {
  return (
    <header className="bg-white px-8 shadow-md">
      <div className="flex flex-row align-middle justify-center lg:justify-between">
        {/* Logo */}
        <div className="w-24 py-2">
          <img src={upUgoLogo} alt="upUgo" className="w-full h-auto" />
        </div>
        {/* Menu Items */}
        <div className="hidden flex-row align-middle justify-end lg:flex">
          <div
            className={menuItemClass}
            onClick={() => console.log('Notifications Clicked!')}>
            <MdNotifications size={'1.5em'} />
          </div>

          <div
            className={menuItemClass}
            onClick={() => console.log('Account Clicked!')}>
            <MdAccountCircle size={'2.5em'} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
