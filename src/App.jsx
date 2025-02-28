import React from 'react'
import Lounge from './Components/Lounge/Lounge'
import Travelers from './Components/Best Travelers/Travelers'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Info from './Components/Info/Info'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Search/Search'
import Subcribe from './Components/Subscribe/Subcribe'
import Support from './Components/Support/Support'
import './main.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subcribe/>
      <Footer/>
    </div>
  )
}

export default App