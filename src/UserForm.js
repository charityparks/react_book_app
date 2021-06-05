import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Any place in your app!</h1>
                <Formik
                initialValues={ { email: '', password: '' }}
                validate={values => {
                    
                }}
            </div>
        )
    }
}