import React, { Component } from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { getFriend } from '../actions/index';
class FriendList extends Component {
   componentDidMount() {
      this.props.getFriend();
   }
   render() {
      return (
         <div className='showcase'>
            {this.props.friend.map((friend, id) => (
               <Friend key={id} friend={friend} />
            ))}
         </div>
      );
   }
}
const mapStateToProps = state => {
   console.log(state.friend);
   return {
      friend: state.friend
   };
};

export default connect(
   mapStateToProps,
   { getFriend }
)(FriendList);
