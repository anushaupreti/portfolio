import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import bg from './dreamplace.webp';

const App = () => {
  return (
    <div>
      <img src={bg}></img>
      Hello dhanusha
    </div>
  );
};

createRoot(document.querySelector('#root')).render(<App />);
