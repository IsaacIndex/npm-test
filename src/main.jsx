import React from 'react'
import ReactDOM from 'react-dom/client'
import MyComponent from '../lib/MyComponent.jsx';
import Test from "../"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyComponent />
    <Test />
  </React.StrictMode>,
)
