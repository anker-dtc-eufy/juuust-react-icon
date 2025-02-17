import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import 'normalize.css'

const container = document.getElementById('root');
const root = createRoot(container); 
console.log('info', container, root)
root.render(<App />);

