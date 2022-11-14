import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const formatText = () => {
    return users.length === 0
      ? "Никто не тусанет с тобой"
      : `Сегодня с тобой тусанет ${users.length >= 5 ? users.length + " человек" : users.length + " человека"}`;
  };
  
  const handleDelete = (id) => { 
	setUsers(users.filter(user => user._id !== id));
   }

  return (
    <>
      <h2>
        <span className={users.length === 0 ? "badge bg-warning text-dark m-2": "badge bg-primary m-2"}>{formatText()}</span>
      </h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Рейтинг</th>
			<th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((qualitie) => {
                  return  <span key={qualitie._id} className={"badge bg-" + qualitie.color + " m-2"}>{qualitie.name}</span>; 
				  })}
                </td>
				<td>{user.profession.name}</td>
				<td>{user.completedMeetings}</td>
				<td>{user.rate}/5</td>
				<td><button className="btn-danger btn-sm m-2" onClick={()  => handleDelete(user._id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
