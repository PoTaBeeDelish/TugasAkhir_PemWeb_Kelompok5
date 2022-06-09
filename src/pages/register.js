import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from './signin.js';
import './register.css';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    return (
        <>
            {info ? <div className='div-signin'> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3><br></br>

                <div className="">
                    <input type="text" className="form-control" placeholder="Enter Username..." name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="">
                    <input type="email" className="form-control" placeholder="Enter email..." onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="">
                    <input type="password" className="form-control" placeholder="Enter password..." onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit" className="">Register</button>

                {flag &&
                    <Alert color='primary' variant="danger" >
                        Mohon lengkapi semua terlebih dahulu
                </Alert>
                }

                <div>
                    <br></br><a href='./signin'>Sign In</a>
                </div>

            </form> : <Login />}
            </div> : <div></div>
            }
        </>
    )
}

export default Register;