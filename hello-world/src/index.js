//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';

//Routes
import AppRoutes from './routes';

//Assets
import './index.css';

ReactDOM.render(
  <Router>
  	<AppRoutes />
  </Router>,
  document.getElementById('root')
);
