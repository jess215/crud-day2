import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from "axios";
import User from "./Users";
import NewUser from "./NewUser"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getUsers = () => {
    setLoading(true)
    setError(null)
    axios
      .get("https://reqres.in/api/users?delay=1")
      .then((res) => {
        console.log('res:', res)
        console.log('res.data', res.data)
        console.log('res.data.data', res.data.data)
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Some error occurred!!!!!')
        setLoading(false)
      })
  }

  const addUser = (user) => {
    let newUsers = [user, ...users]
    setUsers(newUsers)
  }

  const deleteUser = (id) => {
    console.log('in app js')
    console.log('deleting item with id:', id)

    let newUsers = users.filter(u => u.id !==id)
    setUsers(newUsers)
  }

  const updateUser = (user) => {
    console.log('in app.js user is:', user)
    let updatedUsers = users.map(u => {
      if(u.id === user.id){
        return user
      }
      return u
    })
    setUsers(updatedUsers)
  }

  const renderUsers = () => {
    return users.map((user) => {
      return <User key={user.id} {...user} updateUser={updateUser} deleteUser={() => deleteUser(user.id)} />
    })
  }

  return (
    <div className="App" style={{ border: '5px solid black', margin: '10px', padding: '10px' }}>
      <h1>User List</h1>
      <NewUser addUserCB={addUser}/>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      <div>{renderUsers()}</div>
      <hr />
      <h1>What our 'users' state looks like</h1>
      <div>{JSON.stringify(users)}</div>

      {error && <p style={{color: 'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;
