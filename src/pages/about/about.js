import React, { useState, Fragment, useEffect } from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import AddUserForm from '../../forms/AddUserForm'
import EditUserForm from '../../forms/EditUserForm'
import UserTable from '../../tables/UserTable'
import MainService from "../../service/main.service"
import { useHistory } from 'react-router-dom';
import './about.css';

const About = () => {
	const history = useHistory();
	// Data
	const usersData = [
		{ id: 1, name: 'MyaMya', userName: 'Angel' },
		{ id: 2, name: 'Apirl', userName: 'Apirl1234' },
		{ id: 3, name: 'Leo', userName: 'LeoLeo' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	//
	useEffect(() => {
		PostsGet()
	}, [])


	const PostsGet = async () => {
		await MainService.getAll()
			.then(response => {
				console.log(response.data)
				setUsers(response.data)
			})
			.catch(e => {
				console.log('error', e);
			});
	}


	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		console.log(id)
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		console.log(id)
		console.log(updateUser)
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
		handleToClose()
	}

	const editRow = user => {
		console.log(user)
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
		handleClickToOpen()
	}


	//for Dialog

	const [open, setOpen] = React.useState(false);

	const handleClickToOpen = () => {
		setOpen(true);
	};

	const handleToClose = () => {
		setOpen(false);
	};



	return (
		<div className="about-container">
			<div className="main-pannel-marin-top"></div>
			{/* <h1>CRUD App for React OJT</h1> */}
			<div className="flex-row">
				{/* <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                // editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div> */}
				{/* <div className="flex-large">
          <h2>User List</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div> */}
				{/* ----------------------------------------------------------------------------- */}

				<div className="flex-large">
					<div className="user-header">
						<h2 className="user-list">User List</h2>
						<div className="user-add">
							<button className="user-add-btn" onClick={() => history.push("/service")} color="primary">
							<FontAwesomeIcon icon={faPlusSquare} /> <span>Add User</span>
							</button>
						</div>
					</div>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>



				{/* Dialog Component */}

				<Dialog open={open} onClose={handleToClose}>
					<b><DialogTitle>{"User Edit Form"}</DialogTitle></b>
					<DialogContent>
						<DialogContentText>
							<EditUserForm
								// editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<button className="cancel-btn" onClick={handleToClose}
							color="primary" autoFocus>Cancel
          				</button>
					</DialogActions>
				</Dialog>



			</div>
		</div>
	)
}

export default About;
