import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Browserrouter- instead of using in app use here */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


