//Home page content


import { Link } from "react-router-dom";

function Home (){
    return(         //Routes to different pages below
        <div class="HomeDiv">
            <h1 style={{marginTop:"300px"}}>Hello there, Welcome!</h1>
            <div class="linkDiv" style={{marginTop:"30px", display:"flex"}}>
                <div class="link" style={{padding:"15px", fontSize:"20px"}}>
                    <Link class="nav-link active"  to="/">Home</Link>
                </div>
                <div class="link" style={{padding:"15px", fontSize:"20px"}}>
                    <Link class="nav-link active"  to="/jot">Begin</Link>
                </div>
                <div class="link" style={{padding:"15px", fontSize:"20px"}}>
                    <Link class="nav-link active" to="/about">About</Link>
                </div>
             </div>
        </div>
    )
}

export default Home;