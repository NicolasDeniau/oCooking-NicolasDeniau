import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "./assets/styles/normallize.scss";
import "./assets/styles/main.scss";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
