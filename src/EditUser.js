import { useState } from 'react'
const EditUser = (props) => {
    const [email, setEmail] = useState(props.email)
    const [first_name, set_first_name] = useState(props.first_name)
    const [lastName, setLastName] =useState(props.last_name)
    const [foo, bar] = useState(props.avatar)
    const handleSubmit = (e) => {
        e.preventDefault()
        let updatedUser = {id: props.id, first_name, last_name: lastName, avatar: foo, email}
        console.log(updatedUser)

        props.updateUser(updatedUser)
        setEmail('')
        set_first_name('')
        setLastName('')
        bar('')
    }
    return (
        <div style={{ border: "2px solid pink", margin: '40px'}}>
            <h1>Edit User Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <p>First Name</p>
                <input value={first_name} onChange={(e) => {set_first_name(e.target.value)}} />
                <p>Last Name</p>
                <input value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                <p>Avatar</p>
                <input value={foo} onChange={(e) => {bar(e.target.value)}} />
                <br />
                <button>Edit User</button>

            </form>
        </div>
    )
}

export default EditUser