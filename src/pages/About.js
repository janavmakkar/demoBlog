import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <div class="jumbotron">
                <h1>About Me</h1>
                <p>...</p>
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
            <div className="space"></div>
            <Footer />
        </div>
    )
}

export default About
