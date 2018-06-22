import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import Input from "../presentational/Input";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //this.setState({ [event.target.id]: event.target.value });
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form id="article-form">
                <Input
                    id={this.props.id}
                    className={this.props.className}
                    type={this.props.type}
                    value={this.state.value}
                    handleChange={this.handleChange}
                    labelText={this.props.labelText}
                    labelFor={this.props.labelFor}
                    hasLabel={this.props.hasLabel}
                    required={this.props.required}
                />
            </form>
        );
    }
}

FormContainer.propTypes = {
    id: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hasLabel: PropTypes.bool.isRequired,
    required: PropTypes.bool.isRequired,
};

FormContainer.defaultProps = {
    id: 'id1',
    className: 'form-control',
    type: 'text',
    value: 'value',
    labelFor: '',
    labelText: 'text',
    hasLabel: true,
    required: false,
};

export default FormContainer;
