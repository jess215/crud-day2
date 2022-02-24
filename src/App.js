import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from "axios";
import User from "./Users";

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getUsers = () => {
    setLoading(true)
    setError(null)
    axios
      .get("https://reqres.in/api/users?delay=3")
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

  const deleteUser = (id) => {
    console.log('in app js')
    console.log(id)

    let newUsers = users.filter(u => u.id !==id)
  }

  return (
    <div className="App">
      <h1>Boop</h1>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      <div>{users.map((u) => <User key={u.id} {...u} deleteUser={deleteUser}/>)}</div>
      <div>{JSON.stringify(users)}</div>

      {error && <p style={{color: 'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;
