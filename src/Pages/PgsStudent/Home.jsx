import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CouseSection from '../../Components/Student/CouseSection'
import TestMonialsSection from '../../Components/Student/TestMonialsSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CouseSection/>
      <TestMonialsSection/>

    </div>
  )
}

export default Home
