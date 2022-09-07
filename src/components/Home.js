import React from "react";
import headshot from '../assets/photos/headshot.png';
const Home = () => {
    return (
        <>
            <div className="sections" id="sectionOne">
                <h1 className="heroText">Elevate your production.</h1>
            </div>
            <div className="sections" id="sectionTwo">
                <div className="row h-100">
                    <div className="col-6" style={{display: 'flex'}}>
                    <div id="headshot"/>
                    </div>
                    <div className="col-6" style={{ display: 'flex'}}>
                    <div className="textArea">
                            <h4>Extraordinary Production Level</h4>
                            <h1>Increase your production output by increasing your production capacity.</h1>
                            <p style={{fontSize: 19}}>Partner with state of the art engineering and professional execution to take your venue to the next level visually. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sections" id="sectionThree"></div>
        </>
    );
}
export default Home;