import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function LoginForm({ Login, error}) {
	const [details, setDetails] = useState({name: "", password: ""})
	const [nama, setName] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = e =>{
		e.preventDefault();

		setDetails({nama, password});
		
		Login(details);

	}

	return (
		<Form className="d-grid gap-2" style={{margin:'15rem'}} onSubmit={submitHandler}>
			<Form.Label>Login</Form.Label>
			<Form.Group className="mb-3" controlId="formBasicDescription">
        		<Form.Control 	onChange={e => setName(e.target.value)} 
                      			type="text"
                      			placeholder="username" required/>
      		</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicDescription">
        		<Form.Control 	onChange={e => setPassword(e.target.value)} 
                      			type="password"
                      			placeholder="password" required/>
      		</Form.Group>
			<Button variant="primary" type="submit">
        		Submit
      		</Button>
		</Form>
	)
}

export default LoginForm;