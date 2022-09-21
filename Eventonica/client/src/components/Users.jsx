import { useState, useEffect } from "react";
import DeleteUser from './DeleteUser';


const Users = () => {
    //mock users
    const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    //useState for users
    const [users, setUsers] = useState([marlin, nemo, dory])

    //useState for our working components
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');

    // client/src/components/Users.jsx
const getUsers = async () => {
    const response = await fetch('http://localhost:4000/users');
    const user = await response.json();
    setUsers(user);
  };
  
  useEffect(() => {
    getUsers();
  }, []);

  // Add new user
const handleSubmit1 = async (e) => {
    e.preventDefault();
    const newUser = { id: '', name: '', email: '' };
  
    const rawResponse = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    const content = await rawResponse.json();
  
    setUsers([...users, content]);
  };

  // Add new user
const handleDeleteUsers = async (e) => {
    e.preventDefault();
    const newUser = { id: '', name: '', email: '' };
  
    const rawResponse = await fetch('http://localhost:4000/users', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    const content = await rawResponse.json();
  
    setUsers([...users, content]);
  };
    // id, name, and email are states that store what values the user types in those fields
    // users is an array of user objects
    // All of these states can be defined in the component
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: id, name: name, email: email };
        //adds newUser to users list
        setUsers([...users, newUser]);
    //reset input field
        setID('');
        setName('');
        setEmail('');
    };

    const deleteUser = (deleteId) => {
        //deletes id if it matches the input
        const newUsers = users.filter((i) => i.id !== deleteId);
        //updates the users list
        setUsers(newUsers);
      };

    return (
        <section className="user-management">
            <h2>User Management</h2>
            <ul id="users-list">
                {/* display all existing Users here */}
                {/* <li>...</li> */}
                {users.map((user, index) => {
                    return (
                        <li key={index}>
                            Name: {user.name}, Email: {user.email}
                        </li>
                    );
                })}
                
            </ul>

            <div>
                <h3>Add User</h3>
                <form id="add-user" action="#" onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Name: </label>
                        <br></br>
                        <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <br></br>
                        <label>ID: </label> 
                        <br></br>
                        <input type="text" id="add-user-id" value={id} onChange={(e) => setID(e.target.value)}/>
                        <br></br>
                        <label>Email: </label>
                        <br></br>
                        <input type="text" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </fieldset>
                    {/* Add more form fields here */}
                    <input type="submit" value="Add" onSubmit={handleSubmit}/>
                </form>
            </div>

            <DeleteUser deleteUser={deleteUser}/>
        </section>
    )

}
export default Users;