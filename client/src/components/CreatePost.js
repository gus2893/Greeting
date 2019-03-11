import React from 'react';
import { Image, Modal } from 'semantic-ui-react';
import StreamForm from './streams/StreamForm';
import {connect} from 'react-redux';
import {createStream} from '../actions';
import Geocode from "react-geocode";

class CreatePost extends React.Component {
    state= {userLocation : null}

    componentDidMount= () =>{
      Geocode.setApiKey("AIzaSyCvgu5XGtZ0yFbFsKMAu2LkTN7BusufKoU");
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
            response => {
              console.log(response);
            this.setState({userLocation: response.results[6].formatted_address});
            },
            error => {
              console.error(error);
            }
          );
        },
        err => console.log(err)
      );

    }
    
    onSubmit = formProps =>{
        this.props.createStream(formProps,this.props.imgToShow, this.state.userLocation);
    }

    render(){
        
        return(
            <>
            <Modal open={this.props.showModal} closeIcon onClose={this.props.closeModal}>
            <Modal.Header>Do you want to post this photo?</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={this.props.imgToShow} />
              <Modal.Description>
                    <StreamForm onSubmit={this.onSubmit}/>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          </>
        )
    }

}
export default connect(null, {createStream})(CreatePost);