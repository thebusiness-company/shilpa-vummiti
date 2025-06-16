import React from 'react'
import AboutMe from './AboutMe'
import Article from './Article'
import Press from './Press'

const PageSection = () => {
  return (
    <>
    <div id='About'>
    <AboutMe/>
    </div>
    <div id='Article'>
    <Article/>
    </div>
    <div id='Press'>
    <Press/>
    </div>
    </>
  )
}

export default PageSection
