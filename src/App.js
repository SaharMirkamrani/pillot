import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
