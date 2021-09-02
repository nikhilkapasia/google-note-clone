import React from 'react';
import './App.css';
import Header from './header';
// import Footer from './Footer';
import Yournotes from './Yournotes';
import Note from './Note';
import {useState} from "react"


function App() {
  const [additem, setadditem] = useState([])
  const addnote=(note)=>{
   alert("Note Added")
   setadditem((data)=>{
     return[...data,note];
   })
  }
  const ondelete=(id)=>{
    setadditem((olddata)=>
      olddata.filter((current,index)=>{
        return index!==id;
      })
    )
  }

  return (
    <div className="App">
    <Header />
  
    <Note passnote={addnote}/>
   
  { additem.map((val,index)=>{
return  < Yournotes
     key={index}
     id={index}
     tittle={val.tittle}
     content={val.content}
     deleteitem={ondelete}
     />
    })}
   

    </div>
  );
}

export default App;
