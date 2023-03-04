import React from "react";
import ReactDOM from "react-dom/client";

//COMPONENTS:
// React Component is a function that returns a React Element.
// Functional Component:
// - is a function that returns a React Element/JSX.

//refactored HeaderComponent to arrow function.
//code contains multiple lines, wrap in parenthesis ();
// refactor code, remove return keyword and curly braces.
// const HeaderComponentBest = () => (
//   <div>
//     <h1>Namaste React Functional Component</h1>
//     <h2>This is a h2 tag</h2>
//   </div>
// );

// Insert React Elelment in your Functional Component:
// This is your React Element.
const heading = (
  <h1 id="title" key="h2">
    Namaste React - this is your React Element
  </h1>
);

// Put curly braces inside your Functional Component.
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h2>Namaste React - this is your Functional Component 🤩</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// with Functional Components remember to capatalize the first letter of the component.
// to render using tag: root.render(<HeaderComponent />);
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

//To put Title in your Functional Component use it as a < /tag> :
const HeaderComponent2 = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React Functional Component with Title Tag 🤪</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing react element to root
//async defer

// To render Functional Component:
root.render(<HeaderComponent2 />);

// To render JSX/React Element:
// root.render(heading);
