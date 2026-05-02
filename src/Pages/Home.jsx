import React from 'react'
import Banner from '../Components/Banner'
import Latestproduct from '../Components/Latestproduct'
import Latest from '../Components/Latest'
import Shopex from '../Components/Shopex'
import Uniq from '../Components/Uniq'
import Traending from '../Components/Traending'
import Discount from '../Components/Discount'
import Top from '../Components/Top'
import Latestupdate from '../Components/Latestupdate'
import Latestblog from '../Components/Latestblog'

const Home = () => {
  return (
    <>
    <Banner/>
    <Latestproduct/>
    <Latest/>
    <Shopex/>
    <Uniq/>
    <Traending/>
    <Discount/> 
    <Top/>
    <Latestupdate/>
    <Latestblog/>
    </>
  )
}

export default Home