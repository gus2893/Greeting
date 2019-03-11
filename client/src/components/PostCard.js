import React from 'react'
import { Card, Icon, Image, Divider } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const PostCard = props => (
  <Card>
    <Image src={props.imgUri} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.currentTime}</span>
      </Card.Meta>
      <Card.Description>{props.message}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>
        <Icon name='globe' />
        {props.userLocation}
      </div>
      <Divider/>
          <Link to={`/Greeting/delete/${props.id}`}className="ui button negative" display={false}>
              Delete
          </Link>   
    </Card.Content>
  </Card>
)

export default PostCard;
