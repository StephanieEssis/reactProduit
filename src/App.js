import React from "react";
import { Card } from "react-bootstrap";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const userName = "Sarah"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <div className="container mt-5">
      <Card style={{ width: "18rem", textAlign: "center", margin: "auto" }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <div className="text-center mt-3">
        <h3>Bonjour, {userName ? userName : "!"}</h3>
        {userName && <img 
                src="https://img.freepik.com/photos-gratuite/jeune-femme-heureuse-isolee_171337-1371.jpg?t=st=1742821048~exp=1742824648~hmac=2bc30e02d9fc0f74bcd5e979f716d821347c2eac1b90da8f162e798ff5d75757&w=1480"
                 alt=""
                className="styleUserImage"
                width="200" 
  height="200" 
              />}
      </div>
    </div>
  );
}

export default App;
