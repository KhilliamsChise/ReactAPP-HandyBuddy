// Main output for displaying paper including notes and to-do lists

import React from "react";
import ItemList from "./ItemList";


function PaperCard(props) {


    function clickDelete() {    // fucntion to send the paper id using props to parent component
        props.pDelete(props.id) /* a bit different, use <PaperCard outside component property as key */
    }


    return ( // render paper contents and ItemList components based on swithStatus value.

        !props.switchStatus ?
        //note
        <div className="paperCard"> 
            <h4 className="paperType">Note</h4>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.content}</p>
            <button onClick={clickDelete}> Delete </button>
        </div>
        :
        //to-do
        <div className="paperCard"> 
            <h4 className="paperType">To-do</h4>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <div className="paperCardListDiv">
            {
                props.content.map( (eachItem, index) => {
                return <ItemList 
                        key={index}
                        id={index}
                        items={eachItem} 
                        />
                })
            }
            </div>
            <button onClick={clickDelete}> Delete </button>
        </div>
        

    )
}

export default PaperCard;