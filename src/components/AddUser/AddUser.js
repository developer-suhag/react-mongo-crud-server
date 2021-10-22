import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };
  return (
    <div>
      <h2>Please Add User</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;
