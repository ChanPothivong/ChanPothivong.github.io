import React from 'react';
import {Route, Routes,} from 'react-router-dom';
import Home from './components/Home';
import About from './components//About';
import Location from './components//Location';
import Login from './components//Login';
import FeedbackForm from './components//FeedbackForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import * as PropTypes from "prop-types";
import Registration from "./components/Registration";

function Switch() {
    return null;
}

Switch.propTypes = {children: PropTypes.node};
const App = () => {
  return (
      <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="" component={About}   />
          <Route path="/Location" element={<Location/>} />
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/feedback" element={<FeedbackForm/>} />
      </Routes>
      </>
  );
};
export default App;
