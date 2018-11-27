import React, { Component } from 'react'
import {Consumer} from '../../Contex';
import uuid from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';


class AddContacts extends Component {
    state = {
        name: '',
        email:'',
        phone:'',
        errors:{}
    };
    onSubmit= (dispatch,e) =>{
        e.preventDefault();
        // console.log(this.state); this is for checking errors 
        const{name,email,phone} = this.state;
        if(name === ''){
            this.setState({errors:{name:'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors:{email:'Email is required'}});
            return;
        }
        if(phone === ''){
            this.setState({errors:{phone:'Phone is required'}});
            return;
        }
        const newContact = {
            id:uuid(),
            name,
            email,
            phone
        }
        dispatch({type:'ADD_CONTACT',payload:newContact});

        // Clear State 
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
    }
    onChange = (e)=>this.setState({[e.target.name]:e.target.value});
  
  render() {
      const {name,email,phone,errors} = this.state;
      return(
          <Consumer>
              {value=>{
                  const {dispatch} = value;
                  return(
                    <div className="card mb-3">
                        <div className="card-header"> Add Contacts</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <TextInputGroup label='Name'name='name'placeholder='Enter your Name ....' value={name} onChange= {this.onChange} error={errors.name}/>
                                <TextInputGroup label = 'Email' name='email' placeholder='Enter Your Email...' value={email} type='email' onChange={this.onChange} error={errors.email}/>
                                 <TextInputGroup label = 'Phone' name='phone' placeholder='Enter Your Phone...' value={phone} onChange={this.onChange} error={errors.phone} />        
                                <input type="submit" value="Add Contact" className="btn btn-block  btn-amber"/>
                            </form>
                        </div>
                    </div>
                  )
              }}
          </Consumer>
      )
    
  }
}

export default AddContacts;