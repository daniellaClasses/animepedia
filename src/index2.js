import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AnimeGrid } from './components/AnimeGrid';
import { Header } from './components/Header';
import './index.css';


ReactDOM.render(
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
    <Header/>
    <AnimeGrid />
  </div>
  ,document.getElementById('root')
);
