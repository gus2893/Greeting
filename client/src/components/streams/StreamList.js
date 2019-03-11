import React from 'react';
import {connect } from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';
import { Container, Grid, Divider} from 'semantic-ui-react';
import PostCard from '../PostCard';

class StreamList extends React.Component{
    componentDidMount = () =>{
        this.props.fetchStreams();
    }

    renderAdmin = (stream) =>{
        if(stream.userId === this.props.currentUserId){
            return true;
        }

        return false;
    }

    renderCreate = () =>{
        if(this.props.isSignedIn){
            return (
                <div>
                    <Link to="/Greeting/new" className= "ui button primary">
                        Add a Greeting!
                    </Link>
                </div>
            )
        }
        
        return <h3>Sign in to add a Greeting!</h3>
    }

    renderList = () =>{
        return this.props.streams.map(stream =>{
            return (
            <div className="item" key={stream.id}>
                <PostCard 
                id={stream.id}
                imgUri={stream.imgUri} 
                name={stream.title}
                message={stream.description}
                userLocation={stream.userLocation}
                currentTime={stream.currentTime}
                owner={this.renderAdmin(stream)}
                />
                
                    
            </div>
            );
        })
    }


    render(){

        return (
            <Container textAlign="center">
                <h2>Greetings</h2>
                {this.renderCreate()}
                <Divider horizontal>Current Greetings</Divider>
                <br/>
                <Grid centered columns={1}>
                    {this.renderList()}
                </Grid>
                    
                
            </Container>
        )
    }
    
}

const mapStateToProps = state =>{
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.userInfo.userId,
        isSignedIn : state.userInfo.isSignedIn
    
    };
}

export default connect(mapStateToProps,{fetchStreams} )(StreamList);