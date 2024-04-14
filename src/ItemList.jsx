//A component to be rendered that contains info and functions of a list of items for each paper

import React, { useState } from "react";

function ItemList(props) {

    const [done,setDone] = useState(false); // Done value will be changed when item got clicked.

    function handleClickItem(){             // Done value will be changed when item got clicked.
        setDone((prevDone) => {
            return !prevDone;
        });
    }

    return (                                // On this item gets toggled the line-through style on/ off when user clicks on the item
        <div onClick={handleClickItem}>
            <li style={{textDecoration: done ? "line-through":"none",  cursor: "pointer"}} >{props.items}</li>
        </div>
    );

}

export default ItemList;