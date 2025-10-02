import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import StarBox from './StarBox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarBox maxRating={10} className='test' defaultRating={1}></StarBox>
    <StarBox size={15} color='red' className='test' />
    
  </React.StrictMode>
);

