// Mainkingboard component allow users create content for node and to-do list

import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import SwitchLabels from "./LabelSwitch";
import ItemList from "./ItemList";

function MakingBoard(props) {

    const [contentInputObj, setContent] = useState({switch: false, title: "", dateMB: "", content:[]});  // setup the state for contentInputObj which is a js object.


    //update obj (title): now layer change
    function handleChange(event) {          
        const {name, value} = event.target;
        setContent(prevContentInputObj => {
            return {
                ...prevContentInputObj, [name]: value
            }
        })
    }

    // update the input item and also add that to an array
    const [inputItem, setInputItem] = useState("")
    const [itemObj, setItemObj] = useState([])

    function handleItemChange(event) {
        const newItem = event.target.value;
        setInputItem(newItem)
    }
    function handleItemAdd(e){
            setItemObj(prevItemObj => {
                return [...prevItemObj,inputItem];
            });
            e.preventDefault();
            setInputItem("")
    }
    useEffect( () => {  // while itemObj is changed, it will also update in the top object array at the same time.
        setContent(prevContentInputObj => {
            return {
                ...prevContentInputObj, content: itemObj
            }
        })
    },[itemObj]);



    //submit obj
    function submitHit(e){
        props.propAddContent(contentInputObj)

        setContent({switch: contentInputObj.switch, title: "", dateMB: "", content:[]});
        setItemObj([])
        e.preventDefault();
    }

    //refresh
    function refreshItemMB(e){
        setContent({switch: contentInputObj.switch, title: "", dateMB: "", content:[]});
        setItemObj([])
        setInputItem("")
        e.preventDefault();
    }

    //refresh
    function refreshNoteMB(e){
        setContent({switch: contentInputObj.switch, title: "", dateMB: "", content:[]});
        setItemObj([])
        e.preventDefault();
    }

    //update obj: switch state hood back fn
    function addSwitchState(checked) {
        setContent(prevContentInputObj => {
            return {
                ...prevContentInputObj, switch: checked
            }
        });
        props.propHookSwitchState(checked);
    }


    //update obj: date hook back funtion
    function addDate(date){
        setContent(prevContentInputObj => {
            return {
                ...prevContentInputObj, dateMB: date
            }
        })
    }



    return (
        <div>
            <div className='labelSwitch' > 
            {/* rendering SwitchLabels component */}
            <SwitchLabels addSwitchProp={addSwitchState}/>
            </div>
            <form className="makingBoardForm">
                {/* a form to input title and date and content or item list */}
                <input className="titleInput" name="title" onChange={handleChange} value={contentInputObj.title} placeholder="Title" />
                <DatePicker addDateProp={addDate} />
                {!contentInputObj.switch?
                <div>
                    <button className="refreshButton" onClick={refreshNoteMB}>refresh</button>
                    <textarea name="content" onChange={handleChange} value={contentInputObj.content} placeholder="Note down something here..." rows="5" />
                </div>
                :
                <div>
                    <button className="refreshButton" onClick={refreshItemMB}>Refresh</button>
                    <button className="addItemButton" onClick={handleItemAdd}>Add Item</button>
                    
                    <textarea name="Item" onChange={handleItemChange} value={inputItem} placeholder="Jot down something here..." rows="3" /> 
                    <div>
                        {/* for each item in item array render ItemList component */}
                        {
                        contentInputObj.content.map( (eachItem, index) => {
                        return <ItemList 
                                key={index}
                                id={index}
                                items={eachItem} 
                                
                                />
                        })
                        }
                    </div>
                </div>
                }
                <button className="paperSubmit" onClick={submitHit} > + </button>
            </form>
        </div>


    );
}
export default MakingBoard;