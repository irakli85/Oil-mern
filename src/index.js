import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DecsContextProvider } from './context/DecsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>    
      <DecsContextProvider>
        <App />
      </DecsContextProvider>
    </AuthContextProvider>    
  </React.StrictMode>
);


