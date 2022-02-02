import React from 'react'
import './userTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Address</th>
        <th>Birthday</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td className="user-email">{user.email}</td>
            <td>{user.address}</td>
            <td>{user.birthday}</td>
            <td>{user.role}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button edit-btn">
                <FontAwesomeIcon icon={faUserEdit} />Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button delete-btn"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
