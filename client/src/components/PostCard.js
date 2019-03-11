import React from 'react'
import { Card, Icon, Image, Divider } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class PostCard extends React.Component {

  renderDelete(){
    if(this.props.owner){  
      return(
      <Link to={`/Greeting/delete/${this.props.id}`}className="ui button negative" >
        Delete
      </Link>
      )      

    }
  }

  renderLocation(){
   if(this.props.userLocation){
    return this.props.userLocation;
   }
    
  return "Unknown Location";

  }

  render(){
    return(
      <Card>
      <Image src={this.props.imgUri} />
      <Card.Content>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{this.props.currentTime}</span>
        </Card.Meta>
        <Card.Description>{this.props.message}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name='globe' />
          {this.renderLocation()}
        </div>
        <Divider/>
          {this.renderDelete()}
      </Card.Content>
    </Card>

    )
  }
 
}

export default PostCard;
