import React, {useState} from "react";
import contacts from "../data";
import Card from "./Card";



function Directory(props){
    function mapContacts(cardsToMap){
        return cardsToMap.map((contact) =>(
          <Card name={contact.name} img={contact.picture} phone={contact.phone}/>
        ));
      }
    
    
      const [filterString, setFilterString]=useState("");
      var filteredContacts=contacts.filter((contact)=>{
        return contact.name.toLocaleLowerCase().includes(filterString.toLowerCase());
      });
    
    
      var result=contacts.reduce(
        (result, {name, age})=>{
          result.concatName=result.concatName + "-" + name;
          result.ageTotal=result.ageTotal + age;
          return result;
      }, 
        { concatName: "", ageTotal: 0}
      );
    
    
      var cards=(filteredContacts.length>0) ? mapContacts(filteredContacts): mapContacts(contacts);
    
    
      function filterListener(event){
        console.log(event.target.value);
        setFilterString(event.target.value);
        console.log("Filter: " + filterString);
      }

      function logOut(){
        props.listener();
      }

    return(
        <div>
            <div>
                <button onClick={logOut}>Log Out</button>
            </div>
            <div>
                <input 
                type="text" 
                placeholder='Search' 
                onChange={filterListener}
                value={filterString}
                />
            </div>
            {cards}
        </div>
    )
}

export default Directory;