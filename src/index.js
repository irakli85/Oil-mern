import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DecsContextProvider } from './context/DecsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DecsContextProvider>
      <App />
    </DecsContextProvider>    
  </React.StrictMode>
);


