import React, { useState, Fragment, useEffect } from 'react'
import AddUserForm from '../../forms/AddUserForm'
import './service.css';

const Service = () => {
  const usersData = [
    { id: 1, name: 'MyaMya', username: 'Angel' },
    { id: 2, name: 'Apirl', username: 'Apirl1234' },
    { id: 3, name: 'Leo', username: 'LeoLeo' },
  ]
  const [users, setUsers] = useState(usersData)
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  return <div className="service-container">
    <div className="flex-row">
      <Fragment>
        <div className="flex-large">
          <h2>Add user</h2>
          <div className="add-form-cover">
            <AddUserForm addUser={addUser} />
          </div>
        </div>
      </Fragment>
    </div>
  </div>;
}

export default Service;
