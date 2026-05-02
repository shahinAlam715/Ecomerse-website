import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux'
import { ContextApi } from './Components/ContextApi.jsx';
import {firebaseConfig} from "./Firebase.confiq.js"

createRoot(document.getElementById('root')).render(
     <Provider store={store}>
  <ContextApi>
      <App />
  </ContextApi>
    </Provider>
)
