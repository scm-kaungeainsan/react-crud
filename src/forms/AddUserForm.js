import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import {Row, Col} from 'react-foundation';
import './form.css';
import { useHistory } from 'react-router-dom';

const AddUserForm = props => {
	const history = useHistory();
	// const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });
	// const initialFormState = { id: null, name: '', username: '',
	// formErrors: {email: '', password: ''},
	// emailValid: false,
	// passwordValid: false,
	// formValid: false
	// }
	// const [ user, setUser ] = useState(initialFormState)

	// const handleInputChange = event => {
	// 	const { name, value } = event.target

	// 	setUser({ ...user, [name]: value })
	// }

	const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
	 // const [result, setResult] = useState("");
	const initialFormState = { id: null, name: '', username: ''}
	const [ user, setUser ] = useState(initialFormState)
	// const onSubmit = (data) => setResult(JSON.stringify(data));
	const onSubmit = (data) => {
		console.log(data)
		// setUser(
		// 	{ ...user, [data.name]: data.userName });
		props.addUser(data)
		history.push("/about");
	}

	return (
		// <form
		// 	onSubmit={event => {
		// 		event.preventDefault()
		// 		if (!user.name || !user.username) return

		// 		props.addUser(user)
		// 		setUser(initialFormState)
		// 	}}
		// >
		// 	<label>Name</label>
		// 	<input type="text" name="name" value={user.name} onChange={handleInputChange} />
		// 	<label>Username</label>
		// 	<input type="text" name="username" value={user.username} onChange={handleInputChange} />
		// 	<button>Add new user</button>
		// </form>


		<form onSubmit={handleSubmit(onSubmit)}>
		
			<Grid container spacing={4}>

			<Container>
				<Row>
					<label>Name</label>
					<input type="text" name="first_name" {...register("name", { required: true, maxLength: 20 })} placeholder="name..." />
				</Row>
				<Row>
				<span className="error">{errors.name && "Name is required"}</span>
				</Row>
				<Row>
				<label>User Name</label>
				<input type="text" name="last_name" {...register("userName", { required: true, pattern: /^[A-Za-z]+$/i })} placeholder="user name..." />
				</Row>
				<span className="error">{errors.userName && "UserName is required"}</span>
				<Row>
				<label>Age</label>
				<input type="number" {...register("age", { required: true, min: 1, max: 99 })} />
				</Row>
				<span className="error">{errors.age && "Age is required"}</span>
				<Row>
				<label>User Role</label>
				<select {...register("role", { required: true })}>
					<option value="">Select...</option>
					<option value="Admin">Admin</option>
					<option value="Member">Member</option>
				</select>
				</Row>
				<span className="error">{errors.role && "User Role is required"}</span>
				<Row>
				{/* <p>{result}</p> */}
				</Row>
				<br></br>
				<Row>
				<input type="submit" />
				</Row>
			</Container>
			</Grid>
		</form>
	)
}

export default AddUserForm
