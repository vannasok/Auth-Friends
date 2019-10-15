import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index';

class loginPage extends Component {
   state = {
      account: {
         username: '',
         password: ''
      }
   };
   handleChange = e => {
      e.preventDefault();
      this.setState({
         account: {
            ...this.state.account,
            [e.target.name]: e.target.value
         }
      });
   };
   handleSubmit = e => {
      e.preventDefault();
      this.props.loginSuccess(this.state.account);
   };

   render() {
      if (this.props.isLoggedIn) {
         this.props.history.push('/friendlist');
      }

      console.log(this.props.loggedIn, this.props.isFetching);
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <input
                  onChange={this.handleChange}
                  type='text'
                  placeholder='enter username'
                  name='username'
                  value={this.state.username}
               />
               <input
                  onChange={this.handleChange}
                  type='password'
                  placeholder='enter password'
                  name='password'
                  value={this.state.password}
               />

               <button value='submit'>submit</button>
            </form>
         </div>
      );
   }
}
const mapStateToProps = state => ({
   isLoggedIn: state.loggingIn,
   isFetching: state.isFetching
});

export default connect(
   mapStateToProps,
   { loginSuccess }
)(loginPage);
