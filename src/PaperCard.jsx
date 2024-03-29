import React from "react";

function PaperCard(props) {


    function clickDelete() {
        props.pDelete(props.id) /* a bit different, use <PaperCard outside component property as key */
    }


    return (
        <div className="paperCard"> 
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.content}</p>
            <button onClick={clickDelete}> Delete </button>
        </div>
    )
}

export default PaperCard;