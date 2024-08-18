import React from 'react';
import ReactDOM from 'react-dom';

// Import your App component or main component here
import App from './App';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
