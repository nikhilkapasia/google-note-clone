import React from "react";
import "./App.css";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function Note(props) {
    const [expand, setexpand] = useState(false)
  const [note, setnote] = useState({
    tittle:"",
    content:"",
  });
  
  const Inputuser =(event)=>{
//    const name =vent.target.name
//    const value =vent.target.value
    const{ name, value}= event.target
      setnote((data)=>{
          return{
              ...data, 
              [name]: value,
          };

      });
  };
  const addevent =()=>{
props.passnote(note);
setnote({
    tittle:"",
    content:"",
  });
  }

 const expandit=()=>{
    setexpand(true)
}

  return (
    <div>
      <div className="paper">
        <div elevation={8} style={{ width: 280, height: 250 ,display:"inline-block" }}>
          <form>
              {expand ?
            <input
              type="text"
              name="tittle"
              value ={note.tittle}
              onChange={Inputuser}
              placeholder="Title"
              autoComplete="off"
              className="inputa"
            ></input> :null}
            <textarea
            name="content"
            value ={note.content}
            onChange={Inputuser}
            onClick={expandit}
              rows=""
              column=""
              placeholder="write new note "
              className="texta"
              
            />
            {expand ?
            <Button variant="contained"  onClick={addevent} className="button">
              add
            </Button> :null}
          </form>
        </div>
      </div>
    </div>
  );
}
