import React from 'react'
import Hero from '../components/landingComps/hero/Hero'
import Partners from '../components/landingComps/partners/Partners'
import ThreeBlocks from '../components/landingComps/three-blocks/ThreeBlocks'
import EssentialTools from '../components/landingComps/essential-tools/EssentialTools'
import FAQs from '../components/landingComps/faqs/FAQs'
import CaseStudies from '../components/landingComps/case-studies/CaseStudies'
import ReactGA from 'react-ga4'
import Navbar from '../components/landingComps/navbar/Navbar'

const Landing = () => {


  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: `Home`,
  });
  return (
    <>
     <Navbar/>
    <div className="">
        <Hero />

        <Partners/>

        <ThreeBlocks />

        <EssentialTools />

        <CaseStudies/>

        <FAQs />

    </div>
    </>
    
  )
}

export default Landing