import React from 'react';
import Button from '../../Components/button/Button';
import icon_pencil from "../../Assets/Admin-user/pencil-button.png";
import Icon_Basket from "../../Assets/Admin-user/busket.png";
import "./table.css";

const usersData = [
    { id: 1, username: "rforester", email: "FLAB07156", phone: "(770) 380-6892", accessLevel: "SuperAdmin", group: "OnSyte- Master" },
    { id: 4, username: "admin", email: "rvaldes@itgec.com", phone: "(904) 248-8173", accessLevel: "SuperAdmin", group: "OnSyte- Master" },
];

function UserTable() {
    return (
        <div className='user-list-container'>
            <div className='station-header'>
                <h2>List</h2>
                <div className='search-add-container'>
                    <input type="text" placeholder='Search...' className='search-input' />
                    <Button color="blue" size="medium" label="+ Add User" type="submit" className='add-user-button' />
                </div>
            </div>
            
            <table className='user-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Access Level</th>
                        <th>Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td className='bold-text'>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.accessLevel}</td>
                            <td>{user.group}</td>
                            <td className='icon'>
                                <img src={icon_pencil} alt="Edit" className='action-icon' />
                                <img src={Icon_Basket} alt="Delete" className='action-icon' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
          
        </div>
    );
}

export default UserTable;
