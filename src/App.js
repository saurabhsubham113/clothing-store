import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage/Homepage.component'
import ShopPage from './components/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInAndSignUp from './components/Sign-in-and-sign-up/Sign-in-and-sign-up.component';

import { auth } from './Firebase/firebase.utils'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
