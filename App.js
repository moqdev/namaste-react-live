import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// // React Element Example C: Third Way
const Title = () => (
  <h1 id="title" key="h2">
    Food Villa App
  </h1>
);


const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React - Most commonly Used Syntax</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
