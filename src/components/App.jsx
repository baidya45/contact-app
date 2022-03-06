import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={Contacts[0].name}
        image={Contacts[0].imgURL}
        mob={Contacts[0].phone}
        mail={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        image={Contacts[1].imgURL}
        mob={Contacts[1].phone}
        mail={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        image={Contacts[2].imgURL}
        mob={Contacts[2].phone}
        mail={Contacts[2].email}
      />
    </div>
  );
}

export default App;
