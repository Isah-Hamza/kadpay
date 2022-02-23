import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router , Link, Switch } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Landing from './pages/landing/Landing.jsx';
import Footer from './components/footer/Footer.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Blog from './pages/blog/Blog.jsx';
import Services from './pages/services/Services.jsx';
import Airtime from './pages/airtime/Airtime.jsx';
import TVSub from './pages/tvsub/TVSub.jsx';
import Electricity from './pages/electricity/Electricity.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({});

  const value = {
    user:user,
    setUser: setUser
  }


  // export UserContext;

  return (
    <div className="App " style={{ display:'flex', flexDirection:'column', minHeight: '100vh' }}>
        <UserContext.Provider value = { value }>
          <Router> 
            <Header />  
            <Switch>
              <Route path='/' component={() => <Landing /> } exact />
              <Route path='/contact-us' component={() => <Contact /> } exact />
              <Route path='/about-us' component={() => <About /> } exact />
              <Route path='/login' component={() => <Login /> } exact />
              <Route path='/register' component={() => <Register /> } exact />
              <Route path='/blog' component={() => <Blog /> } exact />
              <Route path='/services' component={() => <Services /> } exact />
              <Route path='/services/airtime' component={() => <Airtime /> } exact />
              <Route path='/services/tvsub' component={() => <TVSub /> } exact />
              <Route path='/services/electricity' component={() => <Electricity /> } exact />
              <Route path='/dashboard' component={() => <Dashboard /> } exact />
              <Route path='/dashboard/*' component={() => <Dashboard /> } exact />
            </Switch>
            <Footer />
          </Router>
        </UserContext.Provider>      
      </div>
  );
}

export default App;
