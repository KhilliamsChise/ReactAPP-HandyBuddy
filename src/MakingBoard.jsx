import React, { useState } from "react";
import DatePicker from "./DatePicker";

function MakingBoard(props) {

    const [contentInputObj, setContent] = useState({title: "", dateMB: "", content:""});



    function handleChange(event) {
        const {name, value} = event.target;
        setContent(prevContentInputObj => {
            return {
                ...prevContentInputObj, [name]: value
            }
        })
    }

    function submitHit(e){
        props.propAddContent(contentInputObj)

        setContent({title: "", dateMB: "", content:""});

        e.preventDefault();
    }

    //date hook back funtion
    function addDate(date){
        setContent(prevContentInputObj => {
            return {
                ...prevContentInputObj, dateMB: date
            }
        })
    }



    return (
        <div>
            <form>
                <input className="titleInput" name="title" onChange={handleChange} value={contentInputObj.title} placeholder="Title" />
                <DatePicker addDateProp={addDate} />
                <textarea name="content" onChange={handleChange} value={contentInputObj.content} placeholder="Note down something here..." rows="5" />
                <button className="paperSubmit" onClick={submitHit} > +</button>
            </form>
        </div>


    );
}
export default MakingBoard;