import React, {Component} from 'react';
import {usersList} from "../../data/data";
import UsersItem from "../usersItem/usersItem";

class UsersList extends Component {
    render() {
        return (
            <div>
                {
                    usersList.map(item => {
                        return (
                            <div>
                                <UsersItem usersItem = {item} key = {usersList.id} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default UsersList;
