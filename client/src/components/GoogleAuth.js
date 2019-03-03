import React from 'react';
import { connect } from 'react-redux';
import {trySignIn, trySignOut, checkAuth} from '../actions';
import {Button, Icon } from 'semantic-ui-react';


class GoogleAuth extends React.Component{
    componentDidMount = () =>{
        this.props.checkAuth();
    }
    renderAuthButton= () => {
        if(this.props.userInfo.isSignedIn  === null){
            return null;  
        }else if(this.props.userInfo.isSignedIn){
            return(
                <Button onClick={this.props.trySignOut} icon labelPosition='left' color='red'   >
                    <Icon name='google'/>
                    Sign Out
                </Button>
            ) 
        }else{
            return(
                <Button onClick={this.props.trySignIn} icon labelPosition='left' color='red'   >
                    <Icon name='google'/>
                    Sign In
                </Button>
            ) 
        }
    }


    render(){
        return <div>{this.renderAuthButton()}</div>
    }
    
}

const mapStateToProps = state => {
    return { 
        userInfo : state.userInfo,
    }
}

export default connect(mapStateToProps, {trySignIn, trySignOut, checkAuth }) (GoogleAuth);