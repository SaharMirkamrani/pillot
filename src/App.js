import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List';
import AdPage from './pages/AdPage';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Dashboard from './pages/Dashboard';
import SubmitAd from './pages/SubmitAd';
import ChooseCategory from './pages/ChooseCategory';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-gray-100">
      <Router>
        <Header />
        {/* {isLoading && <Loader /> } */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path={`/AdPage/:id`} component={AdPage} />
          <Route exact path={`/category/:name`} component={List} />
          <Route exact path="/submitAd" component={SubmitAd} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/chooseCategory" component={ChooseCategory} />
          <Route component={NotFound} path={'*'} />
        </Switch>
        <ScrollToTopBtn />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
