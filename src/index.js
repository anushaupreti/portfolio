import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Home from './pages/home';
import Layout from './components/Layout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.querySelector('#root')).render(<App />);
