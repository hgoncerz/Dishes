import React from "react";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-5">
        <h1 className="text-3xl font-bold">Add your dish</h1>
      </div>
      <Form />
    </div>
  );
};

export default App;
