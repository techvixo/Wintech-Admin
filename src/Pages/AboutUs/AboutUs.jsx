import React from 'react'
import AboutMenu from './AboutMenu'
import OurTeams from './OurTeams/OurTeams'

const AboutUs = () => {
  return (
    <div className='p-5 bg-white rounded-md shadow-md'>
      <AboutMenu></AboutMenu>
      <OurTeams></OurTeams>
    </div>
  )
}

export default AboutUs