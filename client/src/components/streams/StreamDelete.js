import React from 'react';
import Modal from '../Modal';
import {Link} from 'react-router-dom';
import history from '../../history';
import {connect} from 'react-redux';
import {deleteStream, fetchStream} from '../../actions'

class StreamDelete extends React.Component {

    componentDidMount = () =>{
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        return (  
            <React.Fragment >
                <button onClick={()=> this.props.deleteStream(this.props.match.params.id)}className="ui negative button">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </React.Fragment>
        )

    }

    renderContent = () =>{
        if(!this.props.stream){
            return "Are you sure you want to delete the stream ?"
        }
        return `Are you sure you want to delete the greeting ${this.props.stream.title}?`
    }
    render(){
        return (
            <Modal
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={()=> history.push('/Greeting/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream} )(StreamDelete);