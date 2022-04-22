import React from 'react'
import ReactDOM from 'react-dom'

//IMPORT REACT DOM ROUTER
import { BrowserRouter as Router } from 'react-router-dom'

//IMPORT CSS FOLDER
import './index.css'
import 'antd/dist/antd.css'

//IMPORT APP
import App from './App'




ReactDOM.render(
   <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


