// import React from "react";
// import ReactDOM from "react-dom/client";

import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
