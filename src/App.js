import { Route, BrowserRouter as Router , Link, Switch } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Landing from './pages/landing/landing.jsx';
import Footer from './components/footer/footer.jsx';
import Contact from './pages/contact/contact.jsx';


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
