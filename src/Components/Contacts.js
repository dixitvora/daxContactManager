import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../Contex';

class Contacts extends Component {
    
    deleteConact=(id)=>{
      // console.log(id)
      const {contacts} = this.state;
      const newContacts = contacts.filter(contact => contact.id !==id);
      this.setState({
        contacts:newContacts
      })
    }
  render() {
    return(
      <Consumer>
        {value => {
          const {contacts} = value;
          return (
            <React.Fragment>
            {contacts.map(
              contact =>(
            <Contact
            key={contact.id} 
            contact={contact}/>
          )
        )}
      </React.Fragment>
          )
        } }
      </Consumer>
    )

      
  }
}

export default Contacts;