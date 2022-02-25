import { useState } from 'react'
const NewUser = (props) => {
    const [email, setEmail] = useState('')
    const [first_name, set_first_name] = useState('')
    const [lastName, setLastName] = useState('')
    const [foo, bar] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('email input value', email)
        console.log('first name value', foo)

        let newUser = {id: Math.random(), first_name, last_name: lastName, avatar: foo, email}
        console.log(newUser)

        props.addUserCB(newUser)
        setEmail('')
        set_first_name('')
        setLastName('')
        bar('')
    }
    return (
        <div style={{ border: "2px solid green", margin: '40px', padding: '20px' }}>
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
                <button>Add User</button>
            </form>
        </div>
    )
}

export default NewUser