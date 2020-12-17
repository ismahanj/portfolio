import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components"
import { theme } from "./themes/theme"
import './index.css';
import App from './App';
// import { ThemeProvider } from 'react-bootstrap';

ReactDOM.render(
  <ThemeProvider theme= {theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

