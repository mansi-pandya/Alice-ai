import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <UserContext>
    <App />
  </UserContext>,
)
