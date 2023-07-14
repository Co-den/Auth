import { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Login from './Components/Auth/Login'
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  const authCtx = useContext(AuthContext);
 
 
  return (
    <div className='container'>
      <Fragment>
        {!authCtx.isLoggedIn && <Login />}
        <Routes>
          {authCtx.isLoggedIn && <Route path='/' element={<Dashboard />} />}
        </Routes>
      </Fragment>
    </div>

  );
}

export default App;
