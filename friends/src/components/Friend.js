import React from 'react';

const Friend = props => {
   console.log(props.friend);
   return (
      <div className='name-card'>
         <p>
            Name: <b>{props.friend.name}</b>
         </p>
         <p>Age: {props.friend.age}</p>
         <p>Email: {props.friend.email}</p>
      </div>
   );
};
export default Friend;
