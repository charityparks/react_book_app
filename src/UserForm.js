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
                    else if (values.email.length < 10) {
                        errors.email =  'Email address too short';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    else if (values.password.length < 8) {
                        errors.password = 'Password too short';
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
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default UserForm;