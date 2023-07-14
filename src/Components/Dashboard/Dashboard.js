import { Fragment } from 'react';
import Sidebar from './Sidebar Section/Sidebar';
import Body from './Body Section/Body';

const Dashboard = () => {
  return (
      <Fragment>
          <Sidebar />
          <Body/>
    </Fragment>
  )
}

export default Dashboard;