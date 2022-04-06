import { useState } from 'react';
import './App.css';
import Home from './components/views/Home';
import AuthPage from './components/views/AuthPage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getUser } from './services/auth';

function App() {
  const user = getUser();
  const [currentUser, setCurrentUser] = useState(user);
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/auth">
            {!currentUser ? <AuthPage {...{ setCurrentUser }} /> : <Redirect to="/" />}
          </Route>
          <Route path="/">{currentUser ? <Home /> : <Redirect to="/auth" />}</Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
