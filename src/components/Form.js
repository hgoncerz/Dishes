import React, { useState } from "react";
import DishType from "./DishType";
// import { createStore, combineReducers } from "redux";
// import { reduxForm, Field } from "redux-form";

const Form = () => {
  const [foodState, setFoodState] = useState("pizza");
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form action="">
          <div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Dish Name:
              </label>
              <input
                type="text"
                placeholder="Enter dish"
                id="name"
                name="name"
                required
                className="myForm"
              />
            </div>
            <div>
              <label
                htmlFor="preparation_time"
                className="block text-sm font-medium text-gray-700"
              >
                Preparation time:
              </label>
              <input
                type="time"
                step="1"
                id="preparation_time"
                name="preparation_time"
                required
                className="myForm"
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Dish type:
              </label>
              <select
                onChange={(e) => {
                  const selectedFood = e.target.value;
                  setFoodState(selectedFood);
                }}
                id="type"
                name="type"
                required
                className="myForm"
              >
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
              </select>
            </div>
            <DishType foodState={foodState} />
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

export default Form;
