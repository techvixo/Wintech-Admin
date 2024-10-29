import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AboutMenu = () => {
 const menuItems = [
  {
    id: 1,
    title: "Our Team",
    path: "/about"
  },
  {
    id: 1,
    title: "Certificates",
    path: "/certificates"
  },
  {
    id: 1,
    title: "Partners",
    path: "/partners"
  }
]
  return (
    <div className='banner_menu'>
     <h5 className='text-[#344767] font-semibold text-lg my-3 capitalize'>This page should include three clearly labeled tabs to organize the content.</h5>
     <div className="flex items-center gap-1 bg-[#F8F9FA] p-1 my-2 shadow">
      {
       menuItems.map((menu, i) => {
        return(
         <NavLink className="p-1 px-8 text-sm rounded font-semibold " key={i} to={`${menu.path}`}>{menu.title}</NavLink>
        )
       })
      }
     </div>
    </div>
  )
}

export default AboutMenu