import React, { Component } from 'react'

class AddContacts extends Component {
    state = {
        name: '',
        email:'',
        phone:'',
    };
    onSubmit= e =>{
        e.preventDefault();
        console.log(this.state);
    }
    onChange = (e)=>this.setState({[e.target.name]:e.target.value});
  
  render() {
      const {name,email,phone} = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header"> Add Contacts</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Contact Name..." value={name} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Email..." value = {email} onChange ={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" className="form-control" placeholder="Enter Phone no......." value={phone} onChange={this.onChange}/>
                </div>
                <input type="submit" value="Add Contact" className="btn btn-block  btn-amber"/>
            </form>
        </div>
      </div>
    )
  }
}

export default AddContacts;