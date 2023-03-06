import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// React Element Example A: (varible --> title must be lowercase)
const title = (
  <h1 id="title" key="h2">
    Food Villa
  </h1>
);

//Must use curly braces and title must be lowercase
const HeaderComponent = () => {
  return (
    <div>
      {title}
      <h2>Namaste React</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// CAN YOU JUST USE REACT IN YOUR FOOTER ONLY? YES! --> By your "root".
// Change the root to "footer" and it will only render in the footer.
// AND In index.html change the id="root" to id="footer"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent2 />);
