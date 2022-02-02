import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import MainService from "./service/main.service"
import Header from './components/header/header';
import MainPanel from './components/main-panel/main-panel';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Service from './pages/service/service';
import Testimonial from './pages/testimonial/testimonial';








const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'MyaMya', username: 'Angel' },
		{ id: 2, name: 'Apirl', username: 'Apirl1234' },
		{ id: 3, name: 'Leo', username: 'LeoLeo' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	//
	useEffect(() => {
		PostsGet()
	}, [])


	const PostsGet = async () => {
		await MainService.getAll()
			.then(response => {
				console.log(response.data)
			})
			.catch(e => {
				console.log('error', e);
			});
	}


	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
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
	}

	const editRow = user => {
		console.log(user)
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		// <div className="container">
		// 	<h1>CRUD App for React OJT</h1>
		// 	<div className="flex-row">
		// 		<div className="flex-large">
		// 			{editing ? (
		// 				<Fragment>
		// 					<h2>Edit user</h2>
		// 					<EditUserForm
		// 						// editing={editing}
		// 						setEditing={setEditing}
		// 						currentUser={currentUser}
		// 						updateUser={updateUser}
		// 					/>
		// 				</Fragment>
		// 			) : (
		// 				<Fragment>
		// 					<h2>Add user</h2>
		// 					<AddUserForm addUser={addUser} />
		// 				</Fragment>
		// 			)}
		// 		</div>
		// 		<div className="flex-large">
		// 			<h2>User List</h2>
		// 			<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
		// 		</div>
		// 	</div>
		// </div>
		<Router>
			<div className="container">
				<div className="main-body">
					<div className="header-menu">
						<Header />
					</div>
					<div className="main-panel">
						<MainPanel />
					</div>
				</div>

			</div>
			{/* <Switch> */}
				{/* <Route path='/about' component={About} />
				<Route path='/blog' component={Blog} />
				<Route path='/contact' component={Contact} />
				<Route path='/home' component={Home} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/service' component={Service} />
				<Route path='/testimonial' component={Testimonial} /> */}
			{/* </Switch> */}

		</Router>
	)
}

export default App
