import React, { useState } from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";

const renderFieldSpiciness = ({
  type,
  label,
  input,
  meta: { touched, error },
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      {...input}
      type={type}
      min="1"
      max="10"
      className="myForm"
      required
    />
    {touched && error && <span>{error}</span>}
  </div>
);

const DishType = ({ foodState, renderField }) => {
  if (foodState === "pizza") {
    return (
      <div>
        <Field
          name="no_of_slices"
          label="Slice number"
          component={renderField}
          type="number"
        />
        <Field
          name="diameter"
          label="Diameter"
          component={renderField}
          type="number"
        />
      </div>
    );
  } else if (foodState === "soup") {
    return (
      <div>
        <Field
          name="spiciness_scale"
          label="Spiciness scale"
          component={renderFieldSpiciness}
          type="number"
        />
      </div>
    );
  } else if (foodState === "sandwich") {
    return (
      <div>
        <Field
          name="slices_of_bread"
          label="Number of slices"
          component={renderField}
          type="number"
        />
      </div>
    );
  }
};

export default DishType;
