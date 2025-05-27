import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'



// const App = () => <h1>Hello World</h1>;

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
