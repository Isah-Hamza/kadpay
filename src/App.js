import { Route, BrowserRouter as Router , Link, Switch } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Landing from './pages/landing/Landing.jsx';
import Footer from './components/footer/Footer.jsx';
import Contact from './pages/contact/Contact.jsx';


function App() {
  return (
    <div className="App">
    <Router> 
      <Header />  
      <Switch>
        <Route path='/' component={() => <Landing /> } exact />
        <Route path='/contact-us' component={() => <Contact /> } exact />
      </Switch>
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;
