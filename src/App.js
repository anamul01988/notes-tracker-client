import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import InputForm from "./components/inputForm/InputForm";
import NoteCard from "./components/noteCard/NoteCard";
import { useEffect, useState } from "react";



function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {

  //  fetch("notes.json")
   fetch("http://localhost:4000/notes")
   .then(res=>res.json())
   .then(data=>setNotes(data))
  //  .then(data=>console.log(data))

    
  }, []);
  /*
1. here there will be a function named handleSearch
to handle search by query, and it will be passed as props to header

  */
  
const handleSearch =(event) =>{
  event.preventDefault();
  const queryText = event.target.searchText.value;
  // console.log('hellow',queryText)
  if(queryText){
    fetch(`http://localhost:4000/notes?userName=${queryText}`)
    .then(res=>res.json())
    .then(data=>setNotes(data));
  }

}





  
/*2. here there will be a function named handleDelete
to delete a note, and it will be passed as props to NoteCard that will be triggered using delete button.
 */











  /*
3. there will be a function named handleUpdate
    to update data, and it will be passed as props to NoteCard and 
   later it will be passed to Update modal using props.
 */



   



  /*
4.  there will be a function named handlePost
to post data to backend, and it will be passed as props to InputFrom.
 */

  

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <InputForm />
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        {notes.map((note) => (
          <NoteCard
            note={note}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
