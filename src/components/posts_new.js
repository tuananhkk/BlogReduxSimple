import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    
    
    renderField(field) {
        const {input, label, type, placeholder, meta:{ touched, error }} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;   

    
        return (
            <div className={className}>
                <label>{label}</label>
                    <input 
                        className='form-control'
                        {...input}
                        placeholder={placeholder}
                        type={type}
                    />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
    
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
        
    }
    
    render() {
        const { handleSubmit, reset, pristine, submitting } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name='title'
                    label='Title for your Post'
                    placeholder='Title'
                    component={this.renderField}
                    type='text'
                />
                
                <Field
                    name='userId'
                    label='Your User ID (1-10)'
                    placeholder='1'
                    component={this.renderField}
                    type='text'
                />
                
                <Field
                    name='body'
                    label='Content'
                    placeholder='Content of the Post'
                    component={this.renderField}
                    type='text'
                />
                
                <div>
                    <button type='submit' disabled={submitting} className='btn btn-primary'>Submit</button>
                    <button type='button' disabled={ pristine || submitting } className='btn btn-info' onClick={reset}>Clear</button>
                    <Link to='/' className='btn btn-danger'>Cancel</Link>
                </div>
                
            </form>
        );
    }
}


function validate(values) {
    const errors = {};
    
    if(!values.title) {
        errors.title = 'Please enter post title';
    }
    
    if(!values.body) {
        errors.body = 'Please enter post content';
    }
    
    if(!values.userId) {
        errors.userId = 'Please enter your User ID';
    }
    
    return errors;
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPost }, dispatch);
} 

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})
(connect(null, mapDispatchToProps)(PostsNew));