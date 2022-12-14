import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";

const Users = ({ users, ...rest }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedItem, setSelectedItem] = useState();
    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedItem]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleProfessionSelect = (item) => {
        setSelectedItem(item);
    };

    const filteredUsers = selectedItem
        ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedItem))
        : users;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedItem();
    };
    return (
        <div className="d-flex">
            <div className="d-flex flex-column flex-shrink-0 p-3">
                {professions && (
                    <>
                        <GroupList
                            selectedItem={selectedItem}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-primary btn-sm m-2"
                            onClick={clearFilter}
                        >
                            Reset
                        </button>
                    </>
                )}
            </div>
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">??????</th>
                            <th scope="col">????????????????</th>
                            <th scope="col">??????????????????</th>
                            <th scope="col">???????????????????? ??????</th>
                            <th scope="col">??????????????</th>
                            <th scope="col">??????????????????</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-contet-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
