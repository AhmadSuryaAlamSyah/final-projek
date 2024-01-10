import './App.css';
import React from 'react';
import Footer from './Menu/Footer';
import Section from './Menu/Section';
import Data from './Menu/Data';
import Loker from './Menu/Loker';
import Login from './Menu/Login';
import Singup from './Menu/SIngup';
import Layout from './Menu/Layout';
import UbahPass from './Menu/UbahPass';
import CreateData from './Menu/CreateData';
import Cookies from 'js-cookie';
import PageNotFound from './Menu/PageNotFound';
import { GlobalProvider } from './data/GlobalContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const LoginRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
      return props.children;
    } else {
      return <Navigate to={'/login'} />;
    }
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Section />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Singup />
              </Layout>
            }
          />
          <Route
            path="/data"
            element={
              <LoginRoute>
                <Layout>
                  <Data />
                </Layout>
              </LoginRoute>
            }
          />
          <Route
            path="/create-data/:ID_GAMES"
            element={
              <LoginRoute>
                <Layout>
                  <CreateData />
                </Layout>
              </LoginRoute>
            }
          />
          <Route
            path="/create-data"
            element={
              <LoginRoute>
                <Layout>
                  <CreateData />
                </Layout>
              </LoginRoute>
            }
          />

          <Route
            path="/loker"
            element={
              <LoginRoute>
                <Layout>
                  <Loker />
                </Layout>
              </LoginRoute>
            }
          />

          <Route
            path="/ubahpass"
            element={
              <LoginRoute>
                <Layout>
                  <UbahPass />
                </Layout>
              </LoginRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
