import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <AuthProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </AuthProvider>
  </React.StrictMode>
);
