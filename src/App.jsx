import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import Layout from './Layout'
import { Routes, Route, Link } from 'react-router-dom';
import Legion from './routes/Legion/Legion';
import Dashboard from './routes/Dashboard';
import Checklists from './routes/Checklists';
import Character from './routes/Legion/Character/Character';
import EditProgression from './components/CharacterPage/EditProgression'
import { useLocalStorage } from 'react-use';




const App = () => {

   

  return (
    // <div className='App'>
    <Navigation />
    // </div>

  )
}

const Navigation = () => {

  return (
    <div>
      <nav>
        <ul className='appMenu'>
          <li className='menuElement'>
            {/* <StatsChart className='icon'
                          color={'#00000'}
                          title={'Dashboard'}
                          height="25px"
                          width="25px"
                      /> */}
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className='menuElement'>
            {/* <People
                          color={'#00000'}
                          title={'Legion'}
                          height="25px"
                          width="25px"
                      /> */}
            <Link to="/legion">Legion</Link>
          </li>
          <li className='menuElement'>
            {/* <Checkbox
                          color={'#00000'}
                          title={'Checklists'}
                          height="25px"
                          width="25px"
                      /> */}
            <Link to="/checklists">Checklists</Link>
          </li>
          {/* Add other menu items */}
        </ul>
      </nav>

      <Routes>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="legion" element={<Legion />} ></Route>
        <Route path="legion/:id" element={<Character/>} />
        <Route path="legion/:id/edit-progression" element={<EditProgression/>} />
        <Route path="checklists" element={<Checklists />} />
      </Routes>
    </div>
  )
}

export default App
