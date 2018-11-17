import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
            contacts:[
                {   
                    id: '1',
                    name:'Dax Code',
                    email: 'daxcod@dev.com ',
                    phone:'123-456-7898'
                },
                {
                  id: '2',
                  name: 'Deep Codere',
                  email: 'dipcoder@dev.com ',
                  phone: '987-456-1234'
                },
                {
                  id: '3',
                  name: 'Hiren Coder',
                  email: 'hirancoder@dev.com',
                  phone: '654-987-4561'
                }

            ]
        }
    deleteConact=(id)=>{
      // console.log(id)
      const {contacts} = this.state;
      const newContacts = contacts.filter(contact => contact.id !==id);
      this.setState({
        contacts:newContacts
      })
    }
  render() {
        const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact =>(
            <Contact
            key={contact.id} 
            contact={contact} deleteClickHandler={this.deleteConact.bind(this,contact.id)}
            />


        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;