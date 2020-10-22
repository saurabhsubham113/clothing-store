import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage/Homepage.component'
import ShopPage from './components/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInAndSignUp from './components/Sign-in-and-sign-up/Sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './Firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    //onAuthStateChanged method sees when the user state is changed
    //we want to be aware of the change when user is loggedIn or Logged Out
    //the parameter('userAuth') gives us what the user state is
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    //unsbscribe methodfrom the firebase.
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
