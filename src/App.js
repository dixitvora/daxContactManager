import React, { Component } from 'react';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.lite.min.css';
import 'mdbootstrap/css/bootstrap.min.css';
import AddContact from './Components/Contacts/AddContacts';

import {Provider} from './Contex';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <AddContact/>
          <Contacts name="Dax Dev" email="dax123@dev.com" phone="123-456-7899"/>
          {/* <Contacts name="Hiral Dev" email="hiral123@dev.com" phone="987-654-4563"/> */}
        </div>
        
      </div>
      </Provider>
    );
  }
}

export default App;
