import React, { useEffect, useState } from "react";
import Style from "./UserList.module.css";
import Img1 from "../../assets/Header/logo-stackly.jpg";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setData(users));
  }, []);

  const filtered = data.filter(
    (item) =>
      item.id.toString().includes(query) ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.email && item.email.toLowerCase().includes(query.toLowerCase())) ||
        (item.phone && item.phone.includes(query))
  )
  .sort((a, b) =>{
    if (sortBy === "id") return a.id - b.id;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "email") return (a.email || "").localeCompare(b.email || "");
      if (sortBy === "phone") return (a.phone || "").localeCompare(b.phone || "");
      return 0;
  })

  const addUser = (e) => {
    e.preventDefault();
    if (!newId || !newName || !newEmail || !newPhone) return;
    const newUser = { id: parseInt(newId), name: newName, email: newEmail, phone: newPhone };
    setData([...data, newUser]);
    setNewId("");
    setNewName("");
    setNewEmail("");
    setNewPhone("");
  };

  const deleteUser = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  return (
    <div className={Style.userListWrap}>
      <div className={Style.leftWrap}>
        <img src={Img1} alt="pic" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <li className={Style.serviceEle}>Service</li>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={Style.rightWrap}>
        <div className={Style.secondRow}>
<div className={Style.searchBox}>
          <input
            type="text"
            placeholder="Search by id, name...."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div className={Style.sortBox}>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="sortby" hidden>Sort By</option>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        </div>
        

        <form className={Style.addUserForm} onSubmit={addUser}>
          <input
            type="number"
            placeholder="Enter ID"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Phone"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
          <button type="submit">Add User</button>
        </form>

        <div className={Style.results}>
          <div className={Style.tableWrap}>
<table className={Style.userTable}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>
            <button
              className={Style.deleteBtn}
              onClick={() => deleteUser(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
          </div>
  
</div>

      </div>
    </div>
  );
}
