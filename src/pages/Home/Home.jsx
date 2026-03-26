import React from 'react'
import Homefirst from './Homesectionfirst/Homefirst'
import Collection from './Homesectionfive/Collection'
import Newarrivals from './homesectionfour/Newarrivals'
import NewCollection from './Homesectionsecond/NewCollection'
import Features from './homesectionthird/Features'
import Bestsell from './homesectionsix/Bestsell'
import Template from './homeseven/Template'

const Home = () => {
  return (
    <div>
        <Homefirst/>
        <NewCollection/>
        <Features/>
        <Newarrivals/>
        <Collection/>
        <Bestsell/>
        <Template/>
    </div>
  )
}

export default Home