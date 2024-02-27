import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement('button', {'data-id': 123}, 'button 1')

root.render(button)


