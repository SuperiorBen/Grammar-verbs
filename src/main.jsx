import React from 'react'
import ReactDOM from 'react-dom/client'
import { GuessVerbApp } from './guess-verbs-app/GuessVerbApp'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GuessVerbApp />
  </React.StrictMode>
)
