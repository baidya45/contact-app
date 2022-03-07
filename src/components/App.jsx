import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function CreateCard(contact){
  return(
    <Card 
      key={contact.id}
       name={contact.name}
        image={contact.imgURL}
        mob={contact.phone}
        mail={contact.email}
    />
  )
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(CreateCard)};

      
    </div>
  );
}

export default App;
