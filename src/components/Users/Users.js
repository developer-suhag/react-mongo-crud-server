import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete successfuly");
            const remaingingUsers = users.filter((user) => user._id != id);
            setUsers(remaingingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h2>Users found: {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Name: {user.name} :: Email: {user.email}
            <button> 🖊️ </button>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
