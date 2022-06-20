import React from "react";

const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Dish Name:</label>
          <input type="text" placeholder="Enter dish" required />
          <label htmlFor="">Preparation time:</label>
          <input type="time" step="1" required />
          <label htmlFor="">Dish type:</label>
          <select>
            <option value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwich">sandwich</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
