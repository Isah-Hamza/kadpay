import { Route, BrowserRouter as Router , Link, Switch } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Landing from './pages/landing/Landing.jsx';
import Footer from './components/footer/Footer.jsx';
import Contact from './pages/contact/Contact.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Blog from './pages/blog/Blog.jsx';
import Services from './pages/services/Services.jsx';

function App() {
  return (
    <div className="App " style={{ display:'flex', flexDirection:'column', minHeight: '100vh' }}>
    <Router> 
      <Header />  
      <Switch>
        <Route path='/' component={() => <Landing /> } exact />
        <Route path='/contact-us' component={() => <Contact /> } exact />
        <Route path='/login' component={() => <Login /> } exact />
        <Route path='/register' component={() => <Register /> } exact />
        <Route path='/blog' component={() => <Blog /> } exact />
        <Route path='/services' component={() => <Services /> } exact />
      </Switch>
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;
