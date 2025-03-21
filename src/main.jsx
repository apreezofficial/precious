import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MusicPlayer from './components/MusicPlayer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MusicPlayer />
  </StrictMode>,
)
