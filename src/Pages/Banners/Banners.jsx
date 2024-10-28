import React from 'react'
import BannerMenu from './BannerMenu/BannerMenu'
import { Outlet } from 'react-router-dom'

const Banners = () => {

  return (
    <div className='bg-white p-5 rounded-md shadow-md'>
      <BannerMenu></BannerMenu>
      <Outlet />
    </div>
  )
}

export default Banners