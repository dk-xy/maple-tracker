// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/dashboard.jsx';
// import Legion from '../pages/Legion/legion.jsx';
// import Checklists from '../pages/checklists.jsx';
// import Settings from '../pages/settings.jsx';
// import { Link } from 'react-router-dom';

// function Routes() {
//     return (
//         <Route>
//                 <Route path="/" exact component={Dashboard} />
//                 <Route path="/legion" component={Legion} />
//                 <Route path="/checklists" component={Checklists} />
//                 <Route path="/settings" component={Settings} />
//         </Route>
//     );
// }

// export default Routes;

export default function Root() {
    return (
      <>
        <div id="header">
          <nav>
            <ul>
              <li>
                <a href={`/dashboard`}>dash</a>
              </li>
              <li>
                <a href={`/legion`}>legion</a>
              </li>
              <li>
                <a href={`/checklists`}>checklists</a>
              </li>
              <li>
                <a href={`/settings`}>settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }