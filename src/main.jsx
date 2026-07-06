import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthProvider } from './AuthProvider.jsx';
import {Provider} from 'react-redux';
import Store from './Store/Store.jsx'
  import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
     <AuthProvider>
      <ToastContainer   position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    <App />
    </AuthProvider>
    </Provider>
  </StrictMode>,
)
