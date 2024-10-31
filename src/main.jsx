import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Assets/css/main.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './Reducers'


const store = configureStore({
  reducer: rootReducer,
  devTools:true
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
