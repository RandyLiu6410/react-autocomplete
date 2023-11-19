import React from 'react'
import ReactDOM from 'react-dom/client'
import Autocomplete from './components/autocomplete/autocomplete'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container">
      <Autocomplete />
    </div>
  </React.StrictMode>,
)
