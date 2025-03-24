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
                src="https://img.freepik.com/photos-gratuite/bouchent-portrait-belle-femme_23-2149150981.jpg?t=st=1742841527~exp=1742845127~hmac=276b3335b89875d95e9853178bc6c883482e6a449a8b5973c692f4eabe589e66&w=1480"  
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
