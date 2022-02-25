import { useState } from 'react'
import EditUser from "./EditUser"

const User = (props) => {
    const [showForm, setShowForm] = useState(false)
    console.log("props:", props)
    const renderUser = () => {
        return (
            <>
                <h1>
                    {props.first_name} {props.last_name}
                </h1>
                <p>Email: {props.email}</p>
                <p>ID: {props.id}</p>
                <p>Avatar:</p>
                <p><img src={props.avatar}/></p>
                <button onClick={() => props.deleteUser(props.id)}>Delete</button>
            </>
        )
    }

    return (
        <div style={{ border: "3px solid blue", margin: "20px" }}>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? 'cancel' : 'edit'}</button>
            {showForm ? <EditUser {...props} /> : renderUser()}
        </div>
    )
}

export default User