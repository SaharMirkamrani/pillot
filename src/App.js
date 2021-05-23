import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="bg-gray-100">
      <Router>
        <Header token={token} setToken={setToken} />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
