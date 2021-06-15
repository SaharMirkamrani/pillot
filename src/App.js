import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import BuyandSell from './pages/BuyandSell';
import AdPage from './pages/AdPage';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Dashboard from './pages/Dashboard';
import SubmitAd from './pages/SubmitAd'

const App = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-gray-100">
      <Router>
        <Header token={token} setToken={setToken} />
        {/* {isLoading && <Loader /> } */}
        <Switch>
          <Route path={`/AdPage/:id`}>
            <AdPage />
          </Route>
          <Route exact path={`/category/:name`}>
            <BuyandSell />
          </Route>
          <Route exact path="/" component={Landing} />
          <Route exact path="/submitAd" component={SubmitAd} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} path="/404" />
        </Switch>
        <ScrollToTopBtn />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
