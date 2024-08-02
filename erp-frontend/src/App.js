import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'React-router-dom';
import Header from './components/Header';

const App = () => (
    <Router>
    <div>
    <Header />
    <Switch>
        <Route path="/" exact>
        <h2>Welcome to the ERP System</h2>
        </Route>
    </Switch>
    </div>
</Router>
);

export default App;