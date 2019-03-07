import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'semantic-ui-react';



class StreamForm  extends React.Component {

    renderError = ({error, touched}) => {
        if(error && touched){
            return (
                <div className='ui error message'>
                    <div className ='header'>{error}</div>
                </div>
            )
        }

    }
    renderInput = ({input, label, meta}) =>{
        const className = `field ${meta.error && meta.touched ? 'error': ''}`        
        return(
            <div className={className}>
            <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formProps =>{
        this.props.onSubmit(formProps);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}className='ui form error'>
                <Field name='title' component={this.renderInput} label='Enter TItle'/>
                <Field name='description' component={this.renderInput} label='Enter Description'/>
                <Button primary> Submit</Button>
            </form>
        );
    }
    
}

const validate = formProps =>{
    const errors = {};
    if(!formProps.title){
        errors.title ='You must enter a title';
    }
    if(!formProps.description){
        errors.description ='You must enter a description';
    }
    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);


