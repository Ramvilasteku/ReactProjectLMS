import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CouseSection from '../../Components/Student/CouseSection'
import TestMonialsSection from '../../Components/Student/TestMonialsSection'
import CallToAction from '../../Components/Student/CallToAction'
import Footer from '../../Components/Student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CouseSection/>
      <TestMonialsSection/>
      <CallToAction/>

      <Footer/>

    </div>
  )
}

export default Home
