import React from 'react'
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';



function Yournotes(props) {
    const deletenote=()=>{
        props.deleteitem(props.id)
    }
    return (
        <div className="yournotes">
            <h2 style={{color:"blue"}}>{props.tittle}</h2>
            <p style={{color:"brown"}}>{props.content}</p>
            <DeleteIcon  onClick={deletenote}/>
            </div>
      
    )
}

export default Yournotes
