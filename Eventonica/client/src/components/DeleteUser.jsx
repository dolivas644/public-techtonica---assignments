import { useState } from "react";

const DeleteUser = ({deleteUser}) => {
    //stores the userID that will be deleted
    const [deleteID, setdeleteID] =useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        deleteUser(deleteID);
    }

    return (
        <div>
            <h3>Delete User</h3>
            <form id="delete-user" action="#" onSubmit={handleSubmit}>
                <fieldset>
                    <label>User ID</label>
                    <input type="text"
                     id="delete-user-id" 
                     value={deleteID}
                    onChange={(e) => setdeleteID(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteUser;
