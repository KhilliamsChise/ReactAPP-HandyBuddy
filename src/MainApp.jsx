// '/jot' page content - MainApp shows the structure of the app including making board section and paper display section

import React, { useState } from 'react';
import MakingBoard from './MakingBoard';
import PaperCard from './PaperCard';


function MainApp(){

    const [paper, setPaper] = useState([]);
    const [switchStatusApp, setSwitchStatusApp] = useState();
    //hook the inputted contented object

    function hookContentMB(contentInputObj) {       // for adding a contentInputObj from MakingBoard component to an array.
        setPaper(prevPaper => {
           return [...prevPaper, contentInputObj];
        }) 
    }

    //
    function deletePaper(id) {                      // to delete paper based on id.
        setPaper(prevPaper =>{
           return prevPaper.filter((eachInputObj, index) => {
                return index !== id;
            })
        })
    }
    //

    function hookCurrentSwitchStatus(checked) {         // return the current checked value to the state.
        setSwitchStatusApp(checked);
    }

    return(                         // rending MakingBoard components with props and PaperCard component for each paper object.
        <div className='app'>
            <MakingBoard propAddContent = {hookContentMB} propHookSwitchState = {hookCurrentSwitchStatus}/>  
            <div className='paperCardDisplayDiv'>
                {
                    paper.map( (eachInputObj, index) => {
                    return <PaperCard 
                            key={index}
                            id={index}
                            title={eachInputObj.title} 
                            date={eachInputObj.dateMB} 
                            content={eachInputObj.content} 
                            switchStatus={eachInputObj.switch}
                            pDelete={deletePaper} />
                    })
                }
            </div>
        </div>

    )
}

export default MainApp;