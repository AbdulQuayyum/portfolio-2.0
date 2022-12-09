// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Background from './Components/Theme/Background';
import { ThemeProvider } from './Contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Background>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Background>
    </BrowserRouter>
  </React.StrictMode>
);
