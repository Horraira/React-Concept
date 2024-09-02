import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      })

    return () => controller.abort()
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u: User) => u.id !== user.id));
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((error: AxiosError) => {
        setError(error.message);
        setUsers(originalUsers);
      }
      )
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'Sohan' };
    setUsers([newUser, ...users]);
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setUsers(originalUsers);
      })
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updateUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u: User) => u.id === user.id ? updateUser : u));
    axios.patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, updateUser)
      .catch((error: AxiosError) => {
        setError(error.message);
        setUsers(originalUsers);
      })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb3"
        onClick={addUser}>Add User</button>
      <ul className="list-group">
        {users.map((user: any) => (
          <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name}
            <div>
              <button className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}>Update</button>
              <button className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}>Delete</button>
            </div>

          </li>
        ))}
      </ul>
    </>
  );
}

export default App
