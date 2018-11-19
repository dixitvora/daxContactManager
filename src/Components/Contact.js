import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../Contex';


class Contact extends Component {
    state={
      showContactInfo:false
    };
    onDeleteClick = (id,dispatch)=>{
      // console.log('object');
      // this.props.deleteClickHandler();
      dispatch({type:'DELETE_CONTACT', payload:id});
    }
  render() {
    const {id,name,email,phone} = this.props.contact;
    const {showContactInfo} = this.state;

    return (
      <Consumer>
        {value=> {
          const {dispatch} =value;
          return(
            <div className="card card-body mb-3 container">
        <h2 className="card-header card-title mr-2"> {name } 
        <i className="fa fa-sort-down "  style={{cursor:'pointer'}} onClick={() => {this.setState({
        showContactInfo: !this.state.showContactInfo});
          }
        } ></i>
      <i className="fa fa-times" style={{cursor:'pointer',float:'right',color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i></h2>
      {showContactInfo ? ( 
        <ul className="  card-body list-group container ">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
        
      </div>
          )
        }}
      </Consumer>
      
    )
  }
}
Contact.propTypes={
  contact:PropTypes.object.isRequired,
  // deleteClickHandler:PropTypes.func.isRequired,
}

export default Contact;
