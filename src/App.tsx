import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import axios, { AxiosError, CanceledError } from "axios";

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController();

    axios.get('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })

    return () => controller.abort()
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
