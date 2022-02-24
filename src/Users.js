const User = (props) => {
    return (
        <div style={{border: '1px solid', margin: '20px'}}>
            <h1>{props.first_name} {props.last_name}</h1>
            <p>id: {props.email}</p>
            <p>avatar: {props.avatar}</p>
            <button onClick={() => props.deleteUser(props.id)}>Delete</button>
        </div>
    )
}

export default User