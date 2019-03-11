import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import Camera,{ FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CreatePost from './CreatePost';
import '../index.css';
import {connect} from 'react-redux';
import history from '../history';

class CameraComponent extends Component {
    state = {showModal: false, imgUri: null}

      componentDidUpdate = () =>{
        if(this.props.isSignedIn === false){
          history.push('/');
        }
      }

      closeModal = () =>{
        this.setState({showModal: false});
      }

      takePhoto = dataUri =>{
        this.setState({showModal: true});
        this.setState({imgUri: dataUri});
      }
      onCameraError = error =>{
        console.log(error);
      }
    
      render () {

        return (
          <>
          <Container textAlign="center">
            <Camera
               onTakePhoto = { (dataUri) => { this.takePhoto(dataUri); }}
               isImageMirror = {true}
               imageCompression = {0.05}
               onCameraError = { (error) => { this.onCameraError(error); } }
               idealFacingMode = {FACING_MODES.USER}
               isFullscreen = {true}
               sizeFactor = {1}
            />
            </Container> 
            <CreatePost 
            showModal={this.state.showModal} 
            imgToShow={this.state.imgUri}
            closeModal={this.closeModal}/>
         </> 
        );
      }
    }
    
    const mapStateToProps = state =>{
      return {isSignedIn: state.userInfo.isSignedIn};
    }

export default connect(mapStateToProps)(CameraComponent);