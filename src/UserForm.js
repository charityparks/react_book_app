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
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }   else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type=
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}