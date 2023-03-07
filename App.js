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

// Build the layout.
// Step 1. Create your AppLayout, list it out. 

const AppLayout = () => {
  return (
    { 
      /**
    Header
      - Logo
      - Nav Items (Right Side)
      - Cart
    Body 
     - Search Bar
      - List of Restaurants
       - Restaurant Card
        - Image
        - Name
        - Rating
        - Price
        - Cusines
    Footer
     - links
     - copyrights
  */ 
 
    }
  );












const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
