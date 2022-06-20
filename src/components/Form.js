import React, { useState } from "react";
import DishType from "./DishType";
// import { createStore, combineReducers } from "redux";
// import { reduxForm, Field } from "redux-form";

const Form = () => {
  const [foodState, setFoodState] = useState("pizza");
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name">Dish Name:</label>
          <input
            type="text"
            placeholder="Enter dish"
            id="name"
            name="name"
            required
          />
          <label htmlFor="preparation_time">Preparation time:</label>
          <input
            type="time"
            step="1"
            id="preparation_time"
            name="preparation_time"
            required
          />
          <label htmlFor="type">Dish type:</label>
          <select
            onChange={(e) => {
              const selectedFood = e.target.value;
              setFoodState(selectedFood);
            }}
            id="type"
            name="type"
            required
          >
            <option value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwich">sandwich</option>
          </select>
          <DishType foodState={foodState} />
        </div>
      </form>
    </div>
  );
};

// export default reduxForm({
//   form: "dish-form",
// })(Form);

export default Form;
