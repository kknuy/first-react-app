import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };

    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    );
};

export default App;
