import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import MasterDataAnggota from './pages/MasterDataAnggota';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DetailAnggota from './pages/DetailAnggota';
import TambahAnggota from './pages/TambahAnggota';
import UbahAnggota from './pages/UbahAnggota';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/anggota",
    element: <MasterDataAnggota />
  },
  {
    path: "/anggota/:id",
    element: <DetailAnggota />
  },
  {
    path: "/anggota/create",
    element: <TambahAnggota />
  },
  {
    path: "/anggota/:id/update",
    element: <UbahAnggota />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
