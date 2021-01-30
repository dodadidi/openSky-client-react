import React, { Component } from 'react';
import cloud from '../Images/cloud.png'

//TODO: 1. FONT-SIZE - CSS
//      2. CLOUDS-SIZE - CSS

class Title extends Component {
    render() {
        return(
            <div className="d-flex justify-content-center title">
                    <div className="cloud top-cloud"><img src={cloud} alt="Cloud"/></div>
                    <div>
                        <h1>OpenSky</h1>
                        <h3>Find Your Next Trip</h3>
                    </div>
                    <div className="cloud bottom-cloud"><img src={cloud} alt="Cloud"/></div>
            </div>
        );
    }
}
export default Title;