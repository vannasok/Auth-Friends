import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateFriendState, removeFriend } from '../actions';

import { Card, Grid, Button } from 'semantic-ui-react';

const FriendCard = ({ friend, updateFriendState, removeFriend }) => {
   return (
      <Grid.Column>
         <Card>
            <Card.Content>
               <Card.Header>{friend.name}</Card.Header>
               <Card.Meta>{friend.email}</Card.Meta>
               <Card.Description>Age: {friend.age}</Card.Description>
            </Card.Content>

            <Card.Content extra>
               <Button
                  as={Link}
                  to='/update-friend'
                  onClick={() => updateFriendState(friend)}
                  color='#ccc'>
                  Update
               </Button>
               <Button
                  className='ui right floated'
                  onClick={() => removeFriend(friend)}
                  color='red'>
                  Remove
               </Button>
            </Card.Content>
         </Card>
      </Grid.Column>
   );
};

export default connect(
   null,
   { updateFriendState, removeFriend }
)(FriendCard);
