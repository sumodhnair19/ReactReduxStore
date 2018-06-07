import * as React from 'react';
import '../App.css';
import { Input } from './common.js';
import { connect } from 'react-redux';
import {formPost} from '../actions/formPostAction.js';
import Proptypes from 'prop-types';
import {SHOW_LOADER } from '../actions/actionType';

export class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email: '',
      message: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  onSubmit(e) {
    e.preventDefault();
    if( this.state.name && this.state.email && this.state.message) {
      const postData = this.state;
      this.props.dispatch(
        {type :SHOW_LOADER}
      )
      this.props.dispatch(formPost(postData)); 
      this.setState({
          name : '',
          email: '',
          message: ''
        });
    } else {
      alert("please enter all the data");
    }
  }

  onChange(e) {
  this.setState({
    [e.target.name] : e.target.value
  });
  }


  render() {
    return (
        <div className="container">
          <form onSubmit = {this.onSubmit}>
            <div className="row">
              <div className="col-25">
                <label>Name</label>
              </div>
              <div className="col-75">
                <Input type="text"   name="name" placeholder="Your name.." value = {this.state.name} onChange={this.onChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Email</label>
              </div>
              <div className="col-75">
                <Input type="text"   name="email" placeholder="Your Email ID.." value = {this.state.email} onChange={this.onChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Message</label>
              </div>
              <div className="col-75">
                <Input type="text"   name="message" placeholder="Your Message.." value = {this.state.message} onChange={this.onChange}/>
              </div>
            </div>
            <div className="row">
              <Input type="submit" value="Submit" isButton = "true" />
            </div>
            </form>
        </div>
    );
  }
}

Form.Proptypes = {
  value : Proptypes.string.isRequired
}



export default connect(null, null)(Form);
