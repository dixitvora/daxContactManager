import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.lite.min.css';
import 'mdbootstrap/css/bootstrap.min.css';
import AddContacts from './Components/Contacts/AddContacts';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';


import {Provider} from './Contex';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
              <Header branding="Contact Manager"/>
              <div className="container">
               <Switch>
                 <Route exact path ='/' component={Contacts}/>
                 <Route exact path='/about' component={About}/>
                 <Route exact path='/addcontact' component={AddContacts}/>
                 <Route component={NotFound}/>
                </Switch>
              </div>            
          </div>
        </Router>
      
      </Provider>
    );
  }
}

export default App;
