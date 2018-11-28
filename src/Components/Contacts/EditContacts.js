import React, { Component } from 'react'
import {Consumer} from '../../Contex';
// import uuid from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import Axios from 'axios';


class EditContacts extends Component {
    state = {
        name: '',
        email:'',
        phone:'',
        errors:{}
    };
    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact =res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })
    }
    onSubmit= async (dispatch,e) =>{
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
        const updContact = {
            name,
            email,
            phone
        }
        // const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact);
        // dispatch({type: 'ADD_CONTACT',payload: res.data});

        const {id} = this.props.match.params;
        const res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);
        dispatch({type:'UPDATE_CONTACT',payload:res.data})

        // Clear State 
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        });
        this.props.history.push('/');
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
                        <div className="card-header display-3"> Edit Contacts</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <TextInputGroup label='Name'name='name'placeholder='Enter your Name ....' value={name} onChange= {this.onChange} error={errors.name}/>
                                <TextInputGroup label = 'Email' name='email' placeholder='Enter Your Email...' value={email} type='email' onChange={this.onChange} error={errors.email}/>
                                 <TextInputGroup label = 'Phone' name='phone' placeholder='Enter Your Phone...' value={phone} onChange={this.onChange} error={errors.phone} />        
                                <input type="submit" value="Update Contact" className="btn btn-block  btn-amber"/>
                            </form>
                        </div>
                    </div>
                  )
              }}
          </Consumer>
      )
    
  }
}

export default EditContacts;