import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { Store } from './Store/index.jsx';
import { Router } from './Router.jsx';
import { RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
