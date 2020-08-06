import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import Header from './components/header';
import OperatorsList from './components/operatorsList';
import PaymentForm from './components/paymentForm';
export default class App extends Component {
  state = {

  }

  render () {
    return (
      <div className="wrapper">
        <Header/>
        <main className="main_wrapper">
            <Router>
                <Switch>
                    <Route exact path='/operators-list' component={OperatorsList} />
                    <Route exact path='/payment' component={PaymentForm} />
                    <Redirect from='/' to='/operators-list'/>
                </Switch>
            </Router>
        </main>
      </div>
    );
  }
}

