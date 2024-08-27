import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data)
        setUsers(response.data)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  return (
    <>
      <p className="text-danger">{error}</p>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App
