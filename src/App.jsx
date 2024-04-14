//Our Main Application script

import React from 'react';
import HeadingBar from './Heading';
import StickyFooter from './Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MainApp from './MainApp';
import About from './About';

function App(){

    return(
    <Router>
        <div className='app'>
            <HeadingBar />
                <Routes> 
                {/* Component area that can switch to different pages */}
                    <Route path='/' element={<Home />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/jot' element={<MainApp />}/>
                    <Route path='/about' element={<About />}/>

                </Routes>

            <StickyFooter />
        </div>
    </Router>
    )
}

export default App;