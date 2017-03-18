import React from 'react';
import { render } from 'react-dom';
import  App  from './App';
import './main.css';
import Tap from 'react-tap-event-plugin';

Tap();

render(
  <App />, document.getElementById('root'));
