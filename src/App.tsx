import { useState, useEffect } from "react";
import { AxiosError, CanceledError } from "axios";
import { User } from "./services/user-service";
import userService from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u: User) => u.id !== user.id));
    userService.delete(user.id)
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
    userService.add(newUser)
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
    userService.update(updateUser)
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
