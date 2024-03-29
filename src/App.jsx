import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HeadingBar from './Heading';
import StickyFooter from './Footer';
import MakingBoard from './MakingBoard';
import PaperCard from './PaperCard';


function App(){

    const [paper, setPaper] = useState([]);

    //hook the inputted contented object
    function hookContentMB(contentInputObj) {
        
        setPaper(prevPaper => {
           return [...prevPaper, contentInputObj];
        })
    }

    //
    function deletePaper(id) {
        setPaper(prevPaper =>{
           return prevPaper.filter((eachInputObj, index) => {
                return index !== id;
            })
        })
    }

    return(
        <div className='app'>
        <HeadingBar />

        <MakingBoard propAddContent = {hookContentMB} /> {/*data in*/}
            <div className='paperCardDisplayDiv'>
            {
                paper.map( (eachInputObj, index) => {
                return <PaperCard 
                        key={index}
                        id={index}
                        title={eachInputObj.title} 
                        date={eachInputObj.dateMB} 
                        content={eachInputObj.content} 
                        pDelete={deletePaper} />
                })
            }
            </div>
        <StickyFooter />
        </div>
    )
}

export default App;