import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Project from './pages/project';
import Contact from './pages/contact';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
    {
      path: '/project',
      element: <Project />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.querySelector('#root')).render(<App />);
