import React from "react";
import PropTypes from "prop-types";

const Input = ({ labelFor, labelText, type, id, value, className, handleChange, required, hasLabel }) => (
    <div className="form-group">
        {hasLabel && <label htmlFor={labelFor}>{labelText}</label>}
        <input
            id={id}
            className={className}
            type={type}
            value={value}
            onChange={handleChange}
            required={required}
        />
    </div>
);
Input.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    labelFor: PropTypes.string,
    labelText: PropTypes.string,
    hasLabel: PropTypes.bool,
    required: PropTypes.bool
};
export default Input;
