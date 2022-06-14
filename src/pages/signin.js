import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

        if (details.nama == adminUser.name && details.password == adminUser.password) {
            console.log("Logged in");
            sessionStorage.setItem("name", details.name);
            setUser({name: details.name})
        } else {
            {MySwal.fire({
                icon: 'error',
                title: 'AKUN SALAH'
            })}
        }
    }
    
    const pindah = () => {
        navigate(-1);
    }

    return (
        <>
            {(user.name != "") ? (
                <div className='loginberhasil'>
                {MySwal.fire({
                    title: 'Berhasil',
                    text: 'Anda akan diteruskan ke laman rekomendasi',
                    icon: 'success',
                    }).then((result) => {
                        if(result.isConfirmed){
                            pindah();
                        }
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