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

const App = () => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="bg-gray-100">
      <Router>
        <Header token={token} setToken={setToken} />
        {/* {isLoading && <Loader /> } */}
        <Switch>
        <Route path={`/AdPage/:id`}>
          <AdPage />
        </Route>
          <Route exact path="/buyandsell" component={BuyandSell} />
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
        <ScrollToTopBtn />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
