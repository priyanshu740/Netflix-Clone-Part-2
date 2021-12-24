import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './ContextAPI/AuthContext/Auth';
import { MovieContextProvider } from './ContextAPI/MovieContext/Auth';

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
