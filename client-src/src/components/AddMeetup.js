import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class AddMeetup extends Component {

  addMeetup(newMeetup){
   axios.request({
     method: 'POST',
     url: 'http://localhost:3000/api/meetups',
     data: newMeetup,
   }).then(response => {
     this.props.history.push('/');
   }).catch(err => {console.log(err)})
  }

  onSubmit(e){
    e.preventDefault();
    let newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value,
    }
    this.addMeetup(newMeetup);
  }

  render() {
    return (
     <div>
       <br/>
       <Link to="/" className="btn grey">Back</Link>
       <h3>Add Meetup</h3>
       <form onSubmit={this.onSubmit.bind(this)}>
         <div className="input-field">
           <input type="text" name="name" ref="name"/>
           <label htmlFor="name">Name</label>
         </div>
         <div className="input-field">
           <input type="text" name="city" ref="city"/>
           <label htmlFor="city">City</label>
         </div>
         <div className="input-field">
           <input type="text" name="address" ref="address"/>
           <label htmlFor="address">address</label>
         </div>
         <input type="submit" className="btn" value="Save"/>
       </form>
     </div>
    );
  }
}

export default AddMeetup;
