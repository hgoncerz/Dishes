import React, { useState } from "react";
import DishType from "./DishType";
// import { createStore, combineReducers } from "redux";
import { reduxForm, Field } from "redux-form";

const submit = (value) => {
  console.log(value);
};

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input {...input} type={type} className="myForm" />
    {touched && error && <span>{error}</span>}
  </div>
);

const renderFieldTime = ({ type, label, input, meta: { touched, error } }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input {...input} type={type} step="1" className="myForm" />
    {touched && error && <span>{error}</span>}
  </div>
);

const Form = ({ handleSubmit }) => {
  const [foodState, setFoodState] = useState("pizza");
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <div>
              <Field
                name="name"
                label="Dish Name"
                component={renderField}
                type="text"
              />
            </div>
            <div>
              <Field
                name="preparation_time"
                label="Preparation time"
                component={renderFieldTime}
                type="time"
                step="1"
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Dish type:
              </label>
              <div>
                <Field
                  onChange={(e) => {
                    const selectedFood = e.target.value;
                    setFoodState(selectedFood);
                  }}
                  name="type"
                  component="select"
                  className="myForm"
                >
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="sandwich">Sandwich</option>
                </Field>
              </div>
            </div>
            <DishType foodState={foodState} renderField={renderField} />
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 mt-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add dish
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default reduxForm({
//   form: "dish-form",
// })(Form);

export default reduxForm({
  form: "my-form",
})(Form);
