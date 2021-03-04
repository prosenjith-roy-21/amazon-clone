import './App.css';
import Header from './components/Header';
import './components/Header'
import Home from './components/Home';
import Orders from './components/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './dataLayer/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51IIuW9E4eMHK8YCi2Ajh9ciJlhji4vamG20jPldxOHGaYO5NDQn8JJ1Hs8srDvDoQYUGdSv6Vltp3l0Bu9pCdtvb0071BUAi9z"
)

function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>> ", authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user:authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user:null
        })
        
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/">  
            <Header />
            <Home/>
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header/>
            <Orders/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
