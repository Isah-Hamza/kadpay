import { AccountCircle, Home as HomeIcon } from '@material-ui/icons';
import './dashboard.css';
import React,  { useState, useEffect  } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Electricity from '../../components/electricity/Electricity';
import Airtime from '../../components/airtime/Airtime';
import TvSub from '../../components/tvsub/TvSub';
import Home from '../../components/home/Home';
import Data from '../../components/data/Data';
import Close from '@material-ui/icons/Close';
import Hamburger from '@material-ui/icons/Menu';


function Dashboard () {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState();
  const [sidebarOpen, setSidbarOpen] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname.split('/')[2] || 'home';

  useEffect(() => {
      !path && setPage('home')
      setPage(path)
    return () => {
      
    }
  }, [path])
  
  function toggleSidebarOpen(){
    setSidbarOpen(!sidebarOpen);
  } 

  function closeSideBar(){
    setSidbarOpen(true);
  }

  console.log(path)
  return (
    <div className='dashboard-container'  onClick={ !sidebarOpen ? toggleSidebarOpen : null }  >
      <div className='sidebar' id= {sidebarOpen? '' : 'adjust-left'} >
      <div className='toggler' > 
      {sidebarOpen ? <Hamburger onClick = { toggleSidebarOpen } /> : <Close  onClick = { toggleSidebarOpen }/> }
      </div>
      <div className='username'><AccountCircle/> Guest </div>
        <div className='sidebar-links'>
        <ul>
          <li style ={{borderBottom:'1px solid gainsboro'}} className={path == 'home' ? 'active' : null }  onClick={ () => {history.push('/dashboard/home')}} > <HomeIcon /> Home </li>
          <li> <HomeIcon /> Transfer Money </li>
          <li className={path == 'electricity' ? 'active' : null } onClick={ () => {history.push('/dashboard/electricity')}}> <AccountCircle/> Buy Electricity </li>
          <li className={path == 'data' ? 'active' : null } onClick={ () => {history.push('/dashboard/data')}}> <AccountCircle/> Buy Data </li>
          <li className={path == 'airtime' ? 'active' : null } onClick={ () => {history.push('/dashboard/airtime')}}> <AccountCircle/> Buy Airtime </li>
          <li style ={{borderBottom:'1px solid gainsboro'}} className={path == 'tvsub' ? 'active' : null } onClick={ () => {history.push('/dashboard/tvsub')}} > <AccountCircle  /> TV Subscription </li>
          <li> <AccountCircle/> My Profile </li>
          <li style ={{borderBottom:'1px solid gainsboro'}} > <AccountCircle/> Referral </li>
        </ul>
        <button>{ !user? 'Sign In' : 'Sign Out' }</button>
        </div>
      </div>
      <div className='main'  id= {sidebarOpen? '' : 'adjust-left'}>
      <div className='toggler' > 
      {sidebarOpen ? <Hamburger onClick = { toggleSidebarOpen } /> : null  }
      </div>
        {path == 'electricity' ? <Electricity/> : null }
        {path == 'airtime' ? <Airtime/> : null }
        {path == 'tvsub' ? <TvSub/> : null }
        {path == 'home' ? <Home/> : null }
        {path == 'data' ? <Data/> : null }
      </div>
    </div>
  )
}

export default Dashboard