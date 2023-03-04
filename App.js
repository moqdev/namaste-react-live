import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

//COMPONENTS:
// React Component is a function that returns a React Element.
// Functional Component:
// - is a function that returns a React Element/JSX.

//refactored HeaderComponent to arrow function.
//code contains multiple lines, wrap in parenthesis ();
// refactor code, remove return keyword and curly braces.
const HeaderComponentBest = () => (
  <div>
    <h1>Namaste React Functional Component</h1>
    <h2>This is a h2 tag</h2>
  </div>
);

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

// When Composing COMPONENT COMPOSITION: with Functional Components remember to capatalize the first letter of the component.
// to render using tag: root.render(<HeaderComponent />);
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// WHAT IS A COMPONENT COMPOSITION: REFERENCING COMPONENTS WITH "tag html style" --> <Title />
// When referencing any components, Functional, Class-based Components etc:
// reference it by the "tag html style" --> <Title />
<Title />;

// Using COMPONENT COMPOSITION <Title />> in your Functional Component use it as a < /tag> :
const HeaderComponent2 = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React Functional Component with Title Tag 🤪</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// Use another method without using Title as a tag, instead as a function:
const HeaderComponent4 = () => {
  return (
    <div>
      {Title()}
      <h2>
        Namaste React - this is your Title Function in your Functional Component
        🙃
      </h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// When you writing JSX you just need to put {}
// then you can write any piece of javascript code inside it!
var xyz = 1786;
const HeaderComponent3 = () => {
  return (
    <div>
      {xyz}
      <h2>
        {" "}
        😀 Namaste React - you can write any piece of javascript code inside
        your curly braces 🤯
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing react element to root
//async defer

// To render Functional Component:
root.render(<HeaderComponent3 />);

// To render JSX/React Element:
// root.render(heading);
