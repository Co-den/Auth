import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Components/Auth/Login'
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
 
 
  return (
    <div className='container'>
      <Fragment>
        {!isAuth && <Login />}
        <Routes>
          {isAuth && <Route path='/' element={<Dashboard />} />}
        </Routes>
      </Fragment>
    </div>

  );
}

export default App;
