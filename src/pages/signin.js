import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import LoginForm from '../components/LoginForm/LoginForm';
import './signin.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {
    let navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const adminUser = {
        name: "admin",
        password: "password"
    }

    const [user, setUser] = useState({name: "", password: ""});
    const [error, setError] = useState(" ");

    const Loginin = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in");
            setUser({
                name: details.name,
                password: details.password
            })
        } else {
            console.log("AKUN SALAH");
            setError("AKUN SALAH");
        }
    }

    const Logout = () => {
        setUser({ name: "", email: ""});
    }
    
    const pindah = () => {
        navigate("/rekomendasi")
    }

    return (
        <>
            {(user.name != "") ? (
                <div className='loginberhasil'>
                {MySwal.fire({
                    title: 'Berhasil',
                    text: 'Anda akan diteruskan ke laman',
                    icon: 'success',
                    }).then(() => {
                        () => pindah();
                    })
                }
                </div>
            ) : (
                <LoginForm Login={Loginin} error={error} />
            )}
        </>
    )
}

export default Login