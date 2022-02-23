import React from 'react'
import img1 from './assets/web2.jpg';
import img2 from './assets/ml.jpg';
import img3 from './assets/ard.jpg';
import img4 from './assets/pl.jpg';
import img5 from './assets/oth.jpg';


export default function HomeCarousel() {
    return (
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner">
                <div class="item active">
                    <img src="https://picsum.photos/1900/400" />
                    <div class="carousel-caption">
                        <h3>Web Technologies</h3>
                        <p>HTML, CSS, JS, Bootstrap, React js, Node, MongoDB, FullStack Dev</p>
                    </div>
                </div>

                <div class="item">
                    <img src={img2} />
                    <div class="carousel-caption">
                        <h3>Machine Learning</h3>
                        <p> From linear Regression till deep dive in Deep-Learning</p>
                    </div>
                </div>

                <div class="item">
                    <img src={img3} />
                    <div class="carousel-caption">
                        <h3>Arduino</h3>
                        <p>IOT, Arduino programming and micro-Controllers</p>
                    </div>
                </div>
                <div class="item">
                    <img src={img4} />
                    <div class="carousel-caption">
                        <h3>Programming Languages</h3>
                        <p>C/C++, Python, Java, JavaScript, HTML/CSS</p>
                    </div>
                </div>
                <div class="item">
                    <img src={img5} />
                    <div class="carousel-caption">
                        <h3>Other Essentials</h3>
                        <p>AWS, Git, Github/Bitbucket</p>
                    </div>
                </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
