import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Login() {
    return (
        <div>
            <Navbar />
            <div className="col-lg-12">
                <center><h1 >Login Back</h1></center>
                <div className=" col-lg-offset-4 col-lg-4 register">
                    <form action="" className="form">
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label >Password</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="form-control" value='Submit' />
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
