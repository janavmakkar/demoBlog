import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { event } from 'jquery';

export default function Register() {

    const dispErr = () => {
        alert('Just Looking For Error')
    }
    const dispErr2 = (value) => {
        alert(`I said ${value}`)
    }
    const [name, setName] = useState('');
    function abc() {
        alert(name);
    }

    return (
        <div>
            <Navbar />
            <div className="col-lg-12">
                <center><h1 contentEditable="true">Register with Us</h1></center>

                <div className=" col-lg-offset-4 col-lg-4 register">
                    <form action="" className="form">
                        <div className="form-group">
                            <label >Name 👨‍🚀</label>
                            <input autoComplete="false" onChange={(event) => { setName(event.target.value) }} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label >Email📧</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password 🔑 </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label >Phone Number📞</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control" value='Submit' />
                            <br />
                            <button onClick={abc}>Display Name</button>
                            <br />
                            <button onClick={() => dispErr2('hello')}>Submit with input value</button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}
