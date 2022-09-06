import React from "react";

const Home = () => {
    return (
        <>
            <div className="sections" id="sectionOne"></div>
            <div className="sections" id="sectionTwo">
                <div className="row">
                    <div className="col-6" style={{backgroundColor: 'pink'}}><h1>Hello</h1></div>
                    <div className="col-6" style={{backgroundColor: 'green'}}><h1>World</h1></div>
                </div>
            </div>
            <div className="sections" id="sectionThree"><h1>Hello</h1></div>
        </>
    );
}
export default Home;