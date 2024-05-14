// Layout.jsx (your common layout component)
import React from 'react';
// import { Link } from 'react-router-dom';
import { render } from 'react-dom'
import { StatsChart, People, Checkbox } from 'react-ionicons'
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Legion from './routes/Legion/Legion';
import Checklists from './routes/Checklists';






const Layout = () => {
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
                <Route path="legion" element={<Legion />} />
                <Route path="checklists" element={<Checklists />} />
            </Routes>
        </div>
    );
};







// const Layout = ({ children }) => {
//     return (
//         <div>
//             <nav>
//                 <ul className='appMenu'>
//                     <li className='menuElement'>
//                         <StatsChart className='icon'
//                             color={'#00000'}
//                             title={'Dashboard'}
//                             height="25px"
//                             width="25px"
//                         />
//                         <Link to="/dashboard">Dashboard</Link>
//                     </li>
//                     <li className='menuElement'>
//                         <People 
//                             color={'#00000'}
//                             title={'Legion'}
//                             height="25px"
//                             width="25px"
//                         />
//                         <Link to="/legion">Legion</Link>
//                     </li>
//                     <li className='menuElement'>
//                         <Checkbox
//                             color={'#00000'}
//                             title={'Checklists'}
//                             height="25px"
//                             width="25px"
//                         />
//                         <Link to="/checklists">Checklists</Link>
//                     </li>
//                     {/* Add other menu items */}
//                 </ul>
//             </nav>
//             {children} {/* Render the page-specific content */}
//         </div>
//     );
// };

export default Layout;