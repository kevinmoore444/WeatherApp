import React from 'react'
import NavigationBar from '../components/NavigationBar'
import TodaysForecast from '../components/TodaysForecast'
// import searchValue from '../components/CitySearch'
//import axios from 'axios'
//import { useState } from 'react'



const HomePage = () => {


  return (
    <div>  
        <NavigationBar/>
        <TodaysForecast/>
    </div>
  )
}

export default HomePage