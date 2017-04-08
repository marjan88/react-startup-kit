import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/";
import { connect } from 'react-redux';

class Signin extends Component {
    handleFormSubmit( {email, password}) {
        this.props.signinUser({email, password});
    }
    renderAlert() {
        if (this.props.errorMsg) {
            return (
                    <div class="alert alert-danger">
                        <strong>Error!</strong> {this.props.errorMsg}
                    </div>
                    );
        }
    }
    render() {
        const {handleSubmit, submitting} = this.props;

        return (
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>                
                    <Field name="email" component={renderField} label="Email"  type="text"/>
                    <Field name="password" component={renderField} label="Password" type="password" /> 
                    {this.renderAlert()}
                    <button action="submit" disabled={submitting} class="btn btn-primary">Signin</button>
                </form>
                )
    }
}
;

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
            <fieldset class="form-group">
                <label>{label}</label>                
                <input {...input} placeholder={label} type={type} class="form-control"/>
                {touched && ((error && <span class="help-block">{error}</span>) || (warning && <span class="help-block">{warning}</span>))}               
            </fieldset>
            );

const mapStateToProps = (state) => {    
    return {errorMsg: state.auth.error};
}

// Decorate the form component
Signin = reduxForm({
    form: 'signin',
    fields: ['email', 'password'],
    validate
})(Signin);

export default connect(mapStateToProps, actions)(Signin);