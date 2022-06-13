import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './contexts';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider maxSnack={4}>
    <Providers>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Providers>
  </SnackbarProvider>
);

reportWebVitals();
