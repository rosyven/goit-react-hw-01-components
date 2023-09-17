import React from 'react';
import css from "./FriendList.module.css";
import { FriendListItem } from './FriendListItem.jsx';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map((friend) => (
            <FriendListItem key={friend.id} {...friend} />
        ))}
    </ul>
    )
};