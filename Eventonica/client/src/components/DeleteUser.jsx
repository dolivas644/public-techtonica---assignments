import { useState } from "react";

//pass the function deleteUser as a prop(function comes from Users) 
const DeleteUser = ({onDeleteUsers}) => {

    //stores the userID that will be deleted
    const [id, setId] =useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //function callback
        onDeleteUsers(id);
        setId('');
    }

    return (
        <div>
            <h3>Delete User</h3>
            <form id="delete-user" action="#" onSubmit={handleSubmit}>
                <fieldset>
                    <label>User ID</label>
                    <input type="text"
                     id="delete-user-id" 
                     value={id}
                    onChange={(e) => setId(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteUser;
