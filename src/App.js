import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List';
import AdPage from './pages/AdPage';
import NotFound from './pages/NotFound';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Dashboard from './pages/Dashboard';
import SubmitAd from './pages/SubmitAd';
import ChooseCategory from './pages/ChooseCategory';
import ListProvider from './ListProvider';
import Loader from './components/Loader';

const App = () => {
  return (
    <div className="bg-gray-100">
      <Router>
        <ListProvider>
          {/* <Loader /> */}
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path={`/AdPage/:id`} component={AdPage} />
            <Route exact path={`/category/:name`} component={List} />
            <Route exact path="/submitAd" component={SubmitAd} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/chooseCategory" component={ChooseCategory} />
            <Route component={NotFound} path={'*'} />
          </Switch>
        </ListProvider>
        <ScrollToTopBtn />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
