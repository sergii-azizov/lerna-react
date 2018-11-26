import { Component } from "react";
import { loadModule } from 'core';


export default class AboutUs extends Component {
    render() {
        const AboutUs = loadModule()('about-us');

        return (
            <div>
                22
                <AboutUs />
            </div>
        );
    }
}

