import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import React from 'react';
import './index.css'
import App from './App'
import ContextProvider from "./context/context"; 


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<ContextProvider>
  <App/>
</ContextProvider>
</React.StrictMode>
 
)
