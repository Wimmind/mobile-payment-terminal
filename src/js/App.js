import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Header from './components/header';
import OperatorsList from './components/operatorsList';
import PaymentForm from './components/paymentForm';
export default function App() {

  return (
    <div className="wrapper">
      <Header/>
      <main className="main_wrapper">
          <Router>
            <Route exact path='/operators-list' component={OperatorsList} />
            <Route exact path='/payment' component={PaymentForm} />
            <Redirect from='/' to='/operators-list'/>
          </Router>
      </main>
    </div>
  );
  
}

