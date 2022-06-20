import React, { useState } from "react";

const DishType = ({ foodState }) => {
  if (foodState === "pizza") {
    return (
      <div>
        <label htmlFor="no_of_slices">Slice number</label>
        <input type="number" id="no_of_slices" name="no_of_slices" required />
        <label htmlFor="diameter">Diameter</label>
        <input
          type="number"
          step="0.1"
          id="diameter"
          name="diameter"
          required
        />
      </div>
    );
  } else if (foodState === "soup") {
    return (
      <div>
        <label htmlFor="spiciness_scale">Spiciness scale</label>
        <input
          type="number"
          min="1"
          max="10"
          id="spiciness_scale"
          name="spiciness_scale"
          required
        />
      </div>
    );
  } else if (foodState === "sandwich") {
    return (
      <div>
        <label htmlFor="slices_of_bread">Number of slices</label>
        <input
          type="number"
          id="slices_of_bread"
          name="slices_of_bread"
          required
        />
      </div>
    );
  }
};

export default DishType;
