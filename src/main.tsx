import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.comp'

import GlobalStyle from './theme/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)