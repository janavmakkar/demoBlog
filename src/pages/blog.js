import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import img from './components/assets/ml3.png';


export default function blog() {
    return (
        <div>
            <Navbar />
            <div class="jumbotron">
                <h1>My Blogs will come here!</h1>
                <p>...</p>

                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 1</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 2</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div> <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 3</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 1</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 2</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div> <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 3</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 1</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 2</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div> <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src={img} />
                            <div class="caption">
                                <h3>Thumbnail label 3</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate illum id fugit voluptas blanditiis minima molestias excepturi asperiores unde nihil quam ut, explicabo, aut dolor expedita, recusandae tempora. Delectus!</p>
                                <p><a href="#" class="btn btn-primary" role="button">Read</a> </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
            <div className="space"></div>
            <Footer />
        </div>
    )
}
