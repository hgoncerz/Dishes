import React, { useState } from "react";
import DishType from "./DishType";
// import { createStore, combineReducers } from "redux";
import { reduxForm, Field, SubmissionError } from "redux-form";

async function submitToServer(data) {
  try {
    let response = await fetch(
      "https://frosty-wood-6558.getsandbox.com:443/dishes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}

const submit = ({
  name = "",
  preparation_time = "",
  type = "",
  no_of_slices = 0,
  diameter = 0,
  spiciness_scale = 0,
  slices_of_bread = 0,
}) => {
  let error = {};
  let isError = false;

  if (name.trim() === "") {
    error.name = "Required";
    isError = true;
  }
  if (preparation_time.trim() === "") {
    error.preparation_time = "Required";
    isError = true;
  }
  if (type.trim() === "") {
    error.type = "Required";
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    //submit form

    if (type === "soup") {
      spiciness_scale = Number(spiciness_scale);
      if (spiciness_scale === 0) {
        error.type = "Required";
        isError = true;
      } else {
        return submitToServer({
          name,
          preparation_time,
          type,
          spiciness_scale,
        }).then((data) => {
          if (data.errors) {
            throw new SubmissionError(data.errors);
          } else {
            console.log("server added data to database");
            console.log(data);
          }
        });
      }
    } else if (type === "pizza") {
      no_of_slices = Number(no_of_slices);
      diameter = parseFloat(diameter);
      if (no_of_slices === 0 || diameter === 0) {
        error.no_of_slices = "Required";
        error.diameter = "Required";
      } else {
        submitToServer({
          name,
          preparation_time,
          type,
          no_of_slices,
          diameter,
        }).then((data) => console.log(data));
      }
    } else if (type === "sandwich") {
      slices_of_bread = Number(slices_of_bread);

      if (slices_of_bread === 0) {
        error.slices_of_bread = "Required";
      } else {
        submitToServer({
          name,
          preparation_time,
          type,
          slices_of_bread,
        }).then((data) => console.log(data));
      }
    }
  }
};

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input {...input} type={type} className="myForm" required />
    {touched && error && <span className="text-red-400">{error}</span>}
  </div>
);

const renderFieldTime = ({ type, label, input, meta: { touched, error } }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input {...input} type={type} step="1" className="myForm" required />
    {touched && error && <span className="text-red-400">{error}</span>}
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
