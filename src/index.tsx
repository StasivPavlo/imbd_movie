import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './app/store/store';

import App from './App';
import { HomePage } from './pages/Home/Home';

import './index.css';
import { MoviePage } from './pages/Movie/Movie';
import { Profile } from './pages/Profile/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:movieId' element={<MoviePage />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
