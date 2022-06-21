import React, { useState } from "react";

const DishType = ({ foodState }) => {
  if (foodState === "pizza") {
    return (
      <div>
        <label
          htmlFor="no_of_slices"
          className="block text-sm font-medium text-gray-700"
        >
          Slice number
        </label>
        <input
          type="number"
          id="no_of_slices"
          name="no_of_slices"
          required
          className="myForm"
        />
        <label
          htmlFor="diameter"
          className="block text-sm font-medium text-gray-700"
        >
          Diameter
        </label>
        <input
          type="number"
          step="0.1"
          id="diameter"
          name="diameter"
          required
          className="myForm"
        />
      </div>
    );
  } else if (foodState === "soup") {
    return (
      <div>
        <label
          htmlFor="spiciness_scale"
          className="block text-sm font-medium text-gray-700"
        >
          Spiciness scale
        </label>
        <input
          type="number"
          min="1"
          max="10"
          id="spiciness_scale"
          name="spiciness_scale"
          required
          className="myForm"
        />
      </div>
    );
  } else if (foodState === "sandwich") {
    return (
      <div>
        <label
          htmlFor="slices_of_bread"
          className="block text-sm font-medium text-gray-700"
        >
          Number of slices
        </label>
        <input
          type="number"
          id="slices_of_bread"
          name="slices_of_bread"
          required
          className="myForm"
        />
      </div>
    );
  }
};

export default DishType;
