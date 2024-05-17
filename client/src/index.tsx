import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './app/layout/styles.css'
import App from './app/layout/App'
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Route';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router= {router}/>
)
